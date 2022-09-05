import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";

export const BadgesRequirements = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../common/assets/images/scouts/badge-require-bg.png")}
        style={{ height: 140, paddingHorizontal: 15 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: Platform === "ios" ? 60 : 30,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Text style={{ fontWeight: "700" }}>
                <Feather name="arrow-left" size={20} color="white" />
              </Text>
            </TouchableWithoutFeedback>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                marginLeft: 10,
                fontWeight: "700",
              }}
            >
              Badges Requirements
            </Text>
          </View>
          <Text>
            <AntDesign
              name="exclamationcircleo"
              size={20}
              color="#A8A8A8"
              style={{ fontWeight: "bold" }}
            />
          </Text>
        </View>
      </ImageBackground>
      <View style={{ paddingHorizontal: 20, marginTop: -40 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail1")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge1.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 1</Text>
            <View
              style={{
                borderColor: "#008B88",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail2")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge2.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 2</Text>
            <View
              style={{
                borderColor: "#008B88",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail3")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge3.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 3</Text>
            <View
              style={{
                borderColor: "#008B88",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail4")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge4.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 4</Text>
            <View
              style={{
                borderColor: "#003992",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail5")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge5.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 5</Text>
            <View
              style={{
                borderColor: "#003992",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail6")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge6.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 6</Text>
            <View
              style={{
                borderColor: "#003992",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail7")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge7.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 7</Text>
            <View
              style={{
                borderColor: "#F5C222",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail8")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge8.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 8</Text>
            <View
              style={{
                borderColor: "#F5C222",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail9")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge9.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 9</Text>
            <View
              style={{
                borderColor: "#F5C222",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("BadgeDetail10")}
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#252525",
              justifyContent: "center",
              width: "48%",
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: "#535353",
              position: "relative",
              marginTop: 18,
            }}
          >
            <Image
              style={{ height: 48, width: 73 }}
              source={require("../../common/assets/images/badge/badge10.png")}
            />
            <Text style={{ color: "white", fontSize: 16 }}>Badges 10</Text>
            <View
              style={{
                borderColor: "#8A0A66",
                borderWidth: 3,
                width: "102%",
                position: "absolute",
                bottom: -7,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}
            ></View>
          </TouchableOpacity>
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
});
