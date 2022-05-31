import { Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export const ButtonWithIcon = ({ title, iconNAme }) => {
  return (
    <>
      <Text style={styles.fillBtn}>
        {title}
        <Entypo name={iconNAme} size={18} color="white" />
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  fillBtn: {
    color: "white",
    backgroundColor: "#378EF0",
    textAlign: "center",
    padding: 20,
    borderRadius: 4,
    fontSize: 16,
  },
});
