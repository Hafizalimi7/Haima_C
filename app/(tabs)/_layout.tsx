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
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarStyle: {
            backgroundColor: "#0F1225B2",
            borderWidth: 1,
            borderColor: "#FFFFFF4D",
            width: "95%",
            marginHorizontal: "auto",
            borderRadius: 64,
            height: 60,
            paddingHorizontal: 25,
            marginBottom: 14,
            paddingBottom: 0,
            paddingTop: 10,
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
                className="w-6 h-6"
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
              <Pressable
                onPress={(e) => {
                  e.preventDefault();
                  linkTo("/categories?tab=categories");
                }}
              >
                <NavigationTabIcon
                  icon={signeduser.categoryIcon}
                  color={color}
                  focused={focused}
                  className="w-6 h-6"
                />
              </Pressable>
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
                className="w-6 h-6"
              />
            ),
            tabBarButton: (props) => (
              <Pressable
                {...props}
                onPress={(e) => {
                  e.preventDefault();
                  linkTo("/sell-an-item");
                }}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <NavigationTabIcon
                  icon={signeduser.sellIcon}
                  color={"#FFFFFF"}
                  focused={false}
                  className="w-12 h-12"
                />
              </Pressable>
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
                className="w-6 h-6"
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
                className="w-6 h-6"
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </>
  );
}
