import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";

export const FlowDirectors = ({ navigation }) => {
  const directors = [
    { name: "Michael Mathews", designation: "Chairman" },
    { name: "Jane Cooper", designation: "Member" },
    { name: "Kevin Harrington", designation: "Member" },
    { name: "Amilya Annonetti", designation: "Member" },
    { name: "Bessie Cooper", designation: "Member" },
    { name: "Kathryn Murphy", designation: "Member" },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#252525 ",
          borderBottomWidth: 1,
        }}
      />
      <View style={styles.container2}>
        <ImageBackground
          source={require("../../common/assets/images/about/flowDirBg.png")}
          style={styles.bgimage}
        >
          <Text style={styles.title}>Flow Directors</Text>
        </ImageBackground>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <TouchableNativeFeedback>
            <View style={styles.chairmanCard}>
              <Image
                style={styles.cardImage}
                source={require("../../common/assets/images/about/director.png")}
              />
              <Text style={styles.directorName}>Michael Mathews</Text>
              <Text style={styles.designation}>Chairman</Text>
            </View>
          </TouchableNativeFeedback>
          <View style={styles.otherCard}>
            <Image
              style={styles.cardImage}
              source={require("../../common/assets/images/about/director.png")}
            />
            <Text style={styles.directorName}>Jane Cooper</Text>
            <Text style={styles.otherDesignation}>Member</Text>
          </View>
          <View style={styles.otherCard}>
            <Image
              style={styles.cardImage}
              source={require("../../common/assets/images/about/director.png")}
            />
            <Text style={styles.directorName}>Jane Cooper</Text>
            <Text style={styles.otherDesignation}>Member</Text>
          </View>
          <View style={styles.otherCard}>
            <Image
              style={styles.cardImage}
              source={require("../../common/assets/images/about/director.png")}
            />
            <Text style={styles.directorName}>Jane Cooper</Text>
            <Text style={styles.otherDesignation}>Member</Text>
          </View>
          <View style={styles.otherCard}>
            <Image
              style={styles.cardImage}
              source={require("../../common/assets/images/about/director.png")}
            />
            <Text style={styles.directorName}>Jane Cooper</Text>
            <Text style={styles.otherDesignation}>Member</Text>
          </View>
          <View style={styles.otherCard}>
            <Image
              style={styles.cardImage}
              source={require("../../common/assets/images/about/director.png")}
            />
            <Text style={styles.directorName}>Jane Cooper</Text>
            <Text style={styles.otherDesignation}>Member</Text>
          </View>
        </View>
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
  container2: {
    backgroundColor: "#BDBDBD",
    marginTop: 20,
  },
  bgimage: {
    height: 171,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 22,
  },
  chairmanCard: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#808080",
    width: "48%",
    paddingVertical: 20,
    borderBottomColor: "#F98F8F",
    borderBottomWidth: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1,
  },
  directorName: {
    color: "white",
    fontSize: 14,
    marginTop: 10,
  },
  designation: {
    color: "#F98F8F",
    fontSize: 14,
  },
  otherCard: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#808080",
    width: "48%",
    paddingVertical: 20,
    borderBottomColor: "#069EFC",
    borderBottomWidth: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  otherDesignation: {
    color: "#069EFC",
    fontSize: 14,
  },
});
