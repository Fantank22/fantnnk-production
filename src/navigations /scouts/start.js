import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Scouts, BadgesRequirements, BadgeDetail } from "../../screens";

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
    </Stack.Navigator>
  );
};
