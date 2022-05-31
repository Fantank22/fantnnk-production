import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  ForgetPasswordScreen,
  LoginScreen,
  OnboardStartScreen,
  SignupScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

export const AuthNavigationContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OnBoarding" component={OnboardStartScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
};
