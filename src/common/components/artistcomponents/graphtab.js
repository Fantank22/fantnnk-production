import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export const GraphTab = () => {
  const [index, setIndex] = useState(1);

  const Screenrander1 = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.ContentImage}
          source={require("../../assets/images/artist/Graph.png")}
        />
      </View>
    );
  };

  const oneMo = Screenrander1();
  const tabs = ["1mo.", "3mo.", "6mo.", "12mo.", "24mo.", "All."];
  const contants = [oneMo, oneMo, oneMo, oneMo, oneMo, oneMo];
  return (
    <View>
      <View style={styles.headerTab}>
        {tabs.map((t, i) => (
          <TouchableOpacity key={i} onPress={() => setIndex(i + 1)}>
            <View style={i + 1 === index ? styles.activeTab : styles.allTab}>
              <Text
                style={
                  i + 1 === index ? { color: "#fff" } : { color: "#B59FA5" }
                }
              >
                {t}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {contants.map((t, i) => (
        <View key={i} >
          {i + 1 === index && (
            <View>
              {t}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  ContentImage: {
    width: 240,
    height: 70,
    marginVertical: 20,
  },
  headerTab: {
    flexDirection: "row",
  },
  allTab: {
    color: "#B59FA5",
    borderBottomColor: "#B59FA5",
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 5,
    paddingHorizontal: 2,
  },
  activeTab: {
    color: "white",
    borderBottomColor: "#378EF0",
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 5,
    paddingHorizontal: 2,
  },
});
