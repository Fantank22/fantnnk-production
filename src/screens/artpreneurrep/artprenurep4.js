import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";

export const ArtrepreneurRep4 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'light'} />
      <ScrollView>
        <ImageBackground
          source={require("../../common/assets/images/artrepreneurrep/artrepreneurRepbg4.png")}
          style={{
            height: 271.54,
            paddingHorizontal: 15,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
              marginTop: 25,
              paddingHorizontal: 30,
            }}
          >
            Claim Your Share Of This New Arts & Entertainment Era
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              textAlign: "center",
              marginVertical: 25,
              paddingHorizontal: 30,
            }}
          >
            Start Your Global Talent Scouting Business for Only{" "}
            <Text style={{ color: "#378EF0" }}>$79.99</Text> Start Up Fee +{" "}
            <Text style={{ color: "#378EF0" }}>$45 / month</Text> business
            support & services fee.{" "}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("WhyArtrepreneurRep")}
            style={{
              backgroundColor: "#378EF0",
              alignSelf: "center",
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: 20,
            }}
          >
            <Text
              style={{

                fontSize: 16,
                color: "#fff",

              }}
            >
              Enroll Now
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ paddingHorizontal: 15, paddingTop: 30 }}>
          <Text style={{ color: "#fff" }}>
            <Text style={{ fontWeight: "700" }}>
              Your FanTank Scouting Business Start Up
            </Text>{" "}
            <Text style={{ fontWeight: "600", color: "#378EF0" }}>
              Fee ($79)
            </Text>{" "}
            covers the costs associated with establishing & servicing your
            business for 1 Year in any country where FanTank operates , which as
            of January 1, 2023 is
          </Text>
          {/* <View style={{ flexDirection: "row" }}>
            <Image
              style={{ marginRight: 5 }}
              source={require("../assets/ukflag.png")}
            />
            <Image
              style={{ marginRight: 5 }}
              source={require("../assets/usflag.png")}
            />
            <Image source={require("../assets/brazilflag.png")} />
          </View> */}
          <Text style={{ color: "#fff", marginTop: 20 }}>
            The <Text style={{ color: "#378EF0" }}>$45 / month</Text> support &
            services fee allows you to receive our portfolio of services
            offering curated according to your selection.
          </Text>
          <Text style={{ color: "#fff", marginTop: 20 }}>
            FanTank covers a full range of services made for the Artrepreneur,
            so you can focus on what matters most - building your scouting
            business!{" "}
          </Text>

          <View
            style={{
              backgroundColor: "#202021",
              borderColor: "#313131",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#fff", marginTop: 10 }}>
              • Hierachy Reporting System{" "}
            </Text>
            <Text style={{ color: "#fff", marginTop: 10 }}>
              • Backend Event Data Tagging System - where reps are kept abreast
              of local events and tag them for QR Code Voting Credits
            </Text>
            <Text style={{ color: "#fff", marginTop: 10 }}>
              • Voting Data Generation Tracking- (Individual & Team){" "}
            </Text>
            <Text style={{ color: "#fff", marginTop: 10 }}>
              • Access to FanTank's Transparency Reporting Dashboard
            </Text>
          </View>
        </View>
      </ScrollView>

      <Image
        style={styles.bgImage1}
        source={require('../../common/assets/images/3.png')}
      />
      <Image
        style={styles.bgImage2}
        source={require('../../common/assets/images/5.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform === "ios" ? 0 : 40,
  },
  bgImage1: {
    position: "absolute",
    top: 40,
    right: 0,
    zIndex: -1000
  },
  bgImage2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1000
  }
});
