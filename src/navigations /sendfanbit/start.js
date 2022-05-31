import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ArtistPageSendFanbitScreenOne,
  ArtistPageSendFanbitScreenThree,
  ArtistPageSendFanbitScreenTwo,
} from "../../screens";

const Stack = createNativeStackNavigator();

export const SendFanBitStartContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SendFanBitOne"
        component={ArtistPageSendFanbitScreenOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SendFanBitTwo"
        component={ArtistPageSendFanbitScreenTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SendFanBitThree"
        component={ArtistPageSendFanbitScreenThree}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
