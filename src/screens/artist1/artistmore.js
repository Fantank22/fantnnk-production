import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { Buttons, GraphTab } from "../../common";
import { ArtistMoreHeader } from "../sendfanbit/components/artistmoreheader";

const artData = [
  { key: 1, title: "Art Form:", art: "Music" },
  { key: 2, title: "Genre:", art: "Pop" },
  { key: 3, title: "Talent:", art: "Vocalist" },
];

export const ArtistMore = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ArtistMoreHeader navigation={navigation} destination={"artistPage"} />
      <View style={styles.imageBadge}>
        <Image
          style={styles.artistImage}
          source={require("../../common/assets/images/artistlist/artist-user-img.png")}
        />
        <Image
          style={styles.badgeImage}
          source={require("../../common/assets/images/artist/badge.png")}
        />
      </View>
      <View style={styles.personalContent}>
        <Text style={styles.nameTitle}>
          Niken Dewanil{" "}
          <Text>
            <FontAwesome5 name="dollar-sign" size={20} color="white" />
          </Text>
        </Text>
        <Text style={styles.sortDetails}>
          Vel, amet, habitant et, a elementum lectus adipiscing lectus mattis.
          Consequat pellentesque nisl bibendum morbi amet at cras.
        </Text>
        <Text style={styles.locationContent}>
          <Text style={styles.basedTitle}>Based in:</Text>{" "}
          <Text style={styles.location}>Los Angeles, CA . </Text>{" "}
          <Image
            source={require("../../common/assets/images/artist/usa-flag.png")}
          />{" "}
        </Text>
        <Text>
          {artData.map((i, p) => (
            <Text style={{ color: "white", fontSize: 12, color: "#E7E7E7" }}>
              {i.title}{" "}
              <Text style={{ color: "white", fontSize: 12, color: "#E7E7E7" }}>
                {i.art}
              </Text>{" "}
              {artData.length - 1 !== p ? "." : ""}{" "}
            </Text>
          ))}
        </Text>
      </View>

      <View>
        <GraphTab />
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("SendFanBit")}
        >
          <Buttons title={"Send FanBit"} fillBtn={true} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("FanTankNftMarketplace")}
        >
          <Buttons title={"Buy FanBit"} outline={true} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  artistImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  badgeImage: {
    height: 57,
    width: 50,
  },
  imageBadge: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 30,
  },
  nameTitle: {
    color: "white",
    fontSize: 28,
    marginVertical: 10,
  },

  sortDetails: {
    color: "white",
    fontSize: 12,
    fontWeight: "100",
  },
  locationContent: { marginVertical: 6 },
  location: {
    fontSize: 14,
    color: "white",
    marginVertical: 5,
  },
  basedTitle: {
    fontSize: 12,
    color: "white",
  },
  personalContent: {
    marginBottom: 40,
  },
  buttons: {
    marginBottom: 15,
  },
  buttonGroup: {
    marginTop: 50,
  },
});
