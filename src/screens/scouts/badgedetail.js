import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export const BadgeDetail = ({ navigation }) => {
  const content = [
    {
      title: "# of friends",
      logo: "image",
      data: [
        { person: "you", balance: 100 },
        { person: "Team", balance: 100 },
      ],
    },
    {
      title: "# Avg. FanBit Bal.",
      logo: "image",
      data: [
        { person: "you", balance: 200 },
        { person: "Team", balance: 0 },
      ],
    },
    {
      title: "Avg. Scout Score",
      logo: "image",
      data: [
        { person: "you", balance: 50 },
        { person: "Team", balance: 0 },
      ],
    },
    {
      title: "Event Tags",
      logo: "image",
      data: [
        { person: "you", balance: 0 },
        { person: "Team", balance: 0 },
      ],
    },
    {
      title: "# of votes (app)",
      logo: "image",
      data: [
        { person: "you", balance: 0 },
        { person: "Team", balance: 0 },
      ],
    },
    {
      title: "Event votes (QR)",
      logo: "image",
      data: [
        { person: "you", balance: 0 },
        { person: "Team", balance: 0 },
      ],
    },
    {
      title: "Subscriptions",
      logo: "image",
      data: [
        { person: "DTS", balance: "Free" },
        { person: "Artrepreneur", balance: "--" },
        { person: "Sign Up \n(1 time)", balance: "$49.99" },
        { person: "Services \n(monthly)", balance: "$49.99" },
        { person: "Artrepreneur \nRep Renewal\n (annual)", balance: "$49.99" },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            backgroundColor: "#717171",
            borderRadius: 20,
            padding: 7,
            marginTop: Platform === "ios" ? 60 : 30,
          }}
        >
          <Feather name="x" size={24} color="white" />
        </Text>
      </TouchableWithoutFeedback>
      <ScrollView>
        <View style={{ paddingHorizontal: 15 }}>
          <View
            style={{
              borderColor: "#535353",
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 10,
              backgroundColor: "#161616",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
                borderBottomColor: "#535353",
                borderWidth: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  style={{ height: 43, width: 38 }}
                  source={require("../../common/assets/images/scouts/badge1.png")}
                />
                <View>
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {" "}
                    Badge 1{" "}
                  </Text>
                  <Text style={{ color: "#B7B7B7", fontSize: 12 }}>
                    {" "}
                    30 day / avg. stats{" "}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "#C3BEBE",
                  borderColor: "#C3BEBE",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                Artrepreneur Level
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                paddingHorizontal: 14,
                paddingVertical: 10,
              }}
            >
              {content.map((c, i) => (
                <View
                  key={i}
                  style={{
                    backgroundColor: "#272727",
                    width: "47%",
                    marginVertical: 8,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#008B88",
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                  >
                    <Text style={{ color: "#fff", fontSize: 12 }}>
                      {c.title}
                    </Text>
                    <Image
                      style={{ height: 30, width: 30 }}
                      source={require("../../common/assets/images/logo-icon.png")}
                    />
                  </View>
                  {c.data.map((d, i) => (
                    <>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                        }}
                      >
                        <Text style={{ fontSize: 12, color: "#B7B7B7" }}>
                          {d.person}
                        </Text>
                        <Text style={{ fontSize: 12, color: "#FFFFFF" }}>
                          {d.balance}
                        </Text>
                      </View>
                      {console.log(c.data.length)}
                      {c.data.length - 1 !== i ? (
                        <View
                          style={{
                            borderColor: "#444444",
                            borderWidth: 1,
                            marginHorizontal: 10,
                            marginVertical: 5,
                          }}
                        ></View>
                      ) : (
                        <Text></Text>
                      )}
                    </>
                  ))}
                </View>
              ))}
            </View>
          </View>

          <View
            style={{
              borderColor: "#535353",
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 50,
              backgroundColor: "#161616",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
                borderBottomColor: "#535353",
                borderWidth: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  style={{ height: 43, width: 38 }}
                  source={require("../../common/assets/images/scouts/share.png")}
                />
                <View>
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {" "}
                    Scout Team{" "}
                  </Text>
                  {/* <Text style={{ color: "#B7B7B7", fontSize: 12 }}> 30 day / avg. stats  </Text> */}
                </View>
              </View>
              <Text
                style={{
                  color: "#C3BEBE",
                  borderColor: "#C3BEBE",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                Artrepreneur Level
              </Text>
            </View>
            <ImageBackground
              source={require("../../common/assets/images/scouts/badgeDetails.png")}
              style={{
                alignSelf: "center",
                height: 130,
                width: 107.25,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 40,
              }}
            >
              <Image
                style={{ width: 40.23, height: 45.52, marginTop: -20 }}
                source={require("../../common/assets/images/scouts/badge1.png")}
              />
            </ImageBackground>
            <View
              style={{ padding: 15, borderTopColor: "#535353", borderWidth: 1 }}
            >
              <Text
                style={{ color: "white", fontSize: 12, alignSelf: "center" }}
              >
                {" "}
                Download Scouting Rep. Compensation Plans{" "}
              </Text>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#378EF0",
                    textDecorationLine: "underline",
                    fontWeight: "700",
                    marginRight: 10,
                  }}
                >
                  Full Doc
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#378EF0",
                    textDecorationLine: "underline",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  Summary
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 30,
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#33383F",
            paddingHorizontal: 15,
            paddingVertical: 25,
          }}
        >
          <TouchableWithoutFeedback onPress={() => alert("Prev Pressed")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderColor: "#BBBBBB",
                borderWidth: 1,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 5,
              }}
            >
              <MaterialIcons name="arrow-back-ios" size={18} color="white" />
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>
                Prev Badge
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => alert("Next Pressed")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#378EF0",
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>
                Next Badge
              </Text>
              <MaterialIcons name="arrow-forward-ios" size={18} color="white" />
            </View>
          </TouchableWithoutFeedback>
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
