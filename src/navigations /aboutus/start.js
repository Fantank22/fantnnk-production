import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutUs, CSuite, FlowConnectors, FlowDirectors } from "../../screens";

const Stack = createNativeStackNavigator();

export const AboutUsStartContainer = () => {
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
        name="AboutUs"
        component={AboutUs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FlowDirectors"
        component={FlowDirectors}
        options={getHeaderOption("Flow Directors")}
      />
      <Stack.Screen
        name="FlowConnectors"
        component={FlowConnectors}
        options={getHeaderOption("Flow Connectors")}
      />
      <Stack.Screen
        name="CSuite"
        component={CSuite}
        options={getHeaderOption("Csuite")}
      />
    </Stack.Navigator>
  );
};
