import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'

const SingleNFT = () => {
    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <ImageBackground source={require('../../assets/FinancialServices/artist.png')} style={{ height: 521, marginTop: 35, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }} >
                        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('ConnectWallet')} >
                                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#1A1A1A", paddingVertical: 6, paddingHorizontal: 6, borderRadius: 30, borderColor: "#444444", borderWidth: 1 }} >
                                    <View style={{ backgroundColor: "#444444", borderRadius: 20, paddingVertical: 5, paddingHorizontal: 5, marginRight: 5 }} ><Ionicons name="wallet" size={18} color="#A9A9A9" /></View>
                                    <Text style={{ color: "#378EF0", marginRight: 5 }} >Connect Wallet</Text>
                                </View>
                            </TouchableWithoutFeedback>


                            <View style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, borderColor: "#444444", borderWidth: 1 }} ><Feather name="menu" size={20} color="#A9A9A9" /></View>
                        </View>
                    </View>

                </ImageBackground>
                <View style={{ paddingHorizontal: 20, borderTopEndRadius: 30,borderTopStartRadius: 30, backgroundColor: "#000",position:"relative",marginTop:-30, }} >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 50 }} >
                        <Text style={{ fontSize: 22, fontWeight: "700", color: "#fff" }} >Niken Dewanil</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Image style={{ height: 21.82, width: 21.82, marginRight: 10 }} source={require('../../assets/fitbit-token.png')} />
                            <Text style={{ fontSize: 22, color: "#fff" }} >100</Text>
                        </View>

                    </View>
                    <Text style={{ color: "#fff", marginVertical: 20 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id ex sed justo efficitur ullamcorper. In blandit mi nec justo consectetur bibendum.</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20 }} >
                        <View style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 16, paddingHorizontal: 16, borderColor: "#fff", borderWidth: 1 }} ><Ionicons name="heart-outline" size={20} color="#A9A9A9" /></View>
                        <View style={{ backgroundColor: "#3772FF", paddingVertical: 16, paddingHorizontal: "30%", borderRadius: 10 }} >
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }} >Buy Now</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    }
})

export default SingleNFT