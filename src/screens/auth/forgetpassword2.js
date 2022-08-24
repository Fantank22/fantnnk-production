import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Platform,
  Linking,
} from "react-native";

import { Buttons, ForgotHeader, Spacer } from "../../common";

export const ForgetPasswordScreen2 = ({ navigation }) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'light'} />
      <ForgotHeader />
      <View style={{ marginHorizontal: 15, justifyContent: "center", flex: 1, marginTop: -100 }} >
        <View style={{ alignSelf: "center", backgroundColor: "#192B3E", padding: 20, borderRadius: 10 }} >
          <Image source={require('../../common/assets/images/auth/email.png')} />
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <Text style={{ color: "#fff", fontSize: 22, marginVertical: 20, textAlign: "center", lineHeight: 30 }}>
            Check your email for password recovery instructions
          </Text>
        </View>
        <Spacer />
        <Buttons onPress={() => Linking.openURL('https://www.gmail.com')} title={'Open Email App'} fillBtn />
        <Spacer />
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPasswordScreen3')}>
          <Text style={{ color: "#378EF0", textAlign: "center", fontSize: 18 }}>
            Skip, I’ll confirm later
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "center", position: "absolute", bottom: 50 }}>
        <Text style={{ fontSize: 12, color: "#fff", textAlign: "center" }} >  Did not receive the email? Check your spam folder or</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Text style={{ color: "#378EF0", fontSize: 12, textAlign: "center", marginTop: 10 }}>try another email address</Text>
        </TouchableOpacity>
      </View>
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
