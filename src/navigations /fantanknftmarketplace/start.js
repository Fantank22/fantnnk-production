import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FinancialServices, MainFantankMarketplace, SingleNFT, Favourites, ConnectWallet, EquityCrowdFunding, ExploreFantankMarketplace, StatsActivity, NftAbout, } from "../../screens";
import { NftMarketPlaceDrawerContainer } from "./drawer";

const Stack = createNativeStackNavigator();

export const FanTankNftMarketplace = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NftMarketPlaceDrawerContainer"
        component={NftMarketPlaceDrawerContainer}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        name="ExploreFantankMarketplace"
        component={ExploreFantankMarketplace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StatsActivity"
        component={StatsActivity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NftAbout"
        component={NftAbout}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};
