import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar as IosStatusBar,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { StickyHeader } from "../../common";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <IosStatusBar
        animated={true}
        backgroundColor="#1A1A1A"
        barStyle={"dark-content"}
        showHideTransition={true}
        hidden={Platform === "ios" ? true : false}
      />
      <StickyHeader navigation={navigation} />
      <ScrollView
        style={{
          backgroundColor: "#121212",
          marginTop: -80,
        }}
      >
        <ImageBackground
          source={require("../../common/assets/images/home/homebg.png")}
          style={styles.image}
        >
          <Text style={styles.homeTitle}>
            The Arts & Entertainment Ecosystem
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SearchHome')} >
            <View style={{ backgroundColor: "#2B2B2B", flexDirection: "row",alignItems:"center", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }} >
              <EvilIcons name="search" size={24} color={'#C5BBBB'} />
              <Text style={{ color: "#C5BBBB", fontSize: 12, marginLeft: 10 }} >Artists, Scouts, Art Forms, etc</Text>
            </View>
          </TouchableOpacity>

          {/* <Input
            w={{ base: "100%", md: "100" }}
            bg="gray.800"
            InputLeftElement={
              <Icon
                as={<EvilIcons name="search" size={24} />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Artists, Scouts, Art Forms, etc"
            borderRadius="xl"
            borderColor={"transparent"}
            color={"white"}
            mt={10}
            mb={-1}
          /> */}
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            marginTop: 20,
          }}
        >
          <Text style={styles.topTradingTitle}>Top Trending Scouts</Text>
          <Text
            style={styles.viewAll}
            onPress={() => navigation.navigate("TopTrendingScouts")}
          >
            View All
          </Text>
        </View>
        <ScrollView
          style={{ paddingLeft: 15, marginTop: 20 }}
          horizontal={true}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Artist1")}
          >
            <View style={{ alignItems: "center", marginRight: 18 }}>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  marginBottom: 5,
                }}
                source={require("../../common/assets/images/artist/artist1.png")}
              />
              <Text style={{ color: "white", fontSize: 12 }}>Niken Dewanil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Artist2")}
          >
            <View style={{ alignItems: "center", marginRight: 18 }}>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  borderColor: "white",
                  borderWidth: 1,
                  marginBottom: 5,
                }}
                source={require("../../common/assets/images/home/t1.png")}
              />
              <Text style={{ color: "white", fontSize: 12 }}>Wade Warren</Text>
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: "center", marginRight: 18 }}>
            <Image
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderColor: "white",
                borderWidth: 1,
                marginBottom: 5,
              }}
              source={require("../../common/assets/images/home/t2.png")}
            />
            <Text style={{ color: "white", fontSize: 12 }}>Jenny Wilson</Text>
          </View>
          <View style={{ alignItems: "center", marginRight: 18 }}>
            <Image
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderColor: "white",
                borderWidth: 1,
                marginBottom: 5,
              }}
              source={require("../../common/assets/images/home/t3.png")}
            />
            <Text style={{ color: "white", fontSize: 12 }}>
              Ronald Richards
            </Text>
          </View>
        </ScrollView>
        {/* top tranding Artist start  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            marginTop: 20,
          }}
        >
          <Text style={styles.topTradingTitle}>Top Trending Artist</Text>
          <Text
            style={styles.viewAll}
            onPress={() => navigation.navigate("TopTrendingArtist")}
          >
            View All
          </Text>
        </View>
        <View style={{ paddingHorizontal: 15, marginTop: 20 }} >
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }} >

            <View style={{ width: "48%", marginVertical: 10 }} >
              <TouchableOpacity onPress={() => alert("ok")}  >
                <Image style={{ width: '100%', height: 208, borderRadius: 10 }} source={require('../../common/assets/images/home/artist1.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ width: "48%", marginVertical: 10 }} >
              <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist2.png')} />
            </View>
            <View style={{ width: "48%", marginVertical: 10 }} >
              <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist3.png')} />
            </View>
            <View style={{ width: "48%", marginVertical: 10 }} >
              <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist4.png')} />
            </View>
            <View style={{ width: "48%", marginVertical: 10 }} >
              <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist5.png')} />
            </View>
            <View style={{ width: "48%", marginVertical: 10 }} >
              <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist6.png')} />
            </View>
          </View>
        </View>
        {/* <VStack space="2" mt="4" px="3">
          <Stack
            justifyContent="space-between"
            direction="row"
            mb="2.5"
            mt="1.5"
            space={4}
          >
            <HStack>
              <TouchableOpacity
                onPress={() => alert("ok")}
              >
                <Image
                  source={require("../../common/assets/images/home/artist1.png")}
                />
              </TouchableOpacity>
            </HStack>
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist2.png")}
              />
            </HStack>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction="row"
            mb="2.5"
            mt="1.5"
            space={4}
          >
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist3.png")}
              />
            </HStack>
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist4.png")}
              />
            </HStack>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction="row"
            mb="2.5"
            mt="1.5"
            space={4}
          >
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist5.png")}
              />
            </HStack>
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist6.png")}
              />
            </HStack>
          </Stack>
        </VStack> */}

        {/* top tranding artist end  */}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginBottom: Platform.OS === "ios" ? 60 : 40
  },
  image: {
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 90,
  },
  logoImage: {
    height: 32,
    width: 104,
    alignSelf: "center",
    marginTop: 50,
  },
  homeTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    marginVertical: 25,
  },
  cityNameContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  citynameTitle: {
    color: "white",
    fontSize: 16,
  },
  topTradingTitle: {
    color: "#fff",
    fontSize: 20,
  },
  viewAll: {
    color: "#378EF0",
  },
});
