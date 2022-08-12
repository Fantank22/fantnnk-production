import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BuyFanbit1, Fanbit1 } from "../../screens";

const Stack = createNativeStackNavigator();

export const FanbitStackContainer = () => {
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
        name="Fanbit1"
        component={Fanbit1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BuyFanbit1"
        component={BuyFanbit1}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  );
};
