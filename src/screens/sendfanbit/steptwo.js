import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Buttons } from "../../common";

export const ArtistPageSendFanbitScreenTwo = ({ navigation }) => {
  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={140}
        placeholderTextColor="#999999"
        textAlign="left"
        color="white"
        style={{
          paddingLeft: 10,
          paddingBottom: 80,
          paddingTop: 10,
          fontSize: 12,
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => navigation.goBack()}>
        <Text style={{ marginTop: Platform === "ios" ? 60 : 20 }}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Text>
      </TouchableNativeFeedback>
      <View style={styles.content}>
        <Text style={styles.title}>Confirm your{"\n"}FanBit Transfer</Text>
        <Text style={styles.details}>
          An amount of <Text style={styles.highlightText}>800 FanBit</Text> is
          near{"\n"}to reach{" "}
          <Text style={styles.highlightText}>Niken Dewanil</Text> account.
        </Text>
        <Text style={styles.date}>
          Tranfer Date: <Text style={styles.date}>December 8th, 2021</Text>{" "}
        </Text>
        <Text style={styles.date}>
          Transfer approximate time (local):{" "}
          <Text style={styles.date}>3:31 PM</Text>{" "}
        </Text>
      </View>
      <Text style={styles.feedback}>
        Leave a feedback for Niken Dewanil{" "}
        <Text style={styles.optional}>(Optional)</Text>{" "}
      </Text>
      <View
        style={{
          backgroundColor: "#4D4D4D",
          borderRadius: 6,
          // marginHorizontal: 10,
          margin: 10,
        }}
      >
        <UselessTextInput
          multiline
          placeholder={
            "Share your thoughts about this Artist in up 140 characters"
          }
        />
      </View>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate("SendFanBitThree")}
      >
        <Buttons title={"Confirm and send"} fillBtn={true} />
      </TouchableOpacity>
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
  details: {
    color: "#C4C4C4",
    fontSize: 18,
    alignSelf: "center",
    marginVertical: 20,
  },
  highlightText: {
    color: "white",
    fontSize: 20,
  },
  date: {
    fontSize: 12,
    color: "#C4C4C4",
    alignSelf: "center",
    marginVertical: 5,
  },
  feedback: {
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    marginTop: 70,
  },
  optional: {
    fontSize: 9,
    color: "#888888",
  },
  buttons: {
    marginTop: 100,
  },
});
