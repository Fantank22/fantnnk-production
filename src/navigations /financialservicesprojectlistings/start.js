import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {FinancialServicesHome, FinancialServicesNft, FinancialServicesProjects, ProjectDetails} from "../../screens";

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
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={ getHeaderOption('Project Details') }
      />
      <Stack.Screen
        name="FinancialServicesNft"
        component={FinancialServicesNft}
        options={ getHeaderOption('NFT') }
      />

    </Stack.Navigator>
  );
};
