import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BuyFanbit1, BuyFanbit2, Fanbit1, FanbitSelectTransactionType, FanbitSend, FanbitTransparency, Payment } from "../../screens";

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
      <Stack.Screen
        name="BuyFanbit2"
        component={BuyFanbit2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FanbitSend"
        component={FanbitSend}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FanbitSelectTransactionType"
        component={FanbitSelectTransactionType}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FanbitTransparency"
        component={FanbitTransparency}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};
