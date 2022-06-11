import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  // StatusBar as IosStatusBar,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView
} from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar'

import { StickyHeader } from "../../common";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <IosStatusBar
        animated={true}
        backgroundColor="#1A1A1A"
        barStyle={"dark-content"}
        showHideTransition={true}
        hidden={Platform === "ios" ? true : false}
      /> */}
      <StatusBar style="light" />

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
            <View style={{ backgroundColor: "#2B2B2B", flexDirection: "row", alignItems: "center", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }} >
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
                source={require("../../common/assets/images/artist/madyMorrell.png")}
              />
              <Text style={{ color: "white", fontSize: 12 }}>Mady Morrell</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Artist3")}
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
                source={require("../../common/assets/images/artist/randyRen.png")}
              />
              <Text style={{ color: "white", fontSize: 12 }}>Randy Ren</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Artist4")}
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
                source={require("../../common/assets/images/artist/russ.png")}
              />
              <Text style={{ color: "white", fontSize: 12 }}>
                Russ
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Artist5")}
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
                source={require("../../common/assets/images/artist/djSplice.png")}
              />
              <Text style={{ color: "white", fontSize: 12 }}>
                DJ Splice
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Artist6")}
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
                source={require("../../common/assets/images/artist/marshaBrady.png")}
              />
              <Text style={{ color: "white", fontSize: 12 }}>
                Marsha Brady
              </Text>
            </View>
          </TouchableOpacity>
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
        <View style={{ marginVertical: 20 }} >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#FFF", marginBottom: 20 }} >Trending Artists News</Text>
          <ScrollView style={{ marginLeft: 15 }} horizontal={true}>
            {[1, 2, 3].map((d, i) => (
              <TouchableOpacity key={i} onPress={() => alert('ok')} >
                <ImageBackground style={{ height: 194, borderRadius: 10, width: 326, justifyContent: "space-between", padding: 20, marginRight: 15 }} source={require('../../common/assets/images/home/trandingNews.png')} >
                  <Text style={{ fontSize: 18, fontWeight: "700", color: "#FFF" }} >Russs new concert</Text>
                  <Text style={{ fontSize: 16, color: "#FFF" }} >Lorem ipsum dolor sit amet,consectetur adipiscing elit. Porta eleme ntum fames...</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                    <Text style={{ color: "#FFF" }} >Sep 21, 2012</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "rgba(54, 54, 54, 0.63)", padding: 10, borderRadius: 10 }} >
                      <Feather name="eye" size={18} color="#FFF" />
                      <Text style={{ color: "#FFF", fontSize: 12 }} >30k</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
