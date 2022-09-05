import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';

export const WhyArtrepreneurRep = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require("../../common/assets/images/artrepreneurrep/artrepreneurRepbg4.png")}
          style={{
            height: 243,
            paddingHorizontal: 15,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
              marginTop: 25,
              paddingHorizontal: 30,
            }}
          >
            Why Fantank
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              textAlign: "center",
              paddingHorizontal: 30,
              marginTop: 10,
            }}
          >
            Be Your Own Boss in the Convergence of{" "}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              textAlign: "center",
              paddingHorizontal: 30,
              fontWeight: "700",
            }}
          >
            Arts , Entertainment , Digital Talent Scouting, FinTech{" "}
          </Text>
          <TouchableOpacity
            onPress={() => alert("Comming soon")}
            style={{
              backgroundColor: "#378EF0",
              alignSelf: "center",
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: 20,
              marginTop: 10,
            }}
          >
            <Text
              style={{

                fontSize: 16,
                color: "#fff",

              }}
            >
              Join Today
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ArtreneurTextReviews')}
            style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', backgroundColor: "#252525", width: '75%', alignSelf: "center", padding: 10, borderColor: "#414141", borderWidth: 1, borderRadius: 10, marginTop: 25 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require('../../common/assets/images/artrepreneurrep/helpIcon.png')} />
              <Text style={{ fontSize: 16, color: "#fff", marginHorizontal: 10 }} > View Reviews(300+)</Text>
            </View>
            <View style={{ backgroundColor: "#378EF0", height: 30, width: 30, borderRadius: 15, justifyContent: "center", alignItems: "center" }} >
              <MaterialIcons name="arrow-forward-ios" size={15} color="#eeeeee" />
            </View>
          </TouchableOpacity>

        </ImageBackground>
        <View style={{ paddingHorizontal: 15, paddingTop: 60 }}>
          <Text style={{ color: "#fff" }}>
            <Text style={{ fontWeight: "700" }}>
              Your FanTank Scouting Business Start Up
            </Text>{" "}
            <Text style={{ fontWeight: "600", color: "#378EF0" }}>
              Fee ($79)
            </Text>{" "}
            covers the costs associated with establishing & servicing your
            business for 1 Year in any country where FanTank operates{" "}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            style={{ height: 211, backgroundColor: Platform.OS === 'ios' ? "black" : 'black', marginTop: 20 }}
            source={{
              html: `<iframe width="1280" height="720" style="margin-top:-7px; margin-left:-8px" src="https://player.vimeo.com/video/713008586?h=3f884f0e69" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            }}
            automaticallyAdjustContentInsets={true}
          />
          {/* <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            style={{ height: 211, backgroundColor: Platform.OS === 'ios' ? "black" : 'black',marginTop:20 }}
            source={{
              html: `<iframe width="1280" height="720" style="margin-top:-7px; margin-left:-8px" src="https://player.vimeo.com/video/713008586?h=3f884f0e69" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            }}
            automaticallyAdjustContentInsets={true}
          /> */}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "flex-end", marginTop: 30 }} >
          <View style={{ alignItems: "center" }} >
            <Image source={require('../../common/assets/images/flug/ukflag.png')} />
            <Text style={{ color: "#fff", fontSize: 16 }} >London</Text>
          </View>
          <View>
            <Entypo name="dot-single" size={24} color="#F5F5F5" />
          </View>
          <View style={{ alignItems: "center" }} >
            <Image source={require('../../common/assets/images/flug/usa-flag.png')} />
            <Text style={{ color: "#fff", fontSize: 16 }} >Miami </Text>
          </View>
          <View>
            <Entypo name="dot-single" size={24} color="#F5F5F5" />
          </View>
          <View style={{ alignItems: "center" }} >
            <Image source={require('../../common/assets/images/flug/brazilflag.png')} />
            <Text style={{ color: "#fff", fontSize: 16 }} >Rio </Text>
          </View>
        </View>
      </ScrollView>

      <Image
        style={styles.bgImage1}
        source={require('../../common/assets/images/3.png')}
      />
      <Image
        style={styles.bgImage2}
        source={require('../../common/assets/images/5.png')}
      />

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform === "ios" ? 0 : 40,
  },
  bgImage1: {
    position: "absolute",
    top: 40,
    right: 0,
    zIndex: -1000
  },
  bgImage2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1000
  }
});
