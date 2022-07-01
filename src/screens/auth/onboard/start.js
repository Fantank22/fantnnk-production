import { useState } from "react";
import { Image, Platform, SafeAreaView, StyleSheet } from "react-native";
import { TabHeader } from "./components/header";
import { StepOne } from "./stepone";
import { StepTwo } from "./steptwo";
import { StepThree } from "./stepthree";
import { StepFour } from "./setpfour";
import { StepFive } from "./stepfive";
import { StatusBar } from "expo-status-bar";

export const OnboardStartScreen = ({ navigation }) => {
  const [activeStep, setActiveStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    userName: "",
    email: "",
    country: "",
    state: "",
    address: "",
    gender: "",
    age: {
      day: "",
      month: "",
      year: "",
    },
    ethiticity: "",
    education: "",
    income: "",
    artForm: "",
    genre: [],
    userType: "",
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#0B0B0B",
        paddingTop:Platform.OS === 'ios'?0:35
      }}
    >
      <StatusBar style="light" />

      <TabHeader activeStep={activeStep} setActiveStep={setActiveStep} />
      {activeStep === 1 ? (
        <StepOne setActiveStep={setActiveStep} form={form} setForm={setForm} />
      ) : activeStep === 2 ? (
        <StepTwo setActiveStep={setActiveStep} form={form} setForm={setForm} />
      ) : activeStep === 3 ? (
        <StepThree
          setActiveStep={setActiveStep}
          form={form}
          setForm={setForm}
        />
      ) : activeStep === 4 ? (
        <StepFour setActiveStep={setActiveStep} form={form} setForm={setForm} />
      ) : activeStep === 5 ? (
        <StepFive
          setActiveStep={setActiveStep}
          form={form}
          setForm={setForm}
          navigation={navigation}
        />
      ) : (
        ""
      )}
      <Image
        source={require("../../../common/assets/images/1.png")}
        style={styles.bgImage1}
      />
      <Image
        source={require("../../../common/assets/images/2.png")}
        style={styles.bgImage2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImage1: {
    height: 300,
    width: 200,
    position: "absolute",
    top: 50,
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
