import React from "react";
import { Platform } from "react-native";
import { Tabs } from "expo-router";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { HapticTab, HomeHeader } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  const colorScheme = useThemeColor();

  return (
    <Tabs
      screenOptions={{
        tabBarButton: HapticTab,
        tabBarActiveTintColor: colorScheme.backgroundBlack,
        tabBarInactiveTintColor: colorScheme.icon,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
          backgroundColor: colorScheme.background,
          borderColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={24} name="home-filled" color={color} />
          ),
          tabBarIconStyle: {
            marginBottom: 4,
          },
          header: () => <HomeHeader />,
        }}
      />
      <Tabs.Screen
        name="trade"
        options={{
          headerShown: false,
          title: "Trade",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={24} name="currency-exchange" color={color} />
          ),
          tabBarIconStyle: {
            marginBottom: 4,
          },
        }}
      />
    </Tabs>
  );
}
