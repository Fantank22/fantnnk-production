import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InformationTectnology, InformationTectnologyDetails } from "../../screens";

const Stack = createNativeStackNavigator();

export const InformationTechnologyContainer = () => {
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
        name="InformationTectnology"
        component={InformationTectnology}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InformationTectnologyDetails"
        component={InformationTectnologyDetails}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  );
};
