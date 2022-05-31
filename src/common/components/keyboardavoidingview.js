import { KeyboardAvoidingView, Platform } from "react-native";

export const MyKeyboardAvoidingView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
      style={{
        flex: 1,
      }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
