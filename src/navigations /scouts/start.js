import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Scouts, BadgesRequirements, HowItWorks, Videos, FanbitToken, ScoutingStats, BadgeDetail1, BadgeDetail2, BadgeDetail3, BadgeDetail4, BadgeDetail5, BadgeDetail6, BadgeDetail7, BadgeDetail8, BadgeDetail9, BadgeDetail10 } from "../../screens";

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
        name="BadgeDetail1"
        component={BadgeDetail1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail2"
        component={BadgeDetail2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail3"
        component={BadgeDetail3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail4"
        component={BadgeDetail4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail5"
        component={BadgeDetail5}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail6"
        component={BadgeDetail6}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail7"
        component={BadgeDetail7}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail8"
        component={BadgeDetail8}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail9"
        component={BadgeDetail9}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BadgeDetail10"
        component={BadgeDetail10}
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
        name="ScoutingStats"
        component={ScoutingStats}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
