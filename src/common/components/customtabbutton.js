import { TouchableOpacity, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const CustomTabButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -12,
        justifyContent: "center",
        alignItems: "center",
      }}
      // onPress={onPress}
    >
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 24,
          backgroundColor: "#378EF0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="boat-outline" color="#fff" size={21} />
      </View>
      <Text style={{ color: "#fff", fontSize: 14, marginTop: 4 }}>Scout</Text>
    </TouchableOpacity>
  );
};
