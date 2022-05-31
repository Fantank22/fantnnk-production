import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Button, Icon, Input } from "native-base";

import { SocianBtn } from "../../common";

export const ArtepreneurLogin = ({ navigation }) => {
  const [show, setShow] = React.useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../common/assets/images/artrepreneurrep/loginbg.png")}
        style={{ paddingHorizontal: 15 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: Platform === "ios" ? 60 : 30,
          }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("NeedHelp")}
          >
            <Text style={{ color: "#378EF0" }}>Need Help?</Text>
          </TouchableWithoutFeedback>
          {/* <Feather name="menu" size={24} color="white" /> */}
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "#fff",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Welcome to Artrepreneurship!{" "}
        </Text>
        <Image
          source={require("../../common/assets/images/artrepreneurrep/badgeGroup.png")}
        />
        <Text
          style={{
            fontSize: 22,
            color: "#fff",
            textAlign: "center",
            marginTop: 10,
            fontWeight: "700",
          }}
        >
          Log In
        </Text>

        <View>
          <View style={{ alignSelf: "center", marginBottom: 20 }}>
            <Text style={{ color: "#E0E0E0", fontSize: 12, marginBottom: 10 }}>
              Email
            </Text>
            <Input
              _focus={{
                borderColor: "muted.500",
              }}
              borderColor={"muted.500"}
              borderRadius={10}
              color={"white"}
              w={{
                base: "100%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<Feather name="mail" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Enter email"
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: "#E0E0E0", fontSize: 12, marginBottom: 10 }}>
              Scout ID #
            </Text>
            <Input
              _focus={{
                borderColor: "muted.500",
              }}
              borderColor={"muted.500"}
              borderRadius={10}
              color={"white"}
              w={{
                base: "100%",
                md: "25%",
              }}
              type={show ? "text" : "password"}
              InputLeftElement={
                <Icon
                  as={<Feather name="lock" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              placeholder="Enter  scout id"
            />
          </View>
          <Text
            style={{ color: "#378EF0", alignSelf: "flex-end", marginTop: 10 }}
          >
            forgot scout ID #?
          </Text>
          <View style={{ marginVertical: 10 }}>
            <Button>Login</Button>

            <Text
              style={{ color: "#B7B7B7", alignSelf: "center", marginTop: 10 }}
            >
              Don’t have an account ?{" "}
              <Text style={{ color: "#378EF0" }}>SIGN UP</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
            <View>
              <Text style={{ width: 50, textAlign: "center", color: "white" }}>
                Or
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
          </View>

          <TouchableWithoutFeedback onPress={() => alert("hello")}>
            <SocianBtn
              iconName="facebook-f"
              backGrounColor="#378EF0"
              iconColor="white"
              name="Facebook"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => alert("hello")}>
            <SocianBtn
              iconName="logo-google"
              backGrounColor="#378EF0"
              iconColor="white"
              name="Google"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => alert("hello")}>
            <SocianBtn
              iconName="logo-apple"
              backGrounColor="white"
              iconColor="black"
              name="Apple"
            />
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
