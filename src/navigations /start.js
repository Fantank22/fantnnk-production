import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserContext from "../context/auth";
import { AuthNavigationContainer } from "./auth";
import { HomeDrawerContainer } from "./home/drawer";

const Stack = createNativeStackNavigator();

export const StartApp = () => {
  const { user } = useContext(UserContext);

  if (user !== null) {
    return <ActivityIndicator />;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthNavigationContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeDrawerContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
