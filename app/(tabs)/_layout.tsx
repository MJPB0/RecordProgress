import { Tabs, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./stylesheet";
import ThemedImage from "../../components/shared/ThemedImage";
import TabsHeader from "../../components/headers/tabs-header/TabsHeader";

const imagesFolderRoute = "../../assets/images";

export default function TabLayout() {
  const { theme, styles } = useStyles(stylesheet);
  const [view, setView] = useState<"day" | "month">("day");
  const [isDashboard, setIsDashboard] = useState(true);

  useEffect(() => {
    if (!isDashboard) return;

    router.setParams({ view });
  }, [view, isDashboard]);

  return (
    <Tabs
      screenOptions={{
        header: () => (
          <TabsHeader view={view} setView={setView} isDashboard={isDashboard} />
        ),
        tabBarActiveBackgroundColor: theme.colors.highlight,
        tabBarInactiveBackgroundColor: theme.colors.background,
        tabBarStyle: { ...styles.tabBarContainer },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="statistics"
        listeners={{ tabPress: () => setIsDashboard(false) }}
        options={{
          tabBarIcon: () => (
            <ThemedImage
              size="md"
              source={require(`${imagesFolderRoute}/stats.png`)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        listeners={{ tabPress: () => setIsDashboard(true) }}
        options={{
          tabBarIcon: () => (
            <ThemedImage
              size="md"
              source={require(`${imagesFolderRoute}/home.png`)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="timer"
        listeners={{ tabPress: () => setIsDashboard(false) }}
        options={{
          tabBarIcon: () => (
            <ThemedImage
              size="md"
              source={require(`${imagesFolderRoute}/timer.png`)}
            />
          ),
        }}
      />
    </Tabs>
  );
}
