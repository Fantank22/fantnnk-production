import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Button, CheckIcon, Input, Modal, Select } from 'native-base'
import { TabView } from '../../common'
import { NavigationContainer } from '@react-navigation/native'

export const Search3 = ({navigation}) => {
  let [service, setService] = useState("");
  const handleClick = () => console.log('object');
  return (
    <View style={styles.container} >
      <ScrollView>
        <View style={{ marginVertical: 20, paddingHorizontal: 15 }} >
          <TabView />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10, paddingHorizontal: 15 }} >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }} >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "500" }} >Search</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Filter')} >
              <AntDesign style={{ marginHorizontal: 20 }} name="filter" size={24} color="#BABABA" />
            </TouchableWithoutFeedback>
            <View style={{ borderColor: "#378EF0", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 5 }} >
              <Text style={{ color: "#fff", fontSize: 12 }} >Apply</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }} >
            <View style={{ backgroundColor: "#524454", borderRadius: 12, marginRight: 10 }} >
              <MaterialIcons name="keyboard-arrow-left" size={24} color="#BABABA" />
            </View>
            <View style={{ backgroundColor: "#524454", borderRadius: 12 }}>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#BABABA" />
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 5, paddingHorizontal: 15 }} >
          <Input backgroundColor={"warmGray.50"} borderWidth={0} placeholderTextColor={'coolGray.800'} type={"text"} w="100%" py="0" InputRightElement={<Button size="xs" rounded="none" backgroundColor={"blue.500"} w="1/6" h="full" onPress={handleClick}>
            <AntDesign name="search1" size={24} color="#fff" />
          </Button>} placeholder="Artists , Tracks, Vocalist" />
        </View>
        <View style={{ marginVertical: 5, paddingHorizontal: 15 }} >
          <Select color={'warmGray.100'} borderColor={"coolGray.700"} selectedValue={service} h={10} accessibilityLabel="Explore" startIcon={<CheckIcon size="5" />} placeholder="Explore" _selectedItem={{
            bg: "teal.600",
            startIcon: <CheckIcon size="5" />,
            endIcon: <CheckIcon size="5" />
          }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </View>
        <View style={{ marginVertical: 10 }} >
          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ backgroundColor: "#292F63", padding: 20, borderRadius: 10, marginVertical: 10 }} >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                <View style={{ flexDirection: "row" }} >
                  <Image style={{ height: 48, width: 48, borderRadius: 24, borderColor: "#fff", borderWidth: 1 }} source={require('../../common/assets/images/artist/artist2.png')} />
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
                <View style={{ flexDirection: "row", justifyContent: "center" }} >
                  <View style={{ flexDirection: "row", alignItems: "center", position: "relative", marginHorizontal: 10 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#747474", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 5, position: "absolute", top: -15, right: 0 }} >
                      <Text style={{ fontSize: 7, color: "#fff" }} >CS</Text>
                      <Text style={{ fontSize: 10, color: "#fff", fontWeight: "bold", marginLeft: 5 }} >456.76 </Text>
                    </View>
                    <Image source={require('../../common/assets/images/search/stock.png')} />
                    <Text style={{ color: "#35C112", fontSize: 10 }} >12.3%</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", position: "relative", marginHorizontal: 10 }} >
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
          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>
          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>

          <TouchableWithoutFeedback onPress={() => alert('hello')} >
            <View style={{ backgroundColor: "#E47E1F", paddingVertical: 15, width: "90%", borderRadius: 10, alignSelf: "center", marginVertical: 10 }} >
              <Text style={{ color: "#fff", textAlign: "center" }} >Booking Services</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>
          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>
        </View>
        <View style={{ marginVertical: 10 }} >
          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ backgroundColor: "#292F63", padding: 20, borderRadius: 10, marginVertical: 10 }} >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                <View style={{ flexDirection: "row" }} >
                  <Image style={{ height: 48, width: 48, borderRadius: 24, borderColor: "#fff", borderWidth: 1 }} source={require('../../common/assets/images/artist/artist2.png')} />
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
                <View style={{ flexDirection: "row", justifyContent: "center" }} >
                  <View style={{ flexDirection: "row", alignItems: "center", position: "relative", marginHorizontal: 10 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#747474", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 5, position: "absolute", top: -15, right: 0 }} >
                      <Text style={{ fontSize: 7, color: "#fff" }} >CS</Text>
                      <Text style={{ fontSize: 10, color: "#fff", fontWeight: "bold", marginLeft: 5 }} >456.76 </Text>
                    </View>
                    <Image source={require('../../common/assets/images/search/stock.png')} />
                    <Text style={{ color: "#35C112", fontSize: 10 }} >12.3%</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", position: "relative", marginHorizontal: 10 }} >
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
          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>
          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>

          <TouchableWithoutFeedback onPress={() => alert('hello')} >
            <View style={{ backgroundColor: "#E47E1F", paddingVertical: 15, width: "90%", borderRadius: 10, alignSelf: "center", marginVertical: 10 }} >
              <Text style={{ color: "#fff", textAlign: "center" }} >Booking Services</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>
          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>
        </View>
        <View style={{ marginVertical: 10 }} >
          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ backgroundColor: "#292F63", padding: 20, borderRadius: 10, marginVertical: 10 }} >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                <View style={{ flexDirection: "row" }} >
                  <Image style={{ height: 48, width: 48, borderRadius: 24, borderColor: "#fff", borderWidth: 1 }} source={require('../../common/assets/images/artist/artist2.png')} />
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
                <View style={{ flexDirection: "row", justifyContent: "center" }} >
                  <View style={{ flexDirection: "row", alignItems: "center", position: "relative", marginHorizontal: 10 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#747474", paddingVertical: 3, paddingHorizontal: 10, borderRadius: 5, position: "absolute", top: -15, right: 0 }} >
                      <Text style={{ fontSize: 7, color: "#fff" }} >CS</Text>
                      <Text style={{ fontSize: 10, color: "#fff", fontWeight: "bold", marginLeft: 5 }} >456.76 </Text>
                    </View>
                    <Image source={require('../../common/assets/images/search/stock.png')} />
                    <Text style={{ color: "#35C112", fontSize: 10 }} >12.3%</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", position: "relative", marginHorizontal: 10 }} >
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
          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>
          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>

          <TouchableWithoutFeedback onPress={() => alert('hello')} >
            <View style={{ backgroundColor: "#E47E1F", paddingVertical: 15, width: "90%", borderRadius: 10, alignSelf: "center", marginVertical: 10 }} >
              <Text style={{ color: "#fff", textAlign: "center" }} >Booking Services</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>
          <View style={{ borderColor: "#2C2C2C", borderWidth: 1, marginVertical: 2 }} ></View>
        </View>
      </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    marginBottom: Platform.OS === "ios" ? 50 : 20

  }
})