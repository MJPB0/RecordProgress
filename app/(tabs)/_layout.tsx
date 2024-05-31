import { Tabs, router } from "expo-router";
import React, { useEffect, useState } from "react";
import ThemedImage from "../../components/shared/ThemedImage";
import TabsHeader from "../../components/headers/tabs-header";
import { useStyles } from "../../hooks/useStyles";
import { Styles, stylesheet } from "./styles/layout.styles";

const imagesFolderRoute = "../../assets/images";

export default function TabLayout() {
  const { theme, styles } = useStyles<Styles>(stylesheet);
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
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: theme.colors.tabBar.highlight,
        tabBarInactiveBackgroundColor: theme.colors.tabBar.iconBackground,
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
