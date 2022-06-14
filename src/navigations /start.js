import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserContext from "../context/auth";
import { AuthNavigationContainer } from "./auth";
import { HomeDrawerContainer } from "./home/drawer";
import { FanTankNftMarketplace } from "./fantanknftmarketplace";
import { FinancialServicesProjectListings } from "./financialservicesprojectlistings/start";
import { ContactUsContainer } from "./contactus";
import { Fanbit } from "../screens";
import { NotificationStartContainer } from "./notification";
import { CareersStartContainer } from "./Careers/start";

const Stack = createNativeStackNavigator();

export const StartApp = () => {
  const { user } = useContext(UserContext);

  //TODO:check the user status and redirect to home page
  // if (user !== null) {
  //   return <ActivityIndicator />;
  // }

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
      <Stack.Screen
        name="FanTankNftMarketplace"
        component={FanTankNftMarketplace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationStartContainer"
        component={NotificationStartContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactUsContainer"
        component={ContactUsContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fanbit"
        component={Fanbit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CareersStartContainer"
        component={CareersStartContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
