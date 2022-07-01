import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Financialservice, Servicedetails } from "../../screens"; 

const Stack = createNativeStackNavigator();

export const ServiceContainer = () => {
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
        name="Financialservice"
        component={Financialservice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Servicedetails"
        component={Servicedetails}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  );
};
