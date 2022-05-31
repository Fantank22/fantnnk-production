import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArtistPage } from "../../screens";

const Stack = createNativeStackNavigator();

export const ArtistOneStartContainer = () => {
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
        name="Artist1Detail"
        component={ArtistPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
