import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArtistPage3 } from "../../screens";

const Stack = createNativeStackNavigator();

export const ArtistThreeStartContainer = () => {
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
        name="Artist1Detail3"
        component={ArtistPage3}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
