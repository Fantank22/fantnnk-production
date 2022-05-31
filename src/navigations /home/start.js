import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HomeRoutesContainer } from "./home";

const Tab = createBottomTabNavigator();

export const HomeStartRoutesContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeRoutesContainer") {
            iconName = "home-outline";
          } else if (route.name === "Network") {
            iconName = "git-network-outline";
          } else if (route.name === "ArtistProfile") {
            iconName = "md-bar-chart";
          } else if (route.name === "Message") {
            iconName = "chatbox-outline";
          }
          return <Ionicons name={iconName} size={16} color={color} />;
        },
        tabBarActiveTintColor: "#fff",
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: {
          backgroundColor: "#0B0B0B",
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="HomeRoutesContainer"
        component={HomeRoutesContainer}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "";
          if (
            routeName === "TopTrendingScouts" ||
            routeName === "TopTrendingArtist"
          ) {
            return {
              tabBarStyle: {
                display: "none",
              },
            };
          }
          return {
            tabBarLabel: "Home",
          };
        }}
      />
    </Tab.Navigator>
  );
};
