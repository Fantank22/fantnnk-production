import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { Careers } from "../../screens/careers";


const Stack = createNativeStackNavigator();

export const CareersStartContainer = () => {
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
        name="Careers"
        component={Careers}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
