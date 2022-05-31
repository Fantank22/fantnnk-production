import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArtistPage2 } from "../../screens";

const Stack = createNativeStackNavigator();

export const ArtistTwoStartContainer = () => {
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
        name="Artist1Detail2"
        component={ArtistPage2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
