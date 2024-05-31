import { Tabs, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Styles, stylesheet } from "./stylesheet";
import ThemedImage from "../../components/shared/ThemedImage";
import TabsHeader from "../../components/headers/tabs-header";
import { useStyles } from "../../hooks/useStyles";
import { Dimensions } from "react-native";

const imagesFolderRoute = "../../assets/images";

export default function TabLayout() {
  const { theme } = useStyles<Styles>(stylesheet);
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
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
          borderTopColor: theme.colors.background,
          backgroundColor: theme.colors.background,
          paddingBottom: 0,
          marginBottom: 35,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: theme.sizes.xl,
          // 3tabs * their width + 6 * their margin
          width: 3 * theme.sizes.xl + 6 * theme.margins.lg,
          marginLeft:
            (Dimensions.get("window").width -
              (3 * theme.sizes.xl + 6 * theme.margins.lg)) /
            2,
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: theme.colors.tabBar.highlight,
        tabBarInactiveBackgroundColor: theme.colors.tabBar.iconBackground,
        tabBarItemStyle: {
          borderRadius: 128,
          width: theme.sizes.xl,
          height: theme.sizes.xl,
          marginHorizontal: theme.margins.lg,
        },
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
