import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {FinancialServicesHome, FinancialServicesProjects} from "../../screens";

const Stack = createNativeStackNavigator();

export const FinancialServicesProjectListings= () => {
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
        name="FinancialServicesHome"
        component={FinancialServicesHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FinancialServicesProjects"
        component={FinancialServicesProjects}
        options={ getHeaderOption('Projects') }
      />

    </Stack.Navigator>
  );
};
