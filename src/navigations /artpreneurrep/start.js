import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ArtrepreneurRep,
  ArtepreneurLogin,
  ArtrepreneurRep4,
  WhyArtrepreneurRep,
  TextReviewsArtrepreneurRep,
} from "../../screens";

const Stack = createNativeStackNavigator();

export const ArtrepreneurStartContainer = () => {
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
        name="ArtrepreneurRep"
        component={ArtrepreneurRep}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArtepreneurLogin"
        component={ArtepreneurLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArtrepreneurRep4"
        component={ArtrepreneurRep4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WhyArtrepreneurRep"
        component={WhyArtrepreneurRep}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TextReviewsArtrepreneurRep"
        component={WhyArtrepreneurRep}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
