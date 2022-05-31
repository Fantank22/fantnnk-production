import { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const MessageDetails = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: "#121212" }}>
        <View
          style={{ height: "100%", paddingHorizontal: 15, paddingVertical: 10 }}
        >
          <View style={styles.chatItemLeft}>
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 20, width: 20, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#999999",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>

                <View
                  style={{
                    backgroundColor: "#1A1A1A",
                    minHeight: 48,
                    justifyContent: "center",
                    padding: 8,
                    marginTop: 2,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    borderBottomEndRadius: 4,
                    lineHeight: 1.2,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 14,
                    }}
                  >
                    Give me an update about your health.
                  </Text>
                  <Text
                    style={{
                      color: "#999999",
                      fontSize: 8,
                      lineHeight: 10,
                    }}
                  >
                    4 minutes ago
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.chatItemRight}>
            <View style={styles.advaterArea}>
              <View
                style={{
                  backgroundColor: "#378ef087",
                  minHeight: 48,
                  justifyContent: "center",
                  padding: 8,
                  marginTop: 2,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  borderBottomEndRadius: 4,
                  lineHeight: 1.2,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  I am fine, you ? I hope Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Incidunt quia nulla tempora
                  cupiditate magni iure?
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 8,
                    lineHeight: 10,
                  }}
                >
                  4 minutes ago
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.chatItemLeft}>
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 20, width: 20, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#999999",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>

                <View
                  style={{
                    backgroundColor: "#1A1A1A",
                    minHeight: 48,
                    justifyContent: "center",
                    padding: 8,
                    marginTop: 2,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    borderBottomEndRadius: 4,
                    lineHeight: 1.2,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 14,
                    }}
                  >
                    When did you reach ?
                  </Text>
                  <Text
                    style={{
                      color: "#999999",
                      fontSize: 8,
                      lineHeight: 10,
                    }}
                  >
                    4 minutes ago
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.chatItemRight}>
            <View style={styles.advaterArea}>
              <View
                style={{
                  backgroundColor: "#378ef087",
                  minHeight: 48,
                  justifyContent: "center",
                  padding: 8,
                  marginTop: 2,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  borderBottomEndRadius: 4,
                  lineHeight: 1.2,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  Right Now
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 8,
                    lineHeight: 10,
                  }}
                >
                  7 minutes ago
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.chatItemLeft}>
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 20, width: 20, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#999999",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>

                <View
                  style={{
                    backgroundColor: "#1A1A1A",
                    minHeight: 48,
                    justifyContent: "center",
                    padding: 8,
                    marginTop: 2,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    borderBottomEndRadius: 4,
                    lineHeight: 1.2,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 14,
                    }}
                  >
                    It's really important for me to talk.
                  </Text>
                  <Text
                    style={{
                      color: "#999999",
                      fontSize: 8,
                      lineHeight: 10,
                    }}
                  >
                    4 minutes ago
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.chatItemLeft}>
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 20, width: 20, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#999999",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>

                <View
                  style={{
                    backgroundColor: "#1A1A1A",
                    minHeight: 48,
                    justifyContent: "center",
                    padding: 8,
                    marginTop: 2,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    borderBottomEndRadius: 4,
                    lineHeight: 1.2,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 14,
                    }}
                  >
                    Lets talk over phone?
                  </Text>
                  <Text
                    style={{
                      color: "#999999",
                      fontSize: 8,
                      lineHeight: 10,
                    }}
                  >
                    4 minutes ago
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.chatItemRight}>
            <View style={styles.advaterArea}>
              <View
                style={{
                  backgroundColor: "#378ef087",
                  minHeight: 48,
                  justifyContent: "center",
                  padding: 8,
                  marginTop: 2,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  borderBottomEndRadius: 4,
                  lineHeight: 1.2,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  Wai, hold on a minute please !!
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 8,
                    lineHeight: 10,
                  }}
                >
                  4 minutes ago
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.chatItemLeft}>
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 20, width: 20, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#999999",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>

                <View
                  style={{
                    backgroundColor: "#1A1A1A",
                    minHeight: 48,
                    justifyContent: "center",
                    padding: 8,
                    marginTop: 2,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    borderBottomEndRadius: 4,
                    lineHeight: 1.2,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 14,
                    }}
                  >
                    Ok
                  </Text>
                  <Text
                    style={{
                      color: "#999999",
                      fontSize: 8,
                      lineHeight: 10,
                    }}
                  >
                    4 minutes ago
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.chatItemRight}>
            <View style={styles.advaterArea}>
              <View
                style={{
                  backgroundColor: "#378ef087",
                  minHeight: 48,
                  justifyContent: "center",
                  padding: 8,
                  marginTop: 2,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  borderBottomEndRadius: 4,
                  lineHeight: 1.2,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  Right Now
                </Text>
                <Text
                  style={{
                    color: "#999999",
                    fontSize: 8,
                    lineHeight: 10,
                  }}
                >
                  4 minutes ago
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.chatItemLeft}>
            <View style={styles.advaterArea}>
              <Image
                source={require("../../common/assets/images/message/treyUser.png")}
                style={{ height: 20, width: 20, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    color: "#999999",
                    marginBottom: 3,
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Trey Songz
                </Text>

                <View
                  style={{
                    backgroundColor: "#1A1A1A",
                    minHeight: 48,
                    justifyContent: "center",
                    padding: 8,
                    marginTop: 2,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    borderBottomEndRadius: 4,
                    lineHeight: 1.2,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 14,
                    }}
                  >
                    Ok
                  </Text>
                  <Text
                    style={{
                      color: "#999999",
                      fontSize: 8,
                      lineHeight: 10,
                    }}
                  >
                    4 minutes ago
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.textInputArea}>
        <View style={{ height: 56 }}>
          <TextInput
            placeholder="Write a message here"
            placeholderTextColor={"#fff"}
            style={{ color: "#fff" }}
            multiline
          />

          <Ionicons
            name="resize-outline"
            size={20}
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 1000,
            }}
            color="#fff"
          />
        </View>
        <View style={{ width: "100%", alignItems: "flex-end" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="call-outline"
              size={18}
              style={{
                width: 18,
                height: 18,
                marginLeft: 12.5,
                fontWeight: "bold",
              }}
              color="#fff"
            />
            <Ionicons
              name="at-outline"
              size={18}
              style={{
                width: 18,
                height: 18,
                marginLeft: 12.5,
                fontWeight: "bold",
              }}
              color="#fff"
            />
            <Ionicons
              name="attach-outline"
              size={18}
              style={{
                width: 18,
                height: 18,
                marginLeft: 12.5,
                fontWeight: "bold",
              }}
              color="#fff"
            />
            <View
              style={{
                borderWidth: 1,
                borderColor: "#fff",
                marginLeft: 22,
                height: 22,
              }}
            ></View>

            <Ionicons
              name="send-outline"
              size={18}
              style={{
                width: 18,
                height: 18,
                marginLeft: 12.5,
                fontWeight: "bold",
              }}
              color="#fff"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#121212",
    borderTopColor: "#ffffff14",
    borderTopWidth: 1,
  },
  textInputArea: {
    backgroundColor: "#1A1A1A",
    height: 103,
    width: "100%",
    flexDirection: "column",
    paddingVertical: 16,
    paddingHorizontal: 18,
  },

  chatItemLeft: {
    width: "100%",
    alignItems: "flex-start",
    minHeight: 67,
    marginBottom: 20,
  },
  chatItemRight: {
    width: "100%",
    alignItems: "flex-end",
    minHeight: 67,
    marginBottom: 20,
  },

  advaterArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
