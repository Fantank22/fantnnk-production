import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FinancialServices, MainFantankMarketplace, SingleNFT, Favourites, ConnectWallet, EquityCrowdFunding } from "../../screens";

const Stack = createNativeStackNavigator();

export const FanTankNftMarketplace = () => {
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
        name="FinancialServices"
        component={FinancialServices}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainFantankMarketplace"
        component={MainFantankMarketplace}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SingleNFT"
        component={SingleNFT}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConnectWallet"
        component={ConnectWallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EquityCrowdFunding"
        component={EquityCrowdFunding}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};
