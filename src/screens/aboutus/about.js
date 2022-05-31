import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import testSvg from "../../common/assets/images/about/transparency.svg";
import { AntDesign } from "@expo/vector-icons";

export const AboutUs = ({ navigation }) => {
  const facilitators = [
    { title: "Flow Directors", link: "FlowDirectors" },
    { title: "Flow Committee Directors", link: "FlowConnectors" },
    { title: "Flow Connectors", link: "FlowConnectors" },
    { title: "Flow Portfolio Facilitators", link: "FlowDirectors" },
    { title: "C-Suite", link: "CSuite" },
  ];
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#1A1A1A"
        barStyle={"dark-content"}
        showHideTransition={true}
        hidden={true}
      />
      <ScrollView>
        <ImageBackground
          source={require("../../common/assets/images/about/aboutbg2.png")}
          style={styles.image}
        >
          <TouchableOpacity
            style={{
              color: "white",
              marginTop: Platform === "ios" ? 40 : 30,
            }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              alignSelf: "center",
              marginTop: 50,
            }}
          >
            About Us
          </Text>
          <Text
            style={{ color: "#D0D0D0", textAlign: "center", marginTop: 35 }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 25,
              }}
            >
              FANTANK
            </Text>{" "}
            is the world's first non - public, public{" "}
            <Text style={{ color: "white", fontSize: 16, fontWeight: "400" }}>
              "Decentralized Autonmous Organization (DAO)"
            </Text>{" "}
            technology company that operates in its own curated{" "}
            <Text style={{ color: "white", fontSize: 16, fontWeight: "400" }}>
              Arts & Entertainment Ecosystem
            </Text>
          </Text>
        </ImageBackground>
        <View style={{ marginTop: 80, alignSelf: "center" }}>
          <Image
            source={require("../../common/assets/images/about/aboutbanner.png")}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderColor: "#545454",
            borderWidth: 0.5,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
        >
          <SvgUri width="30" height="30" svgXmlData={testSvg} />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {" "}
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../common/assets/images/about/transparency.png")}
            />{" "}
            TRANSPARENCY
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"} Blockchain Architecture
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 25 }}>
            {"\u2022"} Postings - Public Stats /Scouting Commissions Paid /
            Financials
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"} DAO Architecture
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderColor: "#545454",
            borderWidth: 0.5,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
        >
          <SvgUri width="30" height="30" svgXmlData={testSvg} />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {" "}
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../common/assets/images/about/fist.png")}
            />{" "}
            ARTIST EMPOWERMENT
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"} Financing Solutions
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 25 }}>
            {"\u2022"} Reduced Talent Selection Subjectivity
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderColor: "#545454",
            borderWidth: 0.5,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
        >
          <SvgUri width="30" height="30" svgXmlData={testSvg} />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {" "}
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../common/assets/images/about/voice-icon.png")}
            />{" "}
            A VOICE
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"} DAO Based Artist Selection
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 25 }}>
            {"\u2022"} DAO Based Management Selection{" "}
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderColor: "#545454",
            borderWidth: 0.5,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
        >
          <SvgUri width="30" height="30" svgXmlData={testSvg} />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {" "}
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../common/assets/images/about/wealth-icon.png")}
            />{" "}
            INCOME & WEALTH CREATION{" "}
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"} Public Stats / Commissions Paid / Financials{" "}
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 25 }}>
            {"\u2022"} Digital Talent Scouting / Direct Marketing
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 25 }}>
            {"\u2022"} Scouting Commissions
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 25 }}>
            {"\u2022"} Project Vesting
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 25 }}>
            {"\u2022"} FanTank Equity Vesting (Badge 10)
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderColor: "#545454",
            borderWidth: 0.5,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
          }}
        >
          <SvgUri width="30" height="30" svgXmlData={testSvg} />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {" "}
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../common/assets/images/about/value-icon.png")}
            />{" "}
            VALUE PROPOSITION
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"}{" "}
            <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
              Labels
            </Text>{" "}
            - Talent Portfolio Risk Hedging / Alternative A&R Source
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"}{" "}
            <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
              Artists
            </Text>{" "}
            - Alternative Financing Sources / Reduced Talent Selection
            Subjectivity{" "}
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"}{" "}
            <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
              Brands / Advertisers
            </Text>{" "}
            - increased connection to pulse of artistic ecosystem
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"}{" "}
            <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
              Fans
            </Text>{" "}
            - Integration in Technology, Arts & Entertainment Content, Direct
            Marketing, and Event Promotions
          </Text>
          <Text style={{ color: "#D0D0D0", lineHeight: 30 }}>
            {"\u2022"}{" "}
            <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
              Investors
            </Text>{" "}
            - Measured & Filtered Emerging & Established Artists Listings
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "600",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            Facilitators
          </Text>
          <View>
            {facilitators.map((f, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => navigation.navigate(f.link)}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#2A2A2A",
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    marginVertical: 10,
                    borderRadius: 10,
                    borderColor: "#3D3D3D",
                    borderWidth: 1,
                  }}
                >
                  <Text style={{ color: "#D4D4D4", fontSize: 16 }}>
                    {f.title}
                  </Text>
                  <AntDesign name="right" size={18} color="white" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    // justifyContent: "center",
    paddingHorizontal: 10,
    height: 210,
  },
});
