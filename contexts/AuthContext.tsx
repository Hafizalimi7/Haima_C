import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  showAuthSheet: boolean;
  setShowAuthSheet: (visible: boolean) => void;
  authError: string | null;
  setAuthError: (message: string | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthSheet, setShowAuthSheet] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const login = () => {
    setIsAuthenticated(true);
    setShowAuthSheet(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, showAuthSheet, setShowAuthSheet, authError, setAuthError }}>
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
