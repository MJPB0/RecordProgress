import { Tabs, router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";

const imagesFolderRoute = "../../assets/images";

export default function TabLayout() {
  const {
    theme: { colors },
    styles,
  } = useStyles(stylesheet);

  const onLogout = () => router.replace("/logout");

  return (
    <Tabs
      screenOptions={{
        header: () => (
          <SafeAreaProvider style={styles.topBarContainer}>
            <Pressable>
              <Image
                source={require(`${imagesFolderRoute}/burger.png`)}
                style={styles.topBarImage}
              />
            </Pressable>
            <Pressable onPress={onLogout}>
              <Image
                source={require(`${imagesFolderRoute}/avatar.png`)}
                style={styles.topBarImage}
              />
            </Pressable>
          </SafeAreaProvider>
        ),
        tabBarActiveBackgroundColor: colors.highlight,
        tabBarInactiveBackgroundColor: colors.background,
        tabBarStyle: { ...styles.tabBarContainer },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="statistics"
        options={{
          tabBarIcon: () => (
            <Image
              source={require(`${imagesFolderRoute}/stats.png`)}
              style={styles.tabBarImage}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: () => (
            <Image
              source={require(`${imagesFolderRoute}/home.png`)}
              style={styles.tabBarImage}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="timer"
        options={{
          tabBarIcon: () => (
            <Image
              source={require(`${imagesFolderRoute}/timer.png`)}
              style={styles.tabBarImage}
            />
          ),
        }}
      />
    </Tabs>
  );
}
