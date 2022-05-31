import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Box, Text } from "native-base";

export const CustomCheckBox = ({ lable, form, setForm, value, name }) => {
  const selected = value === form[name];

  return (
    <Box style={selected ? styles.checkboxActive : styles.checkbox} flex={1}>
      <TouchableOpacity
        onPress={() => setForm((prev) => ({ ...prev, [name]: value }))}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.checkboxLabel}>{lable}</Text>

        {selected && (
          <Image
            source={require("../assets/icons/check-box-icon.png")}
            style={styles.checkedIcon}
          />
        )}
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    height: 88,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2C2C2C",
  },

  checkboxActive: {
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    height: 88,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#378EF0",
  },

  checkboxLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  checkedIcon: {
    height: 24,
    width: 24,
    position: "absolute",
    top: 10,
    right: 10,
  },
});
