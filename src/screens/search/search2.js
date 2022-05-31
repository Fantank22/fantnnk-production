import { View, Text, StyleSheet, Platform, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { MaterialIcons, EvilIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { Input, Icon } from "native-base";

export const Search2 = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState('');

  console.log(text);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }} >
        <MaterialIcons onPress={() => navigation.goBack()} name="keyboard-arrow-left" size={28} color="white" />
        <Input
          h={Platform.OS === 'ios' ? 45 : 45}
          value={text}
          onChangeText={e => setText(e)}
          backgroundColor={"#2B2B2B"} Î
          borderWidth={0}
          color={"#fff"}
          w={{ base: "90%", md: "25%" }}
          type={"text"}
          InputLeftElement={
            <Icon
              as={<EvilIcons name="search" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          InputRightElement={
            <Icon
              as={<Entypo name={text ? "cross" : ""} />}
              size={5}
              mr="2"
              color="muted.400"
              onPress={() => setText('')}
            />
          }
          placeholder="Search"
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }} >
        <Text style={{ color: "#BABABA", fontSize: 16 }} >2 Results found for “Niken”</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Filter')} >
          <AntDesign name="filter" size={24} color="#BABABA" />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ backgroundColor:"#272727",padding:20,borderRadius:10,marginVertical:10 }} >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
          <View style={{ flexDirection: "row" }} >
            <Image style={{ height: 48, width: 48, borderRadius: 24, borderColor: "#fff", borderWidth: 1 }} source={require('../../common/assets/images/artist/artist2.png')} />
            <View style={{ marginLeft: 10 }} >
              <Text style={{ color: "#fff", fontSize: 16 }} >Niken Dewanil</Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }} >
                <Text style={{ color: "#BABABA", fontSize: 10 }} >Vancouver, Canada</Text>
                <View style={{ height: 5, width: 5, borderRadius: 3, backgroundColor: "#fff", marginHorizontal: 5 }} ></View>
                <Image style={{ width: 18, height: 12 }} source={require('../../common/assets/images/artist/usa-flag.png')} />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }} >
                <Text style={{ color: "#378EF0", fontSize: 12 }} ># Music</Text>
                <Text style={{ color: "#BABABA", fontSize: 12, marginHorizontal: 10 }} ># Pop</Text>
                <Text style={{ color: "#BABABA", fontSize: 12 }} ># Vocalist</Text>
              </View>
            </View>
          </View>
          <View>
            {/* <Image style={{ width: 42, height: 39 }} source={require('../../common/assets/images/badge/borderWithBadge7.png')} /> */}
            <Image style={{ width: 42, height: 39 }} source={require('../../common/assets/images/badge/borderWithBadge7.png')} />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection:"row",justifyContent:"center" }} >
            <View style={{ flexDirection: "row", alignItems: "center", position: "relative",marginHorizontal:10 }} >
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#747474", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 5, position: "absolute", top: -15, right: 0 }} >
                <Text style={{ fontSize: 7, color: "#fff" }} >CS</Text>
                <Text style={{ fontSize: 10, color: "#fff", fontWeight: "bold", marginLeft: 5 }} >456.76 </Text>
              </View>
              <Image source={require('../../common/assets/images/search/stock.png')} />
              <Text style={{ color: "#35C112", fontSize: 10 }} >12.3%</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", position: "relative",marginHorizontal:10 }} >
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#747474", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 5, position: "absolute", top: -15, right: 0 }} >
                <Text style={{ fontSize: 7, color: "#fff" }} >CS</Text>
                <Text style={{ fontSize: 10, color: "#fff", fontWeight: "bold", marginLeft: 5 }} >456.76 </Text>
              </View>
              <Image source={require('../../common/assets/images/search/stockdown.png')} />
              <Text style={{ color: "#F23D3D", fontSize: 10 }} >12.3%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor:"#272727",padding:20,borderRadius:10,marginVertical:10 }} >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
          <View style={{ flexDirection: "row" }} >
            <Image style={{ height: 48, width: 48, borderRadius: 24, borderColor: "#fff", borderWidth: 1 }} source={require('../../common/assets/images/artist/artist4.png')} />
            <View style={{ marginLeft: 10 }} >
              <Text style={{ color: "#fff", fontSize: 16 }} >Niken Jhonson</Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }} >
                <Text style={{ color: "#BABABA", fontSize: 10 }} >Vancouver, Canada</Text>
                <View style={{ height: 5, width: 5, borderRadius: 3, backgroundColor: "#fff", marginHorizontal: 5 }} ></View>
                <Image style={{ width: 18, height: 12 }} source={require('../../common/assets/images/artist/usa-flag.png')} />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }} >
                <Text style={{ color: "#378EF0", fontSize: 12 }} ># Music</Text>
                <Text style={{ color: "#BABABA", fontSize: 12, marginHorizontal: 10 }} ># Pop</Text>
                <Text style={{ color: "#BABABA", fontSize: 12 }} ># Vocalist</Text>
              </View>
            </View>
          </View>
          <View>
            <Image style={{ width: 42, height: 39 }} source={require('../../common/assets/images/badge/borderWithBadge10.png')} />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection:"row",justifyContent:"center" }} >
            <View style={{ flexDirection: "row", alignItems: "center", position: "relative",marginHorizontal:10 }} >
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#747474", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 5, position: "absolute", top: -15, right: 0 }} >
                <Text style={{ fontSize: 7, color: "#fff" }} >CS</Text>
                <Text style={{ fontSize: 10, color: "#fff", fontWeight: "bold", marginLeft: 5 }} >456.76 </Text>
              </View>
              <Image source={require('../../common/assets/images/search/stock.png')} />
              <Text style={{ color: "#35C112", fontSize: 10 }} >12.3%</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", position: "relative",marginHorizontal:10 }} >
              <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#747474", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 5, position: "absolute", top: -15, right: 0 }} >
                <Text style={{ fontSize: 7, color: "#fff" }} >CS</Text>
                <Text style={{ fontSize: 10, color: "#fff", fontWeight: "bold", marginLeft: 5 }} >456.76 </Text>
              </View>
              <Image source={require('../../common/assets/images/search/stockdown.png')} />
              <Text style={{ color: "#F23D3D", fontSize: 10 }} >12.3%</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingTop: 35,
    paddingHorizontal: 15,
    flex:1
  },
});

