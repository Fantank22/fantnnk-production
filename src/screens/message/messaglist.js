import {
  Image,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export const MesssageList = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.messageHeader}
          source={require("../../common/assets/images/message/messageHero.png")}
        >
          <Text style={styles.messageHeaderText}>Messages</Text>
        </ImageBackground>
        <View style={styles.shearchBarArea}>
          <View style={{ flex: 1, marginRight: 11.5 }}>
            <Ionicons
              name="search-outline"
              size={20}
              style={{
                width: 20,
                height: 20,
                marginRight: 25,
                position: "absolute",
                left: 14,
                top: 11,
                zIndex: 1000,
              }}
              color="#fff"
            />

            <TextInput
              style={{ ...styles.input, paddingLeft: 45 }}
              placeholder="Search"
              placeholderTextColor={"#fff"}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="add-outline"
              size={20}
              style={{
                width: 20,
                height: 20,
                marginRight: 25,
                fontWeight: "bold",
              }}
              color="#fff"
            />
            <Ionicons
              name="ellipsis-vertical-outline"
              size={20}
              style={{
                width: 20,
                height: 20,
                marginRight: 25,
                fontWeight: "bold",
              }}
              color="#fff"
            />
          </View>
        </View>
        <View style={styles.chatListArea}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Marsha Brady" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/messageUser1.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Marsha Brady
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  This will be tha last message
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                2.43 PM
              </Text>
              <View
                style={{
                  backgroundColor: "#F23D3D",
                  height: 13,
                  width: 13,
                  borderRadius: 7,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "600",
                    fontSize: 9,
                  }}
                >
                  1
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Trey Songz" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  See you soon!!
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                10.13 AM
              </Text>
              <View
                style={{
                  backgroundColor: "#F23D3D",
                  height: 13,
                  width: 13,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "600",
                    fontSize: 9,
                  }}
                >
                  13
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Trey Songz" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/messageUser2.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Mike Tyson
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  See you soon!!
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                10.13 AM
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Trey Songz" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  See you soon!!
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                10.13 AM
              </Text>
              <View
                style={{
                  backgroundColor: "#F23D3D",
                  height: 13,
                  width: 13,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "600",
                    fontSize: 9,
                  }}
                >
                  2
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Trey Songz" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  See you soon!!
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                10.13 AM
              </Text>
              <View
                style={{
                  backgroundColor: "#F23D3D",
                  height: 13,
                  width: 13,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "600",
                    fontSize: 9,
                  }}
                >
                  13
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Trey Songz" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/messageUser2.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Mike Tyson
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  See you soon!!
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                10.13 AM
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Trey Songz" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  See you soon!!
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                10.13 AM
              </Text>
              <View
                style={{
                  backgroundColor: "#F23D3D",
                  height: 13,
                  width: 13,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "600",
                    fontSize: 9,
                  }}
                >
                  2
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Trey Songz" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  See you soon!!
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                10.13 AM
              </Text>
              <View
                style={{
                  backgroundColor: "#F23D3D",
                  height: 13,
                  width: 13,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "600",
                    fontSize: 9,
                  }}
                >
                  13
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Trey Songz" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/messageUser2.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Mike Tyson
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  See you soon!!
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                10.13 AM
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MessageDetails", { name: "Trey Songz" })
            }
            style={styles.chatListItem}
          >
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 40, width: 40, borderRadius: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#fff",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 12,
                  }}
                >
                  See you soon!!
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#ACACAC",
                  marginBottom: 6,
                  fontWeight: "500",
                  fontSize: 13,
                }}
              >
                10.13 AM
              </Text>
              <View
                style={{
                  backgroundColor: "#F23D3D",
                  height: 13,
                  width: 13,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontWeight: "600",
                    fontSize: 9,
                  }}
                >
                  2
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  messageHeader: {
    height: 180,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  messageHeaderText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
  },
  shearchBarArea: {
    paddingLeft: 15,
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    borderRadius: 24,
    height: 40,
    color: "#fff",
    paddingHorizontal: 14,
    fontSize: 18,
    backgroundColor: "#1A1A1A",
    width: "100%",
  },
  chatListArea: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 80,
  },

  chatListItem: {
    width: "100%",
    height: 70,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1A1A1A",
    borderBottomColor: "#4d4d4d",
    borderBottomWidth: 1,
  },
  advaterArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
