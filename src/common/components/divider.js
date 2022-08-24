import { Dimensions, View, Text } from "react-native";
export const windowWidth = Dimensions.get("window").width;

export const Divider = ({ tip }) => {
  return (
    <View
      style={{
        marginTop: 5,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <View
        style={{
          borderColor: "#fff",
          borderWidth: 1,
          width: windowWidth / 2 - 40,
        }}
      ></View>
      <View
        style={{
          width: 40,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>{tip}</Text>
      </View>
      <View
        style={{
          borderColor: "#fff",
          borderWidth: 1,
          width: windowWidth / 2 - 40,
        }}
      ></View>
    </View>
  );
};
