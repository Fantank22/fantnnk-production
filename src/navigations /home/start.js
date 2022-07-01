import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { CustomTabButton } from "../../common";
import { HomeRoutesContainer } from "./home";
import UserContext from "../../context/auth";
import { MessageStartContainer } from "../message/start";
import { Investment, Network } from "../../screens";
import { ScoutingContainer } from "../scouting";
import { FinancialServicesProjectListings } from "../financialservicesprojectlistings";

const Tab = createBottomTabNavigator();

export const HomeStartRoutesContainer = () => {
  const { user } = useContext(UserContext);

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

      {user !== null && (
        <>
          <Tab.Screen
            name="ArtistProfile"
            component={FinancialServicesProjectListings}
            options={{
              tabBarLabel: "Invest",
            }}
          />
          <Tab.Screen
            name="Middle"
            component={ScoutingContainer}
            options={{
              tabBarButton: (props) => <CustomTabButton {...props} />,
            }}
          />

          <Tab.Screen
            name="Message"
            component={MessageStartContainer}
            options={({ route }) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? "";

              if (routeName === "MessageDetails") {
                return {
                  tabBarStyle: {
                    display: "none",
                  },
                };
              }
            }}
          />
          <Tab.Screen
            name="Network"
            component={Network}
            options={{
              tabBarLabel: "Network",
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};
