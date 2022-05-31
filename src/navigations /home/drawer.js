import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "../../common";
import { HomeStartRoutesContainer } from "./start";
import { AboutUsStartContainer } from "../aboutus";
import { ScoutStartContainer } from "../scouts";
import { ArtrepreneurStartContainer } from "../artpreneurrep";
import { ArtistListStartContainer } from "../artist1";

const Drawer = createDrawerNavigator();

export const HomeDrawerContainer = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#1A1D1F",
          width: 263,
          padding: 15,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStartDrawer"
        component={HomeStartRoutesContainer}
      />

      <Drawer.Screen
        name="AboutUsStartDrawer"
        component={AboutUsStartContainer}
      />
      <Drawer.Screen name="ScoutStartDrawer" component={ScoutStartContainer} />
      <Drawer.Screen
        name="ArtrepreneurStartDrawer"
        component={ArtrepreneurStartContainer}
      />
      
    </Drawer.Navigator>
  );
};
