import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, Tabs } from "expo-router";
import React from "react";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { Pressable } from "react-native";

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }: { size: number; color: string }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
