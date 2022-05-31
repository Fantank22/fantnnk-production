import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableNativeFeedback,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform
} from "react-native";
import React from "react";
// import Appber from "../../Components/Appber/Appber";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, HStack, Icon, Stack, VStack } from "native-base";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { GraphTab, MediaView, StickyHeader } from "../../common";

export const ArtistPage2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#1A1A1A"
        barStyle={"dark-content"}
        showHideTransition={true}
        hidden={Platform === "ios" ? true : false}
      />
      <StickyHeader navigation={navigation} />
      <ScrollView
        style={{
          backgroundColor: "#121212",
          marginTop: -80,
          marginBottom: 40
        }}
      >
        <ImageBackground
          source={require("../../common/assets/images/home/t1.png")}
          resizeMode="cover"
          style={styles.bgImage}
        >
          <View>
            <Text style={styles.nameTitle}>
              Wade Warren{" "}
              <Text>
                <FontAwesome5 name="dollar-sign" size={20} color="white" />
              </Text>
            </Text>
            <Text style={styles.sortDetails}>
              Lihat profil Niken Dian Rahma Dewani LinkedIn, komunitas
              profesional...{" "}
            </Text>
            <Text style={styles.location}>
              Los Angeles, CA .{" "}
              <Image
                source={require("../../common/assets/images/artist/usa-flag.png")}
              />{" "}
            </Text>
          </View>
          <HStack alignItems="center" space={4}>
            <Text style={styles.activeCatItem}>#Music</Text>
            <Text style={styles.catItem}>#Pop</Text>
            <Text style={styles.catItem}>#Vocalist</Text>
          </HStack>

          <View>

            <HStack justifyContent="space-between"
              direction="row"
              alignItems={'center'}
              my={3}
            >
              <GraphTab />
              <Image
                style={{ height: 80, width: 70 }}
                source={require("../../common/assets/images/artist/badge.png")}
              />
            </HStack>
          </View>

          <VStack
            space={5}
            style={{
              backgroundColor: "rgba(69, 66, 67, 0.78)",
              paddingHorizontal: 35,
              paddingVertical: 15,
              borderRadius: 4,
            }}
          >
            <HStack justifyContent="center" alignItems="center" w={'100%'} space={4}>
              <Text style={{ fontSize: 16, color: "white" }}>
                {" "}
                <Image
                  style={styles.fitbitImage}
                  source={require("../../common/assets/images/artistlist/fitbit-token.png")}
                />{" "}
                25,000
              </Text>
              <Text style={{ fontSize: 12, color: "#35C112" }}>
                {" "}
                <AntDesign name="arrowup" size={15} color="#35C112" />
                25% {"\n"} <Text style={{ color: "white" }}>30 Days</Text>
              </Text>
              <Button
                onPress={() => navigation.navigate("ArtistPageSendFanbit")}
                style={{ borderRadius: 30, backgroundColor: "#378EF0" }}
                px={8}
                size="sm"
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Send FanBit
                </Text>
              </Button>
            </HStack>
            <HStack justifyContent="center" alignItems="center" space={2}>
              <Button
                onPress={() => navigation.navigate("ArtistToTrack")}
                style={{
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  backgroundColor: "transparent",
                }}
                px={5}
                size="sm"
              >
                Track
              </Button>
              <Button
                style={{
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  backgroundColor: "transparent",
                }}
                px={5}
                size="sm"
              >
                Wallet
              </Button>
              <Button
                style={{
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  backgroundColor: "transparent",
                }}
                px={5}
                size="sm"
              >
                Message
              </Button>
              <TouchableNativeFeedback
                onPress={() => navigation.navigate("artistMore")}
              >
                <Icon
                  as={Entypo}
                  name={"dots-three-horizontal"}
                  size="6"
                  color="white"
                />
              </TouchableNativeFeedback>
            </HStack>
          </VStack>
        </ImageBackground>

        <View style={{ marginTop: 20, paddingHorizontal: 20, }}>
          <MediaView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  bgImage: {
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  nameTitle: {
    color: "white",
    fontSize: 28,
  },

  sortDetails: {
    color: "white",
    fontSize: 12,
  },
  location: {
    fontSize: 14,
    color: "white",
    marginVertical: 5,
  },
  catItem: {
    color: "white",
    marginVertical: 10,
  },
  activeCatItem: {
    color: "#378EF0",
  },
  fitbitImage: {
    height: 25,
    width: 25,
  },
});
