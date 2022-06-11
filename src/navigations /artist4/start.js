import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArtistPage3, ArtistPage4 } from "../../screens";

const Stack = createNativeStackNavigator();

export const ArtistFourStartContainer = () => {
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
        name="Artist1Detail4"
        component={ArtistPage4}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
