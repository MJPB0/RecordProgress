import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, router } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabLayout() {
  const onLogout = () => router.push("/logout");

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        header: () => (
          <SafeAreaProvider>
            <Button title="Logout" onPress={onLogout} />
          </SafeAreaProvider>
        ),
      }}
    >
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Statistics",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="anchor" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="timer"
        options={{
          title: "Timer",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="clock-o" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
