import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Spac } from "../../screens";

const Stack = createNativeStackNavigator();

export const SpacStartContainer = () => {
  const getHeaderOption = (title) => {
    return {
      title: title,
      headerStyle: {
        backgroundColor: "#121212",
        color: "#fff",
      },
      headerTintColor: "#fff",
    };
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="spac"
        component={Spac}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};
