import { View, Text, ScrollView, StyleSheet, ImageBackground, Image, TouchableOpacity, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import eventImage from '../../common/assets/images/service/eventCuration.png'
import searchExplore from '../../common/assets/images/service/searchandexplore.png'
import socialNetwork from '../../common/assets/images/service/socialnetwork.png'
import fanbitImage from '../../common/assets/images/service/fanbittoken.png'




export const Financialservice = ({ navigation }) => {
  const data = [
    {
      title: "Event Curation",
      description: "FanTank's Event Curation Services converges emerging artists, top badge earners, brand sponsors, industry executives & influencers for elite showcases across the world ",
      image: eventImage,
      btnTitle: "View Events",
      link:"Servicedetails"
    },
    {
      title: "SEARCH & EXPLORE",
      description: "FanTank's Search & Explore functions as the main scouting navigation tool for Artists & Scouts  ",
      image: searchExplore,
      btnTitle: "Explore Now",
      link:"Servicedetails"

    },
    {
      title: "SOCIAL NETWORKING & MESSAGING (free)",
      description: "Build Your Messaging & Social Network in Arts & Entertainment Industry",
      image: socialNetwork,
      btnTitle: "View Social Networks",
      link:"Servicedetails"
    },
    {
      title: "FANBIT UTILITY TOKEN",
      description: "FanBit™ is an internal non-securitized utility token that circulates on a Blockchain Architecture in the FanTank ecosystem as its main medium of talent voting expression - data measurement - commerce.",
      image: fanbitImage,
      btnTitle: "Buy Tokens",
      link:"FanbitUtilityToken"
    },
  ]
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="light" />
      <ScrollView>
        <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/financialServicesbg.png')} style={styles.image} >
          <View style={styles.header} >
            <TouchableOpacity onPress={() => navigation.goBack()} >
              <MaterialIcons name="arrow-back-ios" size={24} color="white" />
            </TouchableOpacity>

            <View style={styles.manuIcon} ><Feather name="menu" size={24} color="white" /></View>
          </View>
          <Text style={styles.headerTitle} >Fantank Financing Marketplace</Text>
          <View style={styles.workBtn} >
            <Image source={require('../../common/assets/images/fantanknftmarketplace/workIcon.png')} />
            <Text style={styles.workTitle} >Submit a question</Text>
            <View style={styles.workIcon} ><MaterialIcons name="arrow-forward-ios" size={15} color="#eeeeee" /></View>
          </View>
        </ImageBackground>
        <View style={styles.mainContant} >
          <Text style={{ color: "#D0D0D0", textAlign: "center" }} >The FanTank <Text style={{ color: "#fff", fontWeight: "700" }} >Financing Marketplace</Text> provides the following financing services for Artists, Labels, and individual investors. </Text>
          <View style={{ marginTop: 40 }} >
            {data.map((d, i) => (
              <TouchableOpacity key={i} onPress={() => navigation.navigate(d.link, { item: d })} >
                <View style={styles.item} >
                  <View style={{ width: "90%" }} >
                    <Text style={{ fontSize: 14, color: "#fff", marginHorizontal: 10 }} > {'\u2022'}  {d.title}</Text>
                  </View>
                  <View style={styles.workIcon} ><MaterialIcons name="arrow-forward-ios" size={15} color="#eeeeee" /></View>
                </View>
              </TouchableOpacity>
            ))}

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1
  },
  image:
  {
    height: 174,
    marginTop: 35,
    paddingHorizontal: 15
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  manuIcon: {
    backgroundColor: "#000",
    padding: 5,
    height: 34,
    width: 34,
    borderRadius: 17
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginTop: 30
  },
  workBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#252525",
    width: '75%',
    alignSelf: "center",
    paddingVertical: 10,
    borderColor: "#414141",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: Platform.OS === 'ios' ? 50 : 45
  },
  workTitle: {
    fontSize: 16,
    color: "#fff",
    marginHorizontal: 10
  },
  workIcon: {
    backgroundColor: "#378EF0",
    paddingLeft: 8,
    paddingTop: 6,
    height: 28,
    width: 28,
    borderRadius: 17,
  },
  mainContant: {
    marginTop: 50,
    paddingHorizontal: 15
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#252525",
    width: '100%',
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5
  },



})