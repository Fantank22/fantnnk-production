import { Text, StyleSheet, TouchableOpacity, View, Platform } from "react-native";
import React from "react";
export const Buttons = ({ title, fillBtn, onPress, style }) => {
  return (
    <>
      {fillBtn ? (
        <TouchableOpacity onPress={onPress} style={[styles.fillBtn, { ...style }]} >
          <View >
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16, }} >{title}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[styles.outlineBtn, { ...style }]}>
          <View >
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 16, }}  >{title}</Text>
          </View>
        </TouchableOpacity>

      )}
    </>
  );
};

const styles = StyleSheet.create({
  fillBtn: {
    color: "white",
    backgroundColor: "#378EF0",
    textAlign: "center",
    padding: Platform.OS === 'ios' ? 20 : 15,
    borderRadius: 4,
    marginVertical: 10

  },
  outlineBtn: {
    color: "white",
    borderWidth: 1,
    borderColor: "#378EF0",
    textAlign: "center",
    padding: Platform.OS === 'ios' ? 20 : 15,
    borderRadius: 4,
    marginVertical: 10
  },
});
