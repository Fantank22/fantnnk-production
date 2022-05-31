import { View, Text } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const SocianBtn = ({
  iconName,
  backGrounColor,
  iconColor,
  name,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: backGrounColor,
        borderRadius: 4,
        marginVertical: 8,
        paddingVertical: 15,
      }}
      onPress={() => onPress()}
    >
      <View
        style={{
          position: "absolute",
          left: 20,
          borderWidth: 1,
          borderRightColor: iconColor,
          paddingRight: 10,
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
          borderTopColor: "transparent",
        }}
      >
        {iconName === "facebook-f" ? (
          <FontAwesome5 name={iconName} size={24} color={iconColor} />
        ) : (
          <Ionicons name={iconName} size={25} color={iconColor} />
        )}
      </View>
      <Text style={{ color: iconColor, fontSize: 16, marginLeft: 30 }}>
        {" "}
        Continue with {name}{" "}
      </Text>
    </TouchableOpacity>
  );
};
