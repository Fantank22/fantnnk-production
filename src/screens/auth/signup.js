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

export const SignupScreen = ({ navigation }) => {
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
          <View style={{ padding: 20, alignItems: "center", flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ position: "absolute", top: 90, left: 20 }}
            >
              <Ionicons
                name="arrow-back-outline"
                size={28}
                color="white"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Sign Up</Text>

            <FormControl isInvalid={form.email.error} w="100%" mb={4}>
              <Input
                placeholder="Full Name"
                height={50}
                onChangeText={(value) => inputHandle("email", value, setForm)}
                type="text"
                color={"#fff"}
              />
              <FormControl.ErrorMessage>
                Please input your full name
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={form.email.error} w="100%" mb={4}>
              <Input
                placeholder="Username"
                height={50}
                onChangeText={(value) => inputHandle("email", value, setForm)}
                type="text"
                color={"#fff"}
              />
              <FormControl.ErrorMessage>
                Please input your username
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={form.email.error} w="100%" mb={4}>
              <Input
                placeholder="Email Address"
                height={50}
                onChangeText={(value) => inputHandle("email", value, setForm)}
                type="email"
                color={"#fff"}
              />
              <FormControl.ErrorMessage>
                Please input your email
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={form.password.error} w="100%" mb={4}>
              <Input
                placeholder="Password"
                height={50}
                onChangeText={(value) =>
                  inputHandle("password", value, setForm)
                }
                type="password"
                color={"#fff"}
              />
              <FormControl.ErrorMessage>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={form.password.error} w="100%" mb={4}>
              <Input
                placeholder="Confirm Password"
                height={50}
                onChangeText={(value) =>
                  inputHandle("password", value, setForm)
                }
                type="password"
                color={"#fff"}
              />
              <FormControl.ErrorMessage>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
            </FormControl>

            <Spacer />
            <Button w={"100%"} colorScheme="primary">
              Continue
            </Button>

            <View style={styles.signUpPart}>
              <Text style={styles.signUpPartText}>You have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#1976D2", fontSize: 18 }}>Sign In</Text>
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

  signUpPart: {
    marginTop: 40,
    marginBottom: 40,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  signUpPartText: {
    color: "#fff",
    fontSize: 18,
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
