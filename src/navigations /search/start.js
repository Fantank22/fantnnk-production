import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ArtistPage, Filter, IntakeQuestionnaire, Search2, Search3, SearchHome, TalentBookingService } from "../../screens";

const Stack = createNativeStackNavigator();

export const SearchStartContainer = () => {
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
        name="SearchHome"
        component={SearchHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search2"
        component={Search2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search3"
        component={Search3}
        options={getHeaderOption('Search')}
      />
        <Stack.Screen
        name="TalentBookingService"
        component={TalentBookingService}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="IntakeQuestionnaire"
        component={IntakeQuestionnaire}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Filter"
        component={Filter}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
