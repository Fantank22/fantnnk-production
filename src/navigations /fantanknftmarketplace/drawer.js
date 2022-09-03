import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomNftDrawer } from "../../common";
import { ExploreFantankMarketplace, FinancialServices, MainFantankMarketplace, StatsActivity } from "../../screens";

const Drawer = createDrawerNavigator();

export const NftMarketPlaceDrawerContainer = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="FinancialServices"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#1A1D1F",
          width: 263,
          padding: 15,
        },
      }}
      drawerContent={(props) => <CustomNftDrawer {...props} />}
    >
      <Drawer.Screen
        name="FinancialServices"
        component={FinancialServices}
      />
      <Drawer.Screen
        name="MainFantankMarketplace"
        component={MainFantankMarketplace}
      />
      <Drawer.Screen
        name="ExploreFantankMarketplace"
        component={ExploreFantankMarketplace}
      />
      <Drawer.Screen
        name="StatsActivity"
        component={StatsActivity}
      />
    </Drawer.Navigator>
  );
};
