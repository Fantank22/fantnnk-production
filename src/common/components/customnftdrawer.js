import { useContext, useState } from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Button, HStack, VStack, Icon, Divider, View } from "native-base";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import { FontAwesome } from '@expo/vector-icons';
export const CustomNftDrawer = ({ navigation }) => {
  const [aboutUpOpen, setAboutOpen] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <VStack style={{ marginTop: Constants.statusBarHeight }}>
        <HStack justifyContent="space-between" alignItems={"center"}>
          <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Menu</Text>
          <TouchableWithoutFeedback onPress={() => navigation.closeDrawer()}>
            <MaterialIcons name="close" size={24} color="#6F767E" />
          </TouchableWithoutFeedback>
        </HStack>
        <Divider style={{ marginTop: 8 }} />
        <VStack style={{ marginTop: 24 }}>
          <TouchableOpacity onPress={() => navigation.navigate('ExploreFantankMarketplace')}>
            <HStack
              alignItems={"center"}
            >
              <Ionicons name="globe-outline" size={21} color="#FFFFFF" />
              <Text style={{ fontSize: 16, color: "#FFFFFF", marginLeft: 8 }}>
                Explore
              </Text>
            </HStack>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 32 }} onPress={() => setAboutOpen((prev) => !prev)}>
            <HStack alignItems={"center"}>
              <Ionicons name="book-outline" size={21} color="#FFFFFF" />
              <HStack
                justifyContent="space-between"
                alignItems={"center"}
                style={{ marginLeft: 8, flex: 1 }}
              >
                <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Stats</Text>
                {!aboutUpOpen && (
                  <Icon
                    as={<Ionicons name="chevron-down-outline" />}
                    size={5}
                    color="#6F767E"
                  />
                )}
                {aboutUpOpen && (
                  <Icon
                    as={<Ionicons name="chevron-up-outline" />}
                    size={5}
                    color="#6F767E"
                  />
                )}
              </HStack>
            </HStack>
          </TouchableOpacity>
          {aboutUpOpen && (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("AboutUsStartDrawer")}
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
                      Ranking
                    </Text>
                  </HStack>
                </HStack>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("StatsActivity")}
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
                      Activity
                    </Text>
                  </HStack>
                </HStack>
              </TouchableOpacity>

            </View>
          )}

          <HStack
            alignItems={"center"}
            style={{ marginTop: 32 }}
          >

            <Ionicons name="md-copy-outline" size={21} color="#FFFFFF" />
            <Text style={{ fontSize: 16, color: "#FFFFFF", marginLeft: 8 }}>
              Resource
            </Text>
          </HStack>
          <HStack
            alignItems={"center"}
            style={{ marginTop: 32 }}
          >
            <FontAwesome name="building-o" size={21} color="#fff" />
            <Text style={{ fontSize: 16, color: "#FFFFFF", marginLeft: 8 }}>
              Management
            </Text>
          </HStack>

        </VStack>
      </VStack>
    </SafeAreaView>
  );
};
