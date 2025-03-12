import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "@/types/message";

interface AuthContextProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userType: "BUYER" | "SELLER") => Promise<void>;
  logout: () => void;
  currentUser: User | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("auth_token");
        const userData = await AsyncStorage.getItem("user_data");

        if (token && userData) {
          setCurrentUser(JSON.parse(userData));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking authentication status", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (userType: "BUYER" | "SELLER") => {
    // Create dummy user based on role
    const user: User = {
      id: userType === "BUYER" ? "buyer_1" : "seller_1",
      username: userType === "BUYER" ? "gift56" : "Thrift Shop",
      role: userType,
    };
    
    await AsyncStorage.setItem("user_data", JSON.stringify(user));
    setCurrentUser(user);
    await AsyncStorage.setItem("auth_token", "dummy_token");
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user_data");
    setCurrentUser(null);
    await AsyncStorage.removeItem("auth_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, isLoading, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
