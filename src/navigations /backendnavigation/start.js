import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Investors } from "../../screens/backendnavigation/investors";
import { MasterPanel } from "../../screens/backendnavigation/masterpanel";


const Stack = createNativeStackNavigator();

export const BackEndNavigationStartContainer = () => {
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
        name="MasterPanel"
        component={MasterPanel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Investors"
        component={Investors}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
