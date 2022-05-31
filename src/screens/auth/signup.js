import { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FormControl, Input, Button } from "native-base";

import { inputHandle, MyKeyboardAvoidingView, Spacer } from "../../common";
import UserContext from "../../context/auth";

export const SignupScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);

  const [form, setForm] = useState({
    name: {
      value: "",
      error: false,
    },
    username: {
      value: "",
      error: false,
    },
    email: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
    confirmPassword: {
      value: "",
      error: false,
    },
  });

  const signupHandle = () => {
    let errorCount = 0;

    if (form.name.value === "") {
      setForm((prev) => ({ ...prev, name: { ...prev.name, error: true } }));
      errorCount += 1;
    }

    if (form.username.value === "") {
      setForm((prev) => ({
        ...prev,
        username: { ...prev.username, error: true },
      }));
      errorCount += 1;
    }

    if (form.email.value === "") {
      setForm((prev) => ({
        ...prev,
        email: { ...prev.email, error: true },
      }));
      errorCount += 1;
    }

    if (form.password.value === "") {
      setForm((prev) => ({
        ...prev,
        password: { ...prev.password, error: true },
      }));
      errorCount += 1;
    }

    if (form.confirmPassword.value === "") {
      setForm((prev) => ({
        ...prev,
        confirmPassword: { ...prev.confirmPassword, error: true },
      }));
      errorCount += 1;
    }

    if (errorCount !== 0) {
      return;
    }

    setUser({
      name: "Md Abdullah Al Noman",
      email: form.email.value,
      token: 200,
    });

    navigation.navigate("OnBoarding");
  };

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
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: Platform.OS === "ios" ? 100 : 50,
              }}
            >
              <Image
                source={require("../../common/assets/images/logo-text.png")}
              />
            </View>
            <Text style={styles.screenTitle}>Sign Up</Text>

            <FormControl isInvalid={form.name.error} w="100%" mb={4}>
              <Input
                placeholder="Full Name"
                height={50}
                onChangeText={(value) => inputHandle("name", value, setForm)}
                type="text"
                color={"#fff"}
              />
              <FormControl.ErrorMessage>
                Please input your full name
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={form.username.error} w="100%" mb={4}>
              <Input
                placeholder="Username"
                height={50}
                onChangeText={(value) =>
                  inputHandle("username", value, setForm)
                }
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

            <FormControl isInvalid={form.confirmPassword.error} w="100%" mb={4}>
              <Input
                placeholder="Confirm Password"
                height={50}
                onChangeText={(value) =>
                  inputHandle("confirmPassword", value, setForm)
                }
                type="password"
                color={"#fff"}
              />
              <FormControl.ErrorMessage>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
            </FormControl>

            <Spacer />
            <Button w={"100%"} colorScheme="primary" onPress={signupHandle}>
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
    marginTop: 20,
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
