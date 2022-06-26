import { View, Text, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Platform, FlatList, Image, ScrollView } from "react-native";
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { EvilIcons, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
const myData = [
  {
    id: 1,
    title: "Quantity",
    option: [
      { title: "All" },
      { title: "25" },
      { title: "50" },
      { title: "100" },
      { title: "500" },
    ]

  },
  {
    id: 2,
    title: "Country",
    option: [
      { title: "USA" },
      { title: "France" },
      { title: "China" },
      { title: "Spain" },
      { title: "Italy" },
      { title: "Turkey" },
      { title: "Germany" },
      { title: "United Kingdom" },
      { title: "Russian Federation" },
      { title: "Malaysia" },
      { title: "Mexico" },
      { title: "Austria" },
      { title: "Greece" },
    ]

  },
  {
    id: 3,
    title: "State",
    option: [
      { title: "California" },
      { title: "Alabama" },
      { title: "Hawaii" },
      { title: "Texas" },
      { title: "Alaska" },
      { title: "Maryland" },
      { title: "New Jersey" },
      { title: "South Carolina" },
      { title: "Michigan" },
      { title: "South Dakota" },
      { title: "Nevada" },
      { title: "Virginia" },
    ]

  },
  {
    id: 4,
    title: "City",
    option: [
      { title: "San Francisco" },
      { title: "Los Angeles" },
      { title: "Alameda" },
      { title: "Orange" },
      { title: "San Mateo" },
      { title: "Kern" },
      { title: "Contra Costa" },
      { title: "San Luis Obispo" },
      { title: "Kings" },
      { title: "Riverside" },
      { title: "Marin" },
      { title: "Butte" },
    ]

  },
  {
    id: 5,
    title: "Art Form",
    option: [
      { title: "All" },
      { title: "Acting" },
      { title: "Art" },
      { title: "Dance" },
      { title: "Comedy" },
      { title: "Directing (film)" },
      { title: "Fashion Design" },
      { title: "Modeling" },
      { title: "Writers" },
      { title: "Musicianship" },
      { title: "Music Production" },
    ]

  },
  {
    id: 6,
    title: "Genre",
    option: [
      { title: "All" },
      { title: "Blues" },
      { title: "Caribbean / Reggae" },
      { title: "Country" },
      { title: "Hip Hop / Rap" },
      { title: "Dance / Electronic" },
      { title: "Heavy Metal" },
      { title: "Rock" },
      { title: "Opera" },
      { title: "Music Production" },
    ]

  },
  {
    id: 7,
    title: "User Type",
    option: [
      { title: "All" },
      { title: "Behind The Scenes" },
      { title: "Brand & Advertising" },
      { title: "R&B / Soul" },
      { title: "Creatives / Artists" },
      { title: "Educators / Teachers" },
      { title: "Fans" },
      { title: "Influencers & Celebrities" },
      { title: "Media" },
      { title: "Rock" },
    ]
  }
]

export const Network = ({ navigation }) => {

  const [newData, setNewData] = React.useState(myData.map(item => ({ ...item, selected: null })));
  const [expandItem, setExpandItem] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(true);
  const [targetData, setTargetData] = React.useState('')



  const handleExpand = (e) => {
    if (expandItem === e && isOpen) {
      setIsOpen(false)
      setExpandItem(e)
      return
    }
    setExpandItem(e)
    setIsOpen(true)
  }


  const handleFilter = (item, data) => {
    setNewData([])
    setNewData(newData.map((nitem, i) => item.id === nitem.id ? nitem.selected === data.title ? { ...nitem, selected: null } : { ...nitem, selected: data.title } : nitem))
  }


  const renderItem = ({ item }) => {
    return (
      <View style={styles.singleItems} >

        <View style={styles.itemHeader} >
          <View >
            <Text style={styles.itemTitle} >{item.title}</Text>
            <View>
              {item.selected &&
                <View style={styles.selectedItem} >
                  <Text style={{ color: "#fff", fontSize: 10, marginRight: 10 }} >{item.selected}</Text>
                  <TouchableOpacity onPress={() => handleFilter(item, { title: item.selected })}>
                    <Ionicons name="close-circle-outline" size={14} color="#fff" />
                  </TouchableOpacity>
                </View>
              }
            </View>
          </View>
          <TouchableOpacity onPress={() => handleExpand(item.id)} >
            <MaterialIcons name={expandItem === item.id && isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="#DFDFDF" />
          </TouchableOpacity>

        </View>

        {expandItem === item.id && isOpen && (
          <View style={styles.optionContant} >
            {item.option.map((data, index) => (
              item.selected !== data.title && <TouchableOpacity key={index} onPress={() => handleFilter(item, data)} >
                <View style={{ borderColor: "#92A9C3", borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, margin: 5 }} >
                  <Text style={styles.optionTitle} >{data.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    )
  }

  const renderFooter = () => {
    return (
      <View style={{ paddingLeft: 15, paddingBottom: 50 }} >
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 15, marginBottom: 10, marginTop: 20 }} >
          <View style={{ flexDirection: "row", alignItems: "center" }} >
            <Text style={{ color: "#fff", fontSize: 16,marginRight:10 }} >View Network</Text>
            <MaterialCommunityIcons name="infinity" size={21} color="#fff" />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }} >
            <MaterialCommunityIcons name="chevron-double-left" style={{ marginRight: 10 }} size={24} color="#fff" />
            <MaterialCommunityIcons name="chevron-double-right" size={24} color="#fff" />
          </View>
        </View>
        <ScrollView horizontal>
          <View>
            {[1, 2, 3, 4, 5].map((d, i) => (
              <View key={i} style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }} >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => (
                  <View key={i} style={styles.artistCard} >
                    <Image style={styles.artistImage} source={require('../../common/assets/images/artist/annetteBlack.png')} />
                    <Text style={styles.artistName} >marcelinau.wx</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={newData}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View>
            <ImageBackground source={require('../../common/assets/images/network/networkBg.png')} style={styles.backGroundImage} >
              <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()} >
                <Entypo name="cross" size={24} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.title}>Social Network</Text>
            </ImageBackground>
            <View>
              <Text style={styles.subTitle} >Filters</Text>
            </View>
          </View>
        )}
        renderItem={(item) => renderItem(item)}
        ListFooterComponent={() => renderFooter()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingTop: Platform.OS === 'ios' ? 0 : 35,
  },
  backGroundImage: {
    height: 170,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  backIcon: {
    position: "absolute",
    left: 15,
    top: 15
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500"
  },
  subTitle: {
    fontSize: 16,
    color: "#fff",
    margin: 15

  },
  singleItems: {
    backgroundColor: "#252525",
    marginVertical: 5,
    borderRadius: 5,
    marginHorizontal: 15
  },
  itemTitle: {
    color: "#fff",

  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#7C7C7C",
    borderBottomWidth: 1,
    padding: 10,
  },
  optionTitle: {
    fontSize: 10,
    color: "#B7B7B7"
  },
  optionContant: {
    paddingHorizontal: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10
  },
  selectedItem: {
    backgroundColor: "#2D598A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginTop: 5
  },
  artistCard: { width: 80, height: 62, borderRadius: 5, backgroundColor: "#383838", alignItems: "center", justifyContent: "center", marginRight: 10 },
  artistImage: { height: 35, width: 35, borderRadius: 18 },
  artistName: { color: "#fff", fontSize: 9, marginTop: 2 }
})