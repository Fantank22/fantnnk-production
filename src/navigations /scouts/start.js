import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Scouts, BadgesRequirements, BadgeDetail, HowItWorks, Videos, Fanbit, ScoutingStats } from "../../screens";

const Stack = createNativeStackNavigator();

export const ScoutStartContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Scouts"
        component={Scouts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgesRequirements"
        component={BadgesRequirements}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail"
        component={BadgeDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HowItWorks"
        component={HowItWorks}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Videos"
        component={Videos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fanbit"
        component={Fanbit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScoutingStats"
        component={ScoutingStats}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
