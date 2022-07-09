import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventsGetTickets, EventsTicketCategories, EventsTicketing, EventsTicketsSeating } from '../../screens'

const Stack = createNativeStackNavigator();

export const EventsTicketingContainer = () => {
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
        name="EventsTicketing"
        component={EventsTicketing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventsTicketCategories"
        component={EventsTicketCategories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventsGetTickets"
        component={EventsGetTickets}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventsTicketsSeating"
        component={EventsTicketsSeating}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  );
};
