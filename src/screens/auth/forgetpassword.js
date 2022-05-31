import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FormControl, Input, Button } from "native-base";

import { inputHandle, MyKeyboardAvoidingView, Spacer } from "../../common";

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
    <View
      style={{
        flex: 1,
        backgroundColor: "#0B0B0B",
      }}
    >
      <MyKeyboardAvoidingView>
        <ScrollView>
          <View
            style={{
              padding: 20,
              alignItems: "center",
              flex: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ position: "absolute", top: 80, left: 20 }}
            >
              <Ionicons
                name="arrow-back-outline"
                size={28}
                color="white"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...styles.screenTitle,
                marginBottom: 10,
                marginTop: 120,
              }}
            >
              Forgot Your{" "}
            </Text>
            <Text
              style={{ ...styles.screenTitle, marginBottom: 30, marginTop: 10 }}
            >
              Password?
            </Text>

            <Input placeholder="Email Address" />
            <Spacer />
            <Button w={"100%"}>Send Reset Link</Button>
            <View style={styles.signUpPart}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signUpPartText}> Back to sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </MyKeyboardAvoidingView>
      <Image
        source={require("../../common/assets/images/1.png")}
        style={styles.bgImage1}
      />
      <Image
        source={require("../../common/assets/images/2.png")}
        style={styles.bgImage2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },

  screenTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
    marginTop: 180,
  },

  backToLogin: {
    marginTop: 40,
    marginBottom: 40,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  backToLoginText: {
    color: "#fff",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  bgImage1: {
    height: 300,
    width: 200,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -1000,
  },

  bgImage2: {
    height: 214,
    width: 281,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1000,
  },
});
