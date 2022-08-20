import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "native-base";

export const Scouts = ({ navigation }) => {
  const [index, setIndex] = useState(1);
  const tabs = ["Digital Talent Scouts", "Artrepreneur Level"];

  const ArtrepreneurLavel = () => {
    const facilitators = [
      { title: "How It Works ", link: "HowItWorks" },
      { title: "Video ", link: "Videos" },
      { title: "Badges Requirements ", link: "BadgesRequirements" },
      { title: "FanBit ", link: "FanbitToken" },
      { title: "Compensation Structure ", link: "BadgesRequirements" },
      { title: "Stats ", link: "ScoutingStats" },
    ];
    return (
      <View>
        {facilitators.map((f, i) => (
          <TouchableOpacity key={i} onPress={() => navigation.navigate(f.link)}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#2A2A2A",
                paddingHorizontal: 20,
                paddingVertical: 15,
                marginVertical: 10,
                borderRadius: 10,
                borderColor: "#3D3D3D",
                borderWidth: 1,
              }}
            >
              <Text style={{ color: "#D4D4D4", fontSize: 16 }}>{f.title}</Text>
              <AntDesign name="right" size={18} color="white" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const contants = [<ArtrepreneurLavel />, <ArtrepreneurLavel />];

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#1A1A1A"
        barStyle={"dark-content"}
        showHideTransition={true}
        hidden={true}
      />
      <ImageBackground
        source={require("../../common/assets/images/scouts/banner-bg.png")}
        style={{ height: 240 }}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.goBack()}
          style={{
            color: "white",
            marginTop: Platform === "ios" ? 40 : 30,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              marginLeft: 24,
              marginTop: Platform === "ios" ? 40 : 30,
            }}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </Text>
        </TouchableWithoutFeedback>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text style={{ color: "white", fontWeight: "500", fontSize: 22 }}>
            CAN YOU SPOT TALENT?
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Scout - Build - Monetize
          </Text>
          <Text style={{ color: "white", fontWeight: "500", fontSize: 14 }}>
            ....It's That Simple!
          </Text>
        </View>
      </ImageBackground>
      <View style={{ marginTop: -40 }}>
        <Text
          style={{
            color: "#E0E0E0",
            marginLeft: 35,
            marginBottom: 15,
            fontSize: 10,
          }}
        >
          (Artrepreneur Reps Only)
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              backgroundColor: "#378EF0",
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: 5,
            }}
          >
            Sign In
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              borderColor: "#fff",
              borderWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: 5,
            }}
          >
            Sign Up
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.headerTab}>
          {tabs.map((t, i) => (
            <TouchableOpacity key={i} onPress={() => setIndex(i + 1)}>
              <View style={i + 1 === index ? styles.activeTab : styles.inactiveTab} >
                <Text style={i + 1 === index ? { color: "#fff" } : { color: "#9C9A9A" }}>{t}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          {contants.map((t, i) => (
            <View >{i + 1 === index && <>{t}</>}</View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  headerTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2F2F2F",
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 20,
    borderRadius: 25,
    marginTop: 30,
  },
  inactiveTab: {
    color: "#9C9A9A",
    paddingHorizontal: 2,
    fontSize: 12,
    fontWeight: "500",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  activeTab: {
    color: "white",
    backgroundColor: "#378EF0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
