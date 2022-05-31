import { View } from "react-native";

export const Spacer = ({ marginBottom, marginTop }) => {
  return (
    <View
      style={{ marginBottom: marginBottom || 10, marginTop: marginTop || 10 }}
    ></View>
  );
};
