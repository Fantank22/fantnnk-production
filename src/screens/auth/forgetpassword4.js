import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";

import { Buttons, Spacer } from "../../common";

export const ForgetPasswordScreen4 = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'light'} />
      <View style={{ alignSelf: "center", position: "absolute", top: 50 }} >
        <Image style={{ height: 41, width: 123 }} source={require('../../common/assets/images/logo-text.png')} />
      </View>
      <View style={{ marginHorizontal: 15 }} >
        <View style={{ alignSelf: "center", backgroundColor: "#192B3E", padding: 20, borderRadius: 10 }} >
          <Image source={require('../../common/assets/images/auth/thumbs-up.png')} />
        </View>
        <View style={{ marginTop: 15 }} >
          <Text style={{ color: "#fff", fontSize: 34, textAlign: "center", fontWeight: "bold" }}>
            Awesome!
          </Text>
          <Text style={{ color: "#fff", fontSize: 17, textAlign: "center", fontWeight: "200", marginTop: 15 }}>
            Password Reset Successful
          </Text>
        </View>
        <Spacer />
        <Buttons onPress={() => navigation.navigate('Login')} title={'Go back to Sign in'} fillBtn />

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
    justifyContent: 'center',
    position: "relative",
  },
});
