import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ArtrepreneurRep,
  ArtepreneurLogin,
  ArtrepreneurRep4,
  WhyArtrepreneurRep,
  ArtepreneurSignup,
  NeedHelp,
  SubmitQuestion,
  ArtreneurTextReviews,
  ArtreneurVideoReviews,
  ArtrepreneorFaq,
} from "../../screens";

const Stack = createNativeStackNavigator();

export const ArtrepreneurStartContainer = () => {

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
        name="ArtepreneurSignup"
        component={ArtepreneurSignup}
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
      <Stack.Screen
        name="NeedHelp"
        component={NeedHelp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SubmitQuestion"
        component={SubmitQuestion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArtreneurTextReviews"
        component={ArtreneurTextReviews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArtreneurVideoReviews"
        component={ArtreneurVideoReviews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArtrepreneorFaq"
        component={ArtrepreneorFaq}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
