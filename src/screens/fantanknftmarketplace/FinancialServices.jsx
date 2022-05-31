import { View, Text, ScrollView, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, MaterialIcons } from '@expo/vector-icons'

const FinancialServices = () => {
    const data = [
        { title: "EC", title2: "Equity Crowdfunding", link: "Hello" },
        { title: "NFT", title2: "Non Fungible Tokens", link: "Hello" },
        { title: "SPAC", title2: "Special Purpose Acquisition Company  Financing", link: "Hello" },
        { title: "Artrepreneurs' Project Mobilization & Financing Pool", title2: "", link: "Hello" },
    ]
    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <ImageBackground source={require('../../assets/FinancialServices/financialServicesbg.png')} style={{ height: 174, marginTop: 35, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }} >
                        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        <View style={{ backgroundColor: "#000", padding: 5, height: 34, width: 34, borderRadius: 17 }} ><Feather name="menu" size={24} color="white" /></View>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center", paddingHorizontal: 50 }} >Fantank Financing Marketplace</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#252525", width: '75%', alignSelf: "center", paddingVertical: 10, borderColor: "#414141", borderWidth: 1, borderRadius: 10, marginTop: 55 }} >
                        <Image source={require('../../assets/FinancialServices/workIcon.png')} />
                        <Text style={{ fontSize: 16, color: "#fff", marginHorizontal: 10 }} >Submit a question</Text>
                        <View style={{ backgroundColor: "#378EF0", paddingLeft: 8, paddingTop: 6, height: 28, width: 28, borderRadius: 17, }} ><MaterialIcons name="arrow-forward-ios" size={15} color="#eeeeee" /></View>
                    </View>
                </ImageBackground>
                <View style={{ marginTop: 50, paddingHorizontal: 15 }} >
                    <Text style={{ color: "#D0D0D0", textAlign: "center" }} >The FanTank <Text style={{ color: "#fff", fontWeight: "700" }} >Financing Marketplace</Text> provides the following financing services for Artists, Labels, and individual investors. </Text>
                    <View style={{ marginTop: 40 }} >
                        {data.map((d, i) => (
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#252525", width: '100%', alignSelf: "center", paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10, marginVertical: 5 }} >
                                <View style={{ width:"90%" }} >
                                    <Text style={{ fontSize: 16, color: "#fff", marginHorizontal: 10 }} > {'\u2022'}  <Text style={{ fontWeight: "700", marginLeft: 50 }} >{d.title} - </Text> {d.title2}</Text>
                                </View>
                                <View style={{ backgroundColor: "#378EF0", paddingLeft: 8, paddingTop: 6, height: 28, width: 28, borderRadius: 17, }} ><MaterialIcons name="arrow-forward-ios" size={15} color="#eeeeee" /></View>
                            </View>
                        ))}

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex:1
    }
})
export default FinancialServices