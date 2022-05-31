import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export const ArtistMoreHeader = ({ navigation, destination }) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => navigation.goBack()}>
        <Text>
          <Entypo name="cross" size={24} color="white" />
        </Text>
      </TouchableNativeFeedback>
      <View style={styles.content}>
        <Text style={styles.fitbitCount}>
          {" "}
          <Image
            style={{
              height: 25,
              width: 25,
            }}
            source={require("../../../common/assets/images/artistlist/fitbit-token.png")}
          />{" "}
          25,000
        </Text>
        <Text style={styles.colorText}>
          {" "}
          <AntDesign name="arrowup" size={15} color="#35C112" />
          25% {"\n"} <Text style={styles.avgText}>30 Days avg</Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform === "ios" ? 60 : 30,
  },
  content: {
    flexDirection: "row",
  },
  fitbitImage: {
    height: 25,
    width: 25,
  },
  fitbitCount: {
    fontSize: 16,
    color: "white",
    marginRight: 10,
  },
  colorText: {
    fontSize: 12,
    color: "#35C112",
  },
  avgText: {
    color: "#CCCCCC",
    fontSize: 9,
  },
});
