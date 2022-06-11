import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArtistPage3, ArtistPage4, Artistpage5 } from "../../screens";

const Stack = createNativeStackNavigator();

export const ArtistFiveStartContainer = () => {
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
        name="Artist1Detail5"
        component={Artistpage5}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
