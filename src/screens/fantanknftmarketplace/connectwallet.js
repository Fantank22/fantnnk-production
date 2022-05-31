import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons';
import { Input } from 'native-base';

export const ConnectWallet = ({navigation}) => {
  return (
    <View style={styles.container} >
      <StatusBar style="light" />
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Text style={{ marginTop: 10 }} > <Entypo name="cross" size={24} color="white" /></Text>
        </TouchableOpacity>
        <View>
          <Image style={{ alignSelf: "center" }} source={require('../../common/assets/images/fantanknftmarketplace/wallet.png')} />
          <Text style={{ fontSize: 22, fontWeight: "700", color: "#fff", textAlign: "center", marginVertical: 20 }} >Connect with wallet</Text>
          <Text style={{ color: "#CECECE", textAlign: "center" }} >The FanTank <Text style={{ color: "white" }} >Financing Marketplace</Text> provides the following financing services for Artists, Labels, and individual investors. </Text>
        </View>

        <View style={{ marginVertical: 20 }} >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderColor: "#464646", borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <View style={{ backgroundColor: "#444444", height: 38, width: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" }} >
                <Image source={require('../../common/assets/images/fantanknftmarketplace/metamask.png')} />
              </View>
              <Text style={{ color: "#fff", marginLeft: 10, fontWeight: "500" }} >MetaMask</Text>
            </View>
            <Text style={{ color: "#67E43A" }} >Connected</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderColor: "#464646", borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <View style={{ backgroundColor: "#444444", height: 38, width: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" }} >
                <Image source={require('../../common/assets/images/fantanknftmarketplace/TrustWallet.png')} />
              </View>
              <Text style={{ color: "#fff", marginLeft: 10, fontWeight: "500" }} >Trust Wallet</Text>
            </View>
            <Text style={{ color: "#378EF0" }} >Connected</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderColor: "#464646", borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <View style={{ backgroundColor: "#444444", height: 38, width: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" }} >
                <Image source={require('../../common/assets/images/fantanknftmarketplace/rainbow.png')} />
              </View>
              <Text style={{ color: "#fff", marginLeft: 10, fontWeight: "500" }} >Rainbow </Text>
            </View>
            <Text style={{ color: "#378EF0" }} >Connected</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderColor: "#464646", borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <View style={{ backgroundColor: "#444444", height: 38, width: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" }} >
                <Image source={require('../../common/assets/images/fantanknftmarketplace/coinbase.png')} />
              </View>
              <Text style={{ color: "#fff", marginLeft: 10, fontWeight: "500" }} >Coinbase  </Text>
            </View>
            <Text style={{ color: "#378EF0" }} >Connected</Text>
          </View>

          <View style={{ marginVertical: 5 }} >
            <Input borderColor={'#464646'} fontSize={16} borderWidth={1} color={'#fff'} backgroundColor={'#252525'} borderRadius={10} h={60} w={{
              base: "100%",
              md: "25%"
            }} type={'email'} InputLeftElement={<Image style={{ marginLeft: 15 }} source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />} placeholder="Enter ethereum address" />
          </View>

        </View>

      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingTop: 35,
    paddingHorizontal: 15,
    flex: 1
  }
})

