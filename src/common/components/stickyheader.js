import React, { useContext } from "react";
import { View, Image, TouchableOpacity, StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from "expo-constants";
import { Platform } from "react-native";

import UserContext from "../../context/auth";

export const StickyHeader = ({ navigation }) => {
  const { user } = useContext(UserContext);

  return (
    <View
      style={{
        height: Constants.statusBarHeight + (Platform.OS === "ios" ? 80 : 50),
        width: "100%",
        backgroundColor: "#12121280",
        zIndex: 10000000,
        paddingHorizontal: 20,
        paddingTop: Platform.OS === "ios" ? 45 : Constants.statusBarHeight,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: Platform.OS === "ios" ? -50 : 0,
      }}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons
          name="list-outline"
          size={20}
          style={{ width: 20, height: 20 }}
          color="#fff"
        />
      </TouchableOpacity>
      <Image
        source={require("../assets/images/logo.png")}
        style={{ height: 40, width: 40, resizeMode: "cover" }}
      />
      <View style={{ display: "flex", flexDirection: "row" }}>
        {user !== null && (
          <Ionicons
            name="person-outline"
            size={20}
            style={{ width: 20, height: 20, marginRight: 10 }}
            color="#fff"
          />
        )}

        <Ionicons
          name="notifications-outline"
          size={20}
          style={{ width: 20, height: 20 }}
          color="#fff"
        />
      </View>
    </View>
  );
};
