import { NavigationTabIcon } from "@/components/signeduser/navigations";
import signeduser from "@/constants/icons/signeduser";
import { useLinkTo } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";

export default function TabLayout() {
  const linkTo = useLinkTo();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#0F1225B2",
            borderWidth: 1,
            borderColor: "#FFFFFF4D",
            borderRadius: 64,
            height: 60,
            backdropFilter: "blur(10px)",
            shadowColor: "#10192812",
            shadowOffset: { width: 0, height: -7 },
            shadowOpacity: 0.3,
            shadowRadius: 24.8,
            elevation: 10,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <NavigationTabIcon
                icon={signeduser.homeIcon}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: "Categories",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <NavigationTabIcon
                icon={signeduser.categoryIcon}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="sell-an-item"
          options={{
            title: "Sell an item",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <NavigationTabIcon
                icon={signeduser.sellIcon}
                color={color}
                focused={focused}
              />
            ),
            tabBarButton: (props) => (
              <Pressable
                {...props}
                onPress={() => {
                  linkTo("/(modal)/sellmodal");
                }}
                style={{
                  backgroundColor: "#D3AC2A",
                  borderRadius: 9999,
                  width: 36,
                  height: 36,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            title: "Messages",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <NavigationTabIcon
                icon={signeduser.messageIcon}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <NavigationTabIcon
                icon={signeduser.profileIcon}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </>
  );
}
