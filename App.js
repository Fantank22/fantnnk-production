import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { UserProvider } from "./src/context";
import { StartApp } from "./src/navigations ";

export default function App() {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <NavigationContainer>
          <StartApp />
        </NavigationContainer>
      </UserProvider>
    </NativeBaseProvider>
  );
}
