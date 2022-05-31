import * as React from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  View
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { HStack, Icon, VStack } from "native-base";

const music = [
  { seria: 2, title: "Prisoner", duration: 2.14 },
  { seria: 3, title: "Prisoner", duration: 2.14 },
  { seria: 4, title: "Prisoner", duration: 2.14 },
  { seria: 5, title: "Prisoner", duration: 2.14 },
  { seria: 6, title: "Prisoner", duration: 2.14 },
  { seria: 7, title: "Prisoner", duration: 2.14 },
];

export const MediaView = () => {

  const [activeIndex, setActiveIndex] = React.useState(0)

  const FirstRoute = () => (


    <VStack space={1}>
      <HStack justifyContent="space-between" space={1}>
        <Image source={require("../../assets/images/artist/artist1.png")} />
        <Image source={require("../../assets/images/artist/artist2.png")} />
        <Image source={require("../../assets/images/artist/artist3.png")} />
      </HStack>
      <HStack justifyContent="space-between" space={1}>
        <Image source={require("../../assets/images/artist/artist4.png")} />
        <Image source={require("../../assets/images/artist/artist5.png")} />
        <Image source={require("../../assets/images/artist/artist6.png")} />
      </HStack>
      <HStack justifyContent="space-between" space={1}>
        <Image source={require("../../assets/images/artist/artist7.png")} />
        <Image source={require("../../assets/images/artist/artist8.png")} />
        <Image source={require("../../assets/images/artist/artist9.png")} />
      </HStack>
    </VStack>

  );

  const SecondRoute = () => (

    <VStack space={3}>
      <Image source={require("../../assets/images/artist/video1.png")} />
      <HStack justifyContent="center" alignItems="center" space={5}>
        <Image
          style={{ height: 36.44, width: 36.44, borderRadius: 50 }}
          source={require("../../assets/images/artist/userimg.png")}
        />
        <Text style={{ color: "white", fontSize: 14.17 }}>
          Heart Touching Nasheed #Shorts {"\n"}
          <Text style={{ fontSize: 12.15 }}>
            19,210,251 views Jul • 1, 2016
          </Text>
        </Text>
        <Icon
          style={{ justifyContent: "space-between" }}
          as={Entypo}
          name={"dots-three-vertical"}
          size="6"
          color="white"
        />
      </HStack>

      <Image source={require("../../assets/images/artist/video2.png")} />
      <HStack justifyContent="center" alignItems="center" space={5}>
        <Image
          style={{ height: 36.44, width: 36.44, borderRadius: 50 }}
          source={require("../../assets/images/artist/userimg.png")}
        />
        <Text style={{ color: "white", fontSize: 14.17 }}>
          Heart Touching Nasheed #Shorts {"\n"}
          <Text style={{ fontSize: 12.15 }}>
            19,210,251 views Jul • 1, 2016
          </Text>
        </Text>
        <Icon
          style={{ justifyContent: "space-between" }}
          as={Entypo}
          name={"dots-three-vertical"}
          size="6"
          color="white"
        />
      </HStack>
    </VStack>

  );
  const ThirdRoute = () => (

    <VStack>
      <TouchableNativeFeedback onPress={() => console.log("first")}>
        <HStack
          style={styles.activeMusictab}
          px={6}
          py={2}
          my={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack justifyContent="flex-start" alignItems="center" space={4}>
            <Text style={{ color: "#999999", fontSize: 12 }}> 1 </Text>
            <Text style={{ color: "white", fontSize: 12 }}>Prisoner</Text>
          </HStack>
          <HStack>
            <Text style={{ color: "#999999", fontSize: 10 }}>2.14 </Text>
          </HStack>
        </HStack>
      </TouchableNativeFeedback>

      {music.map((i, k) => (
        <TouchableNativeFeedback key={k + 1} onPress={() => console.log("first")}>
          <HStack
            px={6}
            py={2}
            my={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack justifyContent="flex-start" alignItems="center" space={4}>
              <Text style={{ color: "#999999", fontSize: 12 }}>
                {" "}
                {i.seria}{" "}
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>{i.title}</Text>
            </HStack>
            <HStack>
              <Text style={{ color: "#999999", fontSize: 10 }}>
                {i.duration}{" "}
              </Text>
            </HStack>
          </HStack>
        </TouchableNativeFeedback>
      ))}
    </VStack>

  );


  return (
    <View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
        <TouchableNativeFeedback onPress={() => setActiveIndex(0)}>
          <Text style={activeIndex === 0 ? styles.tabBarHeaderActive : styles.tabBarHeader}>Pictures</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => setActiveIndex(1)}>
          <Text style={activeIndex === 1 ? styles.tabBarHeaderActive : styles.tabBarHeader}>Videos</Text>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => setActiveIndex(2)}>
          <Text style={activeIndex === 2 ? styles.tabBarHeaderActive : styles.tabBarHeader}>Music</Text>
        </TouchableNativeFeedback>
      </View>
      <View style={{ marginTop: 20 }}>
        {activeIndex === 0 ? FirstRoute() : activeIndex === 1 ? SecondRoute() : ThirdRoute()}
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  activeMusictab: {
    backgroundColor: "#333333",
  },
  tabBarHeader: {
    color: '#ccc',
    fontSize: 17
  },
  tabBarHeaderActive: {
    color: '#fff',
    fontSize: 17
  }
});


