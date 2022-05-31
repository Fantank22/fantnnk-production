import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArtistPage, HomeScreen } from "../../screens";
import { ArtistOneStartContainer } from "../artist1";
import { ArtistTwoStartContainer } from "../artist2";
import { SearchStartContainer } from "../search";
import { TopTrendingArtists } from "./topartist";
import { TopTrendingScouts } from "./topscouts";

const Stack = createNativeStackNavigator();

export const HomeRoutesContainer = () => {
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
        name="HomeIndex"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopTrendingScouts"
        component={TopTrendingScouts}
        options={getHeaderOption("Top Trending Scouts")}
      />
      <Stack.Screen
        name="TopTrendingArtist"
        component={TopTrendingArtists}
        options={getHeaderOption("Top Trending Artist")}
      />
      <Stack.Screen
        name="Artist1"
        component={ArtistOneStartContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Artist2"
        component={ArtistTwoStartContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchHome"
        component={SearchStartContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
