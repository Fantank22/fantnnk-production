import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { Rating, AirbnbRating } from "react-native-ratings";
// import ReviewTab from "../../Components/ReviewTab/ReviewTab";

export const TextReviewsArtrepreneurRep = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={{ paddingHorizontal: 15 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: "white",
                  marginTop: Platform === "ios" ? 60 : 30,
                }}
              >
                {" "}
                <MaterialIcons name="arrow-back-ios" size={24} color="white" />
              </Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => alert("hello")}>
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  borderColor: "#378EF0",
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                }}
              >
                Submit review
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#CACACA",
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            Reviews (300)
          </Text>

          <View
            style={{
              backgroundColor: "#202020",
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ marginBottom: 5 }}>
              <AirbnbRating
                count={5}
                defaultRating={5}
                size={20}
                showRating={false}
              />
            </Text>
            <Text style={{ fontSize: 16, color: "#fff", marginVertical: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    height: 32,
                    width: 32,
                    borderColor: "#B6B6B6",
                    borderWidth: 1,
                    borderRadius: 16,
                    marginRight: 10,
                  }}
                  source={require("../../common/assets/images/artist/artist2.png")}
                />
                <View>
                  <Text style={{ fontSize: 12, color: "#fff" }}>
                    Jerome Bell
                  </Text>
                  <Text style={{ fontSize: 12, color: "#A6A6A6" }}>
                    CEO of Monter Drinks
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 12, color: "#A6A6A6" }}>
                2 hours ago
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#202020",
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ marginBottom: 5 }}>
              <AirbnbRating
                count={5}
                defaultRating={5}
                size={20}
                showRating={false}
              />
            </Text>
            <Text style={{ fontSize: 16, color: "#fff", marginVertical: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    height: 32,
                    width: 32,
                    borderColor: "#B6B6B6",
                    borderWidth: 1,
                    borderRadius: 16,
                    marginRight: 10,
                  }}
                  source={require("../../common/assets/images/artist/artist2.png")}
                />
                <View>
                  <Text style={{ fontSize: 12, color: "#fff" }}>
                    Jerome Bell
                  </Text>
                  <Text style={{ fontSize: 12, color: "#A6A6A6" }}>
                    CEO of Monter Drinks
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 12, color: "#A6A6A6" }}>
                2 hours ago
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#202020",
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ marginBottom: 5 }}>
              <AirbnbRating
                count={5}
                defaultRating={5}
                size={20}
                showRating={false}
              />
            </Text>
            <Text style={{ fontSize: 16, color: "#fff", marginVertical: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{
                    height: 32,
                    width: 32,
                    borderColor: "#B6B6B6",
                    borderWidth: 1,
                    borderRadius: 16,
                    marginRight: 10,
                  }}
                  source={require("../../common/assets/images/artist/artist2.png")}
                />
                <View>
                  <Text style={{ fontSize: 12, color: "#fff" }}>
                    Jerome Bell
                  </Text>
                  <Text style={{ fontSize: 12, color: "#A6A6A6" }}>
                    CEO of Monter Drinks
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 12, color: "#A6A6A6" }}>
                2 hours ago
              </Text>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={() => alert("first")}>
            <Text
              style={{ color: "#378EF0", marginVertical: 10, fontSize: 16 }}
            >
              Show older reviews ...
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
      {/* <View style={{ position: "absolute", bottom: 0 }}>
        <ReviewTab navigation={navigation} />
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 35,
  },
  rating: {
    backgroundColor: "red",
  },
});
