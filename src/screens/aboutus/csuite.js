import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableNativeFeedback,
  Image,
} from "react-native";

export const CSuite = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ borderBottomColor: "#252525", borderWidth: 1 }}></View>
      <ImageBackground
        source={require("../../common/assets/images/about/c-suite.png")}
        style={{
          height: 171,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 22 }}>C-Suite</Text>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingHorizontal: 20,
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
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  chairmanCard: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1B1B1B",
    width: "48%",
    paddingVertical: 20,
    borderBottomColor: "#F98F8F",
    borderBottomWidth: 5,
    borderRadius: 5,
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
    textAlign: "center",
    marginHorizontal: 10,
  },
  otherCard: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1B1B1B",
    width: "48%",
    paddingVertical: 20,
    borderBottomColor: "#069EFC",
    borderBottomWidth: 5,
    borderRadius: 5,
  },
  otherDesignation: {
    color: "#069EFC",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 10,
  },
});
