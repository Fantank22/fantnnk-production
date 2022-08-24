import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Input } from "native-base";

import { Buttons, ForgotHeader, MyKeyboardAvoidingView, Spacer } from "../../common";
import { StatusBar } from "expo-status-bar";

export const ForgetPasswordScreen = ({ navigation }) => {
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
      <ScrollView>
        <MyKeyboardAvoidingView>
          <View style={{ marginHorizontal: 15 }} >
            <Text style={{ color: "white", fontSize: 28, marginTop: 50 }}>Forgate Your </Text>
            <Text style={{ color: "white", fontSize: 28, marginBottom: 20 }}>
              password?
            </Text>
            <View style={styles.forgateInstrac}>
              <Feather name="check-circle" size={24} color="white" />
              <Text style={styles.forgateInstracText}> Don't Worry</Text>
            </View>
            <View style={styles.forgateInstrac}>
              <Feather name="check-circle" size={24} color="white" />
              <Text style={styles.forgateInstracText}>
                Enter email from account
              </Text>
            </View>
            <View style={styles.forgateInstrac} >
              <Feather name="check-circle" size={24} color="white" />
              <Text style={styles.forgateInstracText}>
                Go to email for password reset {'\n'} instructions.
              </Text>
            </View>
            <Spacer />
            <Input
              h={Platform.OS === 'ios' ? 50 : 50}
              placeholder="Email Address"
              size="lg"
              _focus={{ borderColor: "white", color: "white" }}
            />
            <Spacer />
            <Buttons onPress={() => navigation.navigate('ForgetPasswordScreen2')} title={'Send Instructions'} fillBtn />
            <Spacer />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: "#378EF0", textAlign: "center", fontSize: 18 }}>
                Back to Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </MyKeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingTop: Platform.OS === 'ios' ? 0 : 35
  },
  topLogo: {
    alignItems: "center",
    marginTop: 50,
  },
  forgateInstrac: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
    fontWeight: '100'
  },
  forgateInstracText: { color: "white", fontSize: 17, fontWeight: "200", marginLeft: 10 },
});
