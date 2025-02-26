import { useNavigationContainerRef, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { View, Image } from "react-native";
import { images } from "@/constants";
import useBooleanControl from "@/hooks/useBooleanControl";

const AuthRedirect = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { replace } = useRouter();
  const navigationRef = useNavigationContainerRef();
  const { state: isNavigationReady, setTrue: setIsNavigationReadyTrue } =
    useBooleanControl();

  useEffect(() => {
    const unsubscribe = navigationRef?.addListener("state", () => {
      setIsNavigationReadyTrue();
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [navigationRef]);

  useEffect(() => {
    if (!isLoading && isNavigationReady) {
      if (isAuthenticated) {
        replace("/home");
      } else {
        replace("/");
      }
    }
  }, [isAuthenticated, isLoading, isNavigationReady]);

  if (isLoading || !isNavigationReady) {
    return (
      <View className="flex-1 items-center justify-center absolute top-0 z-40">
        <Image
          source={images.splashImage}
          resizeMode="cover"
          className="w-full h-full"
        />
      </View>
    );
  }

  return null;
};

export default AuthRedirect;
