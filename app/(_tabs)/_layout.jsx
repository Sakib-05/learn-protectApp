import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// This component defines the layout for the bottom tab navigator.
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        // Set the icon for each tab
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Choose the icon based on the route name
          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "learn") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "protect") {
            iconName = focused
              ? "shield-checkmark"
              : "shield-checkmark-outline";
          } else if (route.name === "practice") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        // Styling for the tab bar
        tabBarActiveTintColor: "#ffffffff", // This is a nice purple from the design
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#6A5ACD",
        },
        headerStyle: {
          backgroundColor: "#6A5ACD",
        },
        headerTintColor: "#fff",
        headerTitleAlign:"center",
        // increase the font size
        headerTitleStyle: {
          fontSize: 30,
          marginTop: -40
        }
      })}
    >
      {/* Define each screen in the tab bar */}
      {/* name is the name of the jsx file and title is the name of the tab which will be displayed */}
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="learn" options={{ title: "Learn" }} />
      <Tabs.Screen name="protect" options={{title: "Protect",}}/>
      <Tabs.Screen name="practice" options={{title: "My Practice",}}/>
    </Tabs>
  );
}
