import React from "react";
import { Text, StyleSheet } from "react-native";

export const Buttons = ({ title, fillBtn }) => {
  return (
    <>
      {fillBtn ? (
        <Text style={styles.fillBtn}>{title}</Text>
      ) : (
        <Text style={styles.outlineBtn}>{title}</Text>
      )}
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
  outlineBtn: {
    color: "white",
    borderWidth: 1,
    borderColor: "#378EF0",
    textAlign: "center",
    padding: 20,
    borderRadius: 4,
    fontSize: 16,
  },
});
