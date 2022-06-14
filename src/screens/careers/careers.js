import { Text, View, SafeAreaView, ImageBackground, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles';
import Swiper from 'react-native-swiper'
import { MaterialIcons } from '@expo/vector-icons';
import usaFlug from '../../common/assets/images/flug/usa-flag.png'
import rioFlug from '../../common/assets/images/flug/brazilflag.png'
import { Entypo } from '@expo/vector-icons';


const DATA = [
  {
    id: 1,
    title: "C-SUITE",
    careers: [
      {
        title: "Chief Artistry Officer (CAO)",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      },
      {
        title: "Chief Financial Officer (CFO)",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      },
      {
        title: "Chief Data Officer (CDO)",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      },
    ]
  },
  {
    id: 2,
    title: "ADMINISTRATION",
    careers: [
      {
        title: "Executive Assistant (CEO)",
        location: "Rio",
        experence: "3 years experience",
        locationFlug: rioFlug

      },
      {
        title: "Executive Assistant 1 (team)",
        location: "Rio",
        experence: "3 years experience",
        locationFlug: rioFlug

      }
    ]
  },
  {
    id: 3,
    title: "ADVERTISING & SALES",
    careers: [
      {
        title: "President of Brand & Enterprise Services",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      },
      {
        title: "Advertising Sales Rep 1",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      },
      {
        title: "Advertising Sales Rep 2",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      },
    ]
  },
  {
    id: 4,
    title: "ARTISTRY SERVICES",
    careers: [
      {
        title: "President of Artistry Services",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      }
    ]
  },
  {
    id: 5,
    title: "ART FORM SERVICES",
    careers: [
      {
        title: "President of Enterprise Services",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      }
    ]
  },
  {
    id: 6,
    title: "DIGITAL TALENT SCOUTING",
    careers: [
      {
        title: "President of Digital Talent Scouting",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      },
      {
        title: "Admin Assistant",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      }
    ]
  },
  {
    id: 7,
    title: "DESIGN",
    careers: [
      {
        title: "Graphic Designer",
        location: "Rio",
        experence: "3 years experience",
        locationFlug: rioFlug

      },
      {
        title: "UX / UI Designer",
        location: "Rio",
        experence: "3 years experience",
        locationFlug: rioFlug

      }
    ]
  },
  {
    id: 8,
    title: "EVENTS & TICKETING",
    careers: [
      {
        title: "President of Curated Events & Booking Services",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      }
    ]
  },
  {
    id: 9,
    title: "FINANCIAL SERVICES",
    careers: [
      {
        title: "President of Financing Services",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      },
      {
        title: "Admin Assistant ",
        location: "Miami",
        experence: "3 years experience",
        locationFlug: usaFlug

      },
    ]
  },
  {
    id: 10,
    title: "PROGRAMMING",
    careers: [
      {
        title: "Blockchain Engineer",
        location: "Rio",
        experence: "3 years experience",
        locationFlug: rioFlug

      },
      {
        title: "Front End Programmer",
        location: "Rio",
        experence: "3 years experience",
        locationFlug: rioFlug

      },
      {
        title: "Backend End Programmer",
        location: "Rio",
        experence: "3 years experience",
        locationFlug: rioFlug

      },
    ]
  },
]


export const Careers = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginTop: 20, paddingHorizontal: 15 }} >
        <Text style={styles.itemsTitle} >{item.title}</Text>
        {item.careers.map((item, index) => (
          <View key={index + 1} style={styles.itemContant} >
            <View style={{ width: '70%' }} >
              <Text style={styles.itemTitle} >{item.title}</Text>
              <View style={styles.descriptionContant} >
                <Image source={item.locationFlug} />
                <Text style={[styles.locationTitle, { marginLeft: 10 }]} >{item.location}</Text>
                <Entypo name="dot-single" size={24} color="#CDCACA" />
                <Text style={styles.locationTitle} >3 years experience</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => alert(item.title)} >
              <View style={styles.applyBtn} >
                <Text style={{ color: "#FFF" }} >Apply</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}

      </View>
    )
  }


  return (
    <SafeAreaView style={styles.container} >
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={(item) => renderItem(item)}
        ListHeaderComponent={() => (
          <View>
            <Swiper containerStyle={{ height: 216, maxHeight: 216 }} showsPagination={false} autoplay loop>
              <View style={styles.slide}>
                <Image style={styles.bannerImage} source={require('../../common/assets/images/careers/banner1.png')} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.bannerImage} source={require('../../common/assets/images/careers/banner2.png')} />
              </View>
            </Swiper>
            <View style={styles.topContant} >
              <MaterialIcons onPress={() => navigation.goBack()} style={styles.backIcon} name="keyboard-arrow-left" size={28} color="#fff" />
              <Text style={styles.bannerTitle} >Careers</Text>
              <Text style={styles.bannerDes} >We are ready for new talent to join our company</Text>
            </View>

            <Text style={styles.title2} > Open Positions</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={{ paddingLeft: 15 }} >
            <Text style={styles.footerTitle} >Locations</Text>
            <ScrollView horizontal={true} >
              <View style={{ flexDirection: 'row',alignItems:"center" }}>
                <View style={styles.locationsCard} >
                  <View style={styles.locationsFlug} >
                    <Image source={usaFlug} />
                  </View>
                  <Text style={styles.locationsTitle} >MIAMI, FLORIDA (USA)</Text>
                  <Text style={styles.locationsDetails} >4 1111 Brickell Bay Drive, Suite #2604 Miami, Florida, USA 33131-5555</Text>
                  <Text style={styles.mailAddress} >contactusa@fantank.com </Text>
                </View>
                <View style={styles.locationsCard} >
                  <View style={styles.locationsFlug} >
                    <Image source={rioFlug} />
                  </View>
                  <Text style={styles.locationsTitle} >RIO DE JANEIRO (BRAZIL)</Text>
                  <Text style={styles.locationsDetails} >1111 Rua Atlantico, Suite #1302 Leblon - Rio de Janeiro, Brazil 3331-1111</Text>
                  <Text style={styles.mailAddress} >contactbr@fantank.com</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      />

    </SafeAreaView>
  )
}



