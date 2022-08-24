import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  ForgetPasswordScreen,
  ForgetPasswordScreen2,
  ForgetPasswordScreen3,
  ForgetPasswordScreen4,
  LoginScreen,
  OnBoarding,
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
      <Stack.Screen name="OnboardingScreen" component={OnBoarding} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="OnBoarding" component={OnboardStartScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="ForgetPasswordScreen2" component={ForgetPasswordScreen2} />
      <Stack.Screen name="ForgetPasswordScreen3" component={ForgetPasswordScreen3} />
      <Stack.Screen name="forgetpassword4" component={ForgetPasswordScreen4} />
    </Stack.Navigator>
  );
};
