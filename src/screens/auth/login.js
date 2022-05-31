import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform
} from "react-native";
import { FormControl, Input, Button } from "native-base";

import {
  Divider,
  IocnButton,
  inputHandle,
  MyKeyboardAvoidingView,
  SocianBtn,
} from "../../common";

export const LoginScreen = ({ navigation }) => {
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

  const loginHandle = () => {
    let errorCount = 0;

    if (form.email.value === "") {
      setForm((prev) => ({ ...prev, email: { ...prev.email, error: true } }));
      errorCount += 1;
    }

    if (form.password.value === "") {
      setForm((prev) => ({
        ...prev,
        password: { ...prev.password, error: true },
      }));
      errorCount += 1;
    }

    if (errorCount !== 0) {
      return;
    }

    navigation.navigate("Artist");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0B0B0B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyKeyboardAvoidingView>
        <ScrollView>
          <View style={{ padding: 20, flex: 1 }}>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: Platform.OS === 'ios' ? 100 : 50 }} >
              <Image source={require('../../common/assets/images/logo-text.png')} />
            </View>
            <Text style={styles.screenTitle}>Login</Text>

            <SocianBtn
              iconName="facebook-f"
              backGrounColor="#378EF0"
              iconColor="white"
              name="Facebook"
            />
            <SocianBtn
              iconName="logo-google"
              backGrounColor="#378EF0"
              iconColor="white"
              name="Google"
            />
            <SocianBtn
              iconName="logo-apple"
              backGrounColor="white"
              iconColor="black"
              name="Apple"
            />
            <Divider tip="OR" />

            <FormControl isInvalid={form.email.error} w="100%" mb={4}>
              <Input
                placeholder="Enter Email"
                height={50}
                onChangeText={(value) => inputHandle("email", value, setForm)}
                type="email"
                color={"#fff"}
              />
              <FormControl.ErrorMessage>
                Try different from previous passwords.
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={form.password.error} w="100%" mb={4}>
              <Input
                placeholder="Enter password"
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
            <View style={styles.forgetTextArea}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgetPassword")}
              >
                <Text style={styles.forgetText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>

            <Button colorScheme="primary" onPress={loginHandle}>
              Login
            </Button>

            <View style={styles.skipLogin}>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.skipLoginText}>Skip Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signUpPart}>
              <Text style={styles.signUpPartText}>Dont have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={{ color: "#1976D2", fontSize: 18 }}>Sign Up</Text>
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
    textAlign: "center",
  },

  skipLogin: {
    marginBottom: 20,
    marginTop: 15,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  skipLoginText: {
    color: "#A9A9A9",
    fontSize: 16,
    textAlign: "center",
    textDecorationLine: "underline",
  },

  signUpPart: {
    marginBottom: 40,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  signUpPartText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },

  forgetTextArea: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  forgetText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
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
