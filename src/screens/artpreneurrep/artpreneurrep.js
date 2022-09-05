import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

export const ArtrepreneurRep = ({ navigation }) => {
  const services = [
    { title: "Search & Explore", buttonTitle: "Explore Now" },
    { title: "Social & Messaging", buttonTitle: "Learn More" },
    { title: "Curated Events & Ticketing", buttonTitle: "Check Events" },
    { title: "Artrepreneur Perks Program", buttonTitle: "View Perks" },
    {
      title: "FanTank Marketplace & Financial Services",
      buttonTitle: "View Marketplace",
    },
    { title: "Information Technology (I.T.)", buttonTitle: "Learn More" },
    { title: "FanBit Utility Token", buttonTitle: "Buy Token" },
    {
      title: "Digital Talent Scouting & Artrepreneurship",
      buttonTitle: "Start Scouting",
    },
    {
      title:
        "Stark County Minority Business Association - Young Techies Program",
      buttonTitle: "Learn More",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require("../../common/assets/images/artrepreneurrep/artrepreneurRepbg.png")}
          style={{ height: 190, paddingHorizontal: 15 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: Platform === "ios" ? 70 : 30,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back-ios" size={24} color="white" />
            </TouchableOpacity>
            <Feather name="menu" size={24} color="white" />
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#fff",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Can You Spot Talent?{" "}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "#fff",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Become an Independent Artrepreneur & Monetize Your Opinion on
            Artistic Talent.{" "}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("ArtepreneurLogin")}
            >
              <Text
                style={{
                  backgroundColor: "#378EF0",
                  color: "#fff",
                  fontSize: 14,
                  paddingVertical: 10,
                  width: "35%",
                  textAlign: "center",
                  borderRadius: 5,
                }}
              >
                Login
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("ArtepreneurSignup")}
            >
              <Text
                style={{
                  borderColor: "#BBBBBB",
                  borderWidth: 1,
                  color: "#fff",
                  fontSize: 14,
                  paddingVertical: 10,
                  width: "35%",
                  textAlign: "center",
                  borderRadius: 5,
                }}
              >
                Sign Up
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
        <ScrollView
          style={{ paddingLeft: 20, marginTop: 50 }}
          horizontal={true}
        >
          <ImageBackground
            source={require("../../common/assets/images/artrepreneurrep/sliderbg.png")}
            style={{
              height: 220,
              width: 318,
              paddingHorizontal: 20,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 15,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>
              Monetize Your Valuable Opinion on Art in this Information Age!
            </Text>
            <Text style={{ fontSize: 12, color: "#F1F1F1", marginTop: 20 }}>
              No Tangible Products To Sell. We offer EVERYONE a point of entry
              into Arts & Entertainment, FinTech, I.T., Digital Talent Scouting,
              Digital Advertising, Events & Ticketing, and more!{" "}
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require("../../common/assets/images/artrepreneurrep/sliderbg.png")}
            style={{
              height: 220,
              width: 318,
              paddingHorizontal: 20,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 15,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>
              Monetize Your Valuable Opinion on Art in this Information Age!
            </Text>
            <Text style={{ fontSize: 12, color: "#F1F1F1", marginTop: 20 }}>
              No Tangible Products To Sell. We offer EVERYONE a point of entry
              into Arts & Entertainment, FinTech, I.T., Digital Talent Scouting,
              Digital Advertising, Events & Ticketing, and more!{" "}
            </Text>
          </ImageBackground>
        </ScrollView>
        <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#fff",
              marginTop: 10,
            }}
          >
            List of Services
          </Text>
          {services.map((s, i) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#1A1A1A",
                borderColor: "#404040",
                borderWidth: 1,
                paddingHorizontal: 10,
                paddingVertical: 20,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <View style={{ width: "60%" }}>
                <Text style={{ fontSize: 16, color: "#fff", marginBottom: 15 }}>
                  {s.title}
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("ArtrepreneurRep4")}
                >
                  <Text
                    style={{
                      borderColor: "#378EF0",
                      borderWidth: 1,
                      color: "#fff",
                      fontSize: 14,
                      paddingVertical: 10,
                      textAlign: "center",
                      borderRadius: 25,
                      width: 150,
                    }}
                  >
                    {s.buttonTitle}
                  </Text>
                </TouchableWithoutFeedback>
              </View>
              <Image
                style={{ height: 88, width: 98 }}
                source={require("../../common/assets/images/artrepreneurrep/service1.png")}
              />
            </View>
          ))}
        </View>
        <ImageBackground
          source={require("../../common/assets/images/artrepreneurrep/getStartedbg.png")}
          style={{
            height: 184,
            paddingHorizontal: 15,
            marginHorizontal: 15,
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Become a Artrepreneur
          </Text>
          <Text
            style={{ color: "#fff", textAlign: "center", marginVertical: 15 }}
          >
            Monetize Your Opinion & Ability to Spot Talent. Join Us On This New
            Path
          </Text>
          <TouchableWithoutFeedback onPress={() => alert("Sign Up")}>
            <Text
              style={{
                backgroundColor: "#378EF0",
                color: "#fff",
                fontSize: 16,
                paddingVertical: 10,
                width: 200,
                textAlign: "center",
                borderRadius: 20,
              }}
            >
              Get Started
            </Text>
          </TouchableWithoutFeedback>
        </ImageBackground>
        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
              alignSelf: "center",
            }}
          >
            Quick Links
          </Text>
          <Text
            style={{
              color: "#378EF0",
              fontSize: 12,
              fontWeight: "700",
              alignSelf: "center",
              textDecorationLine: "underline",
              marginVertical: 15,
            }}
          >
            Badge Qualification Summary
          </Text>
          <Text
            style={{
              color: "#378EF0",
              fontSize: 12,
              fontWeight: "700",
              alignSelf: "center",
              textDecorationLine: "underline",
              marginBottom: 15,
            }}
          >
            Artrepreneur Compensation Plan
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
});
