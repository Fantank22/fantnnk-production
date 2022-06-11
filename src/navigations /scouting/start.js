import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Scouting } from "../../screens";
import { Icon } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "native-base";
const Stack = createNativeStackNavigator();

export const ScoutingContainer = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Scouting"
        component={Scouting}
        options={{
          headerLeft: () => (
            <AntDesign name="arrowleft" size={24} color="#FFF" />
          ),
          headerStyle: {
            backgroundColor: "#000"
          },
          headerTitle: "Scouting",
          headerTitleStyle: {
            color: "#FFF",
          }
        }}
      />

    </Stack.Navigator>
  );
};
