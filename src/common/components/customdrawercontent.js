import { useContext, useState } from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Button, HStack, VStack, Icon, Divider, View } from "native-base";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import UserContext from "../../context/auth";

export const CustomDrawerContent = ({ navigation }) => {
  const [accorOpen, setAccorOpen] = useState(false);

  const { user, setUser } = useContext(UserContext);

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <VStack style={{ marginTop: Constants.statusBarHeight }}>
        <HStack justifyContent="space-between" alignItems={"center"}>
          <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Menu</Text>
          <TouchableWithoutFeedback onPress={() => navigation.closeDrawer()}>
            <MaterialIcons name="close" size={24} color="#6F767E" />
          </TouchableWithoutFeedback>
        </HStack>
        <Divider style={{ marginTop: 8 }} />
        <VStack style={{ marginTop: 24 }}>
          <HStack alignItems={"center"} style={{ marginBottom: 32 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AboutUsStartDrawer")}
              variant="unstyled"
            >
              <HStack alignItems={"center"}>
                <Ionicons name="book-outline" size={21} color="#FFFFFF" />
                <Text style={{ fontSize: 16, color: "#FFFFFF", marginLeft: 8 }}>
                  About Us
                </Text>
              </HStack>
            </TouchableOpacity>
          </HStack>
          <TouchableOpacity onPress={() => setAccorOpen((prev) => !prev)}>
            <HStack alignItems={"center"}>
              <Ionicons name="home-outline" size={21} color="#FFFFFF" />
              <HStack
                justifyContent="space-between"
                alignItems={"center"}
                style={{ marginLeft: 8, flex: 1 }}
              >
                <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Services</Text>
                {!accorOpen && (
                  <Icon
                    as={<Ionicons name="chevron-down-outline" />}
                    size={5}
                    color="#6F767E"
                  />
                )}
                {accorOpen && (
                  <Icon
                    as={<Ionicons name="chevron-up-outline" />}
                    size={5}
                    color="#6F767E"
                  />
                )}
              </HStack>
            </HStack>
          </TouchableOpacity>

          {accorOpen && (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ScoutStartDrawer")}
              >
                <HStack
                  alignItems={"center"}
                  style={{ marginBottom: 15, marginLeft: 22, marginTop: 15 }}
                >
                  <HStack
                    justifyContent="space-between"
                    alignItems={"center"}
                    style={{ marginLeft: 8, flex: 1 }}
                  >
                    <Text style={{ fontSize: 16, color: "#A9A9A9" }}>
                      Digital Talent Scouting{" "}
                    </Text>
                  </HStack>
                </HStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("ArtrepreneurStartDrawer")}
              >
                <HStack
                  alignItems={"center"}
                  style={{ marginBottom: 15, marginLeft: 22 }}
                >
                  <HStack
                    justifyContent="space-between"
                    alignItems={"center"}
                    style={{ marginLeft: 8, flex: 1 }}
                  >
                    <Text style={{ fontSize: 16, color: "#A9A9A9" }}>
                      Artrepreneur Rep{" "}
                    </Text>
                  </HStack>
                </HStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("FanTankNftMarketplace")}
              >
                <HStack
                  alignItems={"center"}
                  style={{ marginBottom: 15, marginLeft: 22 }}
                >
                  <HStack
                    justifyContent="space-between"
                    alignItems={"center"}
                    style={{ marginLeft: 8, flex: 1 }}
                  >
                    <Text style={{ fontSize: 16, color: "#A9A9A9" }}>
                      FanTank NFT Marketplace
                    </Text>
                  </HStack>
                </HStack>
              </TouchableOpacity>

              <HStack
                alignItems={"center"}
                style={{ marginBottom: 15, marginLeft: 22 }}
              >
                <HStack
                  justifyContent="space-between"
                  alignItems={"center"}
                  style={{ marginLeft: 8, flex: 1 }}
                >
                  <Text style={{ fontSize: 16, color: "#A9A9A9" }}>
                    Information Technology{" "}
                  </Text>
                  <Icon
                    as={<Ionicons name="add-circle-outline" />}
                    size={5}
                    color="#6F767E"
                  />
                </HStack>
              </HStack>
              <HStack
                alignItems={"center"}
                style={{ marginBottom: 15, marginLeft: 22 }}
              >
                <HStack
                  justifyContent="space-between"
                  alignItems={"center"}
                  style={{ marginLeft: 8, flex: 1 }}
                >
                  <Text style={{ fontSize: 16, color: "#A9A9A9" }}>
                    FanBit Utility Token{" "}
                  </Text>
                </HStack>
              </HStack>
              <HStack
                alignItems={"center"}
                style={{ marginBottom: 15, marginLeft: 22 }}
              >
                <HStack
                  justifyContent="space-between"
                  alignItems={"center"}
                  style={{ marginLeft: 8, flex: 1 }}
                >
                  <Text style={{ fontSize: 16, color: "#A9A9A9" }}>
                    Financial Services{" "}
                  </Text>
                </HStack>
              </HStack>
              <HStack
                alignItems={"center"}
                style={{ marginBottom: 15, marginLeft: 22 }}
              >
                <HStack
                  justifyContent="space-between"
                  alignItems={"center"}
                  style={{ marginLeft: 8, flex: 1 }}
                >
                  <Text style={{ fontSize: 16, color: "#A9A9A9" }}>
                    Event Curation{" "}
                  </Text>
                </HStack>
              </HStack>
              <HStack alignItems={"center"} style={{ marginLeft: 22 }}>
                <HStack
                  justifyContent="space-between"
                  alignItems={"center"}
                  style={{ marginLeft: 8, flex: 1 }}
                >
                  <Text style={{ fontSize: 16, color: "#A9A9A9" }}>
                    Search & Explore{" "}
                  </Text>
                </HStack>
              </HStack>
            </View>
          )}

          <HStack
            alignItems={"center"}
            style={{ marginBottom: 32, marginTop: 32 }}
          >
            <Ionicons name="cog-outline" size={21} color="#FFFFFF" />
            <Text style={{ fontSize: 16, color: "#FFFFFF", marginLeft: 8 }}>
              Settings/Notifications
            </Text>
          </HStack>
          <HStack alignItems={"center"} style={{ marginBottom: 32 }}>
            <Ionicons name="call-outline" size={21} color="#FFFFFF" />
            <Text style={{ fontSize: 16, color: "#FFFFFF", marginLeft: 8 }}>
              Contact Us
            </Text>
          </HStack>
          <HStack alignItems={"center"} style={{ marginBottom: 32 }}>
            <Ionicons name="bookmarks-outline" size={21} color="#FFFFFF" />
            <Text style={{ fontSize: 16, color: "#FFFFFF", marginLeft: 8 }}>
              SiteMap
            </Text>
          </HStack>
          {user !== null && (
            <HStack
              alignItems={"center"}
              justifyContent={"center"}
              style={{ marginBottom: 32 }}
            >
              <Button
                variant="unstyled"
                style={{ backgroundColor: "#111315", width: 246, height: 46 }}
                onPress={() => {
                  setUser(null);
                  navigation.navigate("Login");
                }}
              >
                <HStack alignItems={"center"}>
                  <Ionicons name="log-out-outline" size={21} color="#FFFFFF" />
                  <Text
                    style={{ fontSize: 16, color: "#FFFFFF", marginLeft: 8 }}
                  >
                    Logout
                  </Text>
                </HStack>
              </Button>
            </HStack>
          )}

          {user === null && (
            <HStack
              alignItems={"center"}
              justifyContent={"center"}
              style={{ marginBottom: 32 }}
            >
              <Button
                variant="unstyled"
                style={{ backgroundColor: "#111315", width: 246, height: 46 }}
                onPress={() => navigation.navigate("Login")}
              >
                <HStack alignItems={"center"}>
                  <Ionicons name="log-in-outline" size={21} color="#FFFFFF" />
                  <Text
                    style={{ fontSize: 16, color: "#FFFFFF", marginLeft: 8 }}
                  >
                    Login
                  </Text>
                </HStack>
              </Button>
            </HStack>
          )}
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};
