import {TouchableOpacity} from 'react-native'
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import { ArtistPage3, Notification } from "../../screens";

const Stack = createNativeStackNavigator();

export const NotificationStartContainer = ({ navigation }) => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitle: 'Notification',
          headerTitleStyle: {
            color: "#fff"
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} >
              <MaterialIcons name="keyboard-arrow-left" size={24} color="#FFF" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Entypo name="dots-three-vertical" size={21} color="#FFF" />
          ),

        }}
      />
    </Stack.Navigator>
  );
};
