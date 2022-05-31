import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { Icon, Input } from 'native-base';

const ConnectWallet = () => {
  return (
    <View style={styles.container} >
      <StatusBar style="light" />
      <ScrollView>
        <Text style={{ marginTop: 10 }} > <Entypo name="cross" size={24} color="white" /></Text>
        <View>
          <Image style={{ alignSelf: "center" }} source={require('../../assets/FinancialServices/wallet.png')} />
          <Text style={{ fontSize: 22, fontWeight: "700", color: "#fff", textAlign: "center", marginVertical: 20 }} >Connect with wallet</Text>
          <Text style={{ color: "#CECECE", textAlign: "center" }} >The FanTank <Text style={{ color: "white" }} >Financing Marketplace</Text> provides the following financing services for Artists, Labels, and individual investors. </Text>
        </View>

        <View style={{ marginVertical: 20 }} >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderColor: "#464646", borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <View style={{ backgroundColor: "#444444", height: 38, width: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" }} >
                <Image source={require('../../assets/FinancialServices/metamask.png')} />
              </View>
              <Text style={{ color: "#fff", marginLeft: 10, fontWeight: "500" }} >MetaMask</Text>
            </View>
            <Text style={{ color: "#67E43A" }} >Connected</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderColor: "#464646", borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <View style={{ backgroundColor: "#444444", height: 38, width: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" }} >
                <Image source={require('../../assets/FinancialServices/TrustWallet.png')} />
              </View>
              <Text style={{ color: "#fff", marginLeft: 10, fontWeight: "500" }} >Trust Wallet</Text>
            </View>
            <Text style={{ color: "#378EF0" }} >Connected</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderColor: "#464646", borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <View style={{ backgroundColor: "#444444", height: 38, width: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" }} >
                <Image source={require('../../assets/FinancialServices/rainbow.png')} />
              </View>
              <Text style={{ color: "#fff", marginLeft: 10, fontWeight: "500" }} >Rainbow </Text>
            </View>
            <Text style={{ color: "#378EF0" }} >Connected</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderColor: "#464646", borderWidth: 1, padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <View style={{ backgroundColor: "#444444", height: 38, width: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" }} >
                <Image source={require('../../assets/FinancialServices/coinbase.png')} />
              </View>
              <Text style={{ color: "#fff", marginLeft: 10, fontWeight: "500" }} >Coinbase  </Text>
            </View>
            <Text style={{ color: "#378EF0" }} >Connected</Text>
          </View>

          <View  style={{ marginVertical:5 }} >
            <Input borderColor={'#464646'} fontSize={16} borderWidth={1} color={'#fff'} backgroundColor={'#252525'} borderRadius={10}  h={60} w={{
              base: "100%",
              md: "25%"
            }} type={'email'} InputLeftElement={<Image source={require('../../assets/FinancialServices/tron.png')} />} placeholder="Enter ethereum address" />
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
    flex:1
  }
})


export default ConnectWallet