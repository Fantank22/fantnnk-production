import { useState } from "react";
import { Input } from "native-base";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView
} from "react-native";

import { Buttons, ForgotHeader, Spacer } from "../../common";
import { StatusBar } from "expo-status-bar";

export const ForgetPasswordScreen3 = ({ navigation }) => {
  const [form, setForm] = useState({
    email: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
  });
  console.log(form);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'light'} />
      <ForgotHeader />
      <ScrollView style={{ marginHorizontal: 15, }} >
        <View style={{ marginTop: 100 }} >
          <Text style={{ color: "white", fontSize: 28, }}>Reset Password  </Text>
        </View>
        <Spacer />
        <View >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "200" }}>
            Your new password must be different from previously used passwords.
          </Text>
        </View>
        <Spacer />
        <Spacer />

        <View>
          <Input
            type={'password'}
            h={Platform.OS === 'ios' ? 50 : 50}
            placeholder="Password"
            size="lg"
            _focus={{ borderColor: "white", color: "white" }}
          />
          <Text style={{ color: "#B3B3B3", fontSize: 12, marginTop: 5 }}>Must be at least 8 characters.</Text>
          <Spacer />
          <Input
            type={'password'}
            h={Platform.OS === 'ios' ? 50 : 50}
            placeholder="Confirm Password"
            size="lg"
            _focus={{ borderColor: "white", color: "white" }}
          />
          <Text style={{ color: "#B3B3B3", fontSize: 12, marginTop: 5 }}>Both password must match.</Text>
        </View>
        <Spacer />
        <Buttons onPress={() => navigation.navigate('forgetpassword4')} title={'Reset Password'} fillBtn />
        <Spacer />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "#378EF0", textAlign: "center", fontSize: 18 }}>
            Skip, I’ll confirm later
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
    position: "relative",
  },
});
