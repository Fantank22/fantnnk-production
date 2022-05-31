import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import { MesssageList, MessageDetails } from "../../screens";

const Stack = createNativeStackNavigator();

export const MessageStartContainer = () => {
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
        name="MessagList"
        component={MesssageList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageDetails"
        component={MessageDetails}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#121212",
            color: "#fff",
          },
          headerTintColor: "#fff",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" color={"#fff"} size={20} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
