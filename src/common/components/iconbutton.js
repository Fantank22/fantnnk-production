import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const IocnButton = ({ label, icon }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => alert("test")}>
      <Ionicons
        name={icon}
        size={28}
        color="black"
        style={{ marginRight: label && 10 }}
      />
      {label && (
        <Text style={{ fontSize: 18, fontWeight: "500" }}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },

  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    width: "100%",
    height: 59,
    fontSize: 18,
    marginBottom: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
