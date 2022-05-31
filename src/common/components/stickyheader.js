import React, { useContext } from "react";
import { View, Image, TouchableOpacity, Platform, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from "expo-constants";

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
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="list-outline"
            size={20}
            style={{ width: 20, height: 20 }}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={{ height: 40, width: 40, resizeMode: "cover" }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {user !== null && (
          <>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "#1A1A1A",
                borderColor: "#404040",
                borderWidth: 2,
                marginRight: 10,
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 16,
              }}
            >
              <Image
                source={require("../assets/images/artistlist/fitbit-token.png")}
                style={{
                  height: 16,
                  width: 16,
                  resizeMode: "cover",
                  marginRight: 5,
                }}
              />
              <Text style={{ color: "#fff", fontSize: 14 }}>{user.token}</Text>
            </View>
            <Ionicons
              name="person-outline"
              size={20}
              style={{ width: 20, height: 20, marginRight: 5 }}
              color="#fff"
            />
          </>
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
