import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { ContactUs } from "../../screens";

const Stack = createNativeStackNavigator();

export const ContactUsContainer = () => {
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
        name="ContactUs"
        component={ContactUs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
