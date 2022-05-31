import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slider, Stack } from "native-base";
import { Buttons } from "../../common";
import { FontAwesome5 } from "@expo/vector-icons";
import { ArtistMoreHeader } from "./components/artistmoreheader";

const amount = [0, 100, 500, 1000, 2000, 3000, 4000];

export const ArtistPageSendFanbitScreenOne = ({ navigation }) => {
  const [onChangeValue, setOnChangeValue] = React.useState(20);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(20);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ArtistMoreHeader navigation={navigation} destination={"artistMore"} />

      <View>
        <Text style={styles.title}>Transfer FanBit {"\n"} to Rate Talent</Text>
        <Image
          style={styles.fitbitToken}
          source={require("../../common/assets/images/artistlist/fitbit-token.png")}
        />
      </View>
      <Text style={styles.sendTo}>Send To</Text>
      <View style={styles.sendButtoncontainer}>
        <TouchableNativeFeedback>
          <Text style={styles.artistBtn}>Artist</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <Text style={styles.Influential}>Influential</Text>
        </TouchableNativeFeedback>
      </View>
      <View>
        <Text style={styles.sendTo}>FanBit Amount</Text>
        <Stack space={4} style={{ position: "relative", marginTop: 20 }}>
          <Text
            style={{
              color: "white",
              position: "absolute",
              left: onChangeValue * 2.4,
            }}
            textAlign="center"
          >
            {onChangeValue}%
          </Text>
          <Slider
            width="80%"
            size="lg"
            defaultValue={20}
            colorScheme="blue"
            onChange={(v) => {
              setOnChangeValue(Math.floor(v));
              // setFitBitAmount(Math.floor(v))
            }}
            onChangeEnd={(v) => {
              v && setOnChangeEndValue(Math.floor(v));
            }}
          >
            <Slider.Track style={{ backgroundColor: "red" }}>
              <Slider.FilledTrack style={{ backgroundColor: "#378EF0" }} />
            </Slider.Track>
            <Slider.Thumb
              borderWidth="1"
              borderColor="transparent"
              bg="transparent"
            >
              {/* <EvilIcons style={{ backgroundColor: "red", borderRadius: 0 }} name="check" size={24} color="white" /> */}
              <FontAwesome5
                style={{ backgroundColor: "#49C3EB", borderRadius: 10 }}
                name="check-circle"
                size={18}
                color="white"
              />
            </Slider.Thumb>
          </Slider>
          <Text
            style={{
              color: "white",
              position: "absolute",
              right: 0,
              top: 14,
              backgroundColor: "#2D6A7E",
              paddingHorizontal: 5,
              paddingVertical: 3,
              borderRadius: 3,
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {onChangeValue * 40}
          </Text>
        </Stack>
        <Text style={{ position: "absolute", bottom: 0 }}>
          {amount.map((i) => (
            <Text style={{ color: "white" }}> {i} </Text>
          ))}
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("SendFanBitTwo")}
        >
          <Buttons title={"Send FanBit"} fillBtn={true} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.goBack()}
        >
          <Buttons title={"Cancel"} outline={true} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    alignSelf: "center",
    marginTop: 40,
  },
  fitbitToken: {
    height: 60,
    width: 60,
    alignSelf: "center",
    marginVertical: 10,
  },
  sendTo: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 25,
  },
  artistBtn: {
    backgroundColor: "#378EF0",
    color: "white",
    fontSize: 16,
    borderRadius: 30,
    width: 125,
    paddingVertical: 14,
    textAlign: "center",
  },
  Influential: {
    borderColor: "#fff",
    borderWidth: 1,
    color: "white",
    fontSize: 16,
    borderRadius: 30,
    width: 125,
    paddingVertical: 14,
    textAlign: "center",
  },
  sendButtoncontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  buttons: {
    marginBottom: 15,
  },
  buttonGroup: {
    marginTop: 100,
  },
});
