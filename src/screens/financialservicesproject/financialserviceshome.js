import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Platform, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, Entypo, Feather } from '@expo/vector-icons';

export const FinancialServicesHome = ({ navigation }) => {
    const data = [
        { title: "Artists / Creatives" },
        { title: "Badge Earners" },
        { title: "Behind The Scenes" },
        { title: "Brands & Advertising Execs" },
        { title: "Educators / Teachers" },
        { title: "Enterprise / Industry" },
        { title: "Fans" },
        { title: "Media" }
    ]
    const data2 = [
        { title: "Offering Platforms" },
        { title: "Enterprice Services" },
        { title: "Equity Crowdfunding " },
        { title: "NFT (Non Fungible Tokens)" },
        { title: "SPAC (Special Purpose Acquisition Co's)" },
        { title: "Other (Private / High Net Worth Individuals)" }
    ]
    return (
        <SafeAreaView style={styles.contsiner} >
            <StatusBar style='light' />
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/financialservicesprojectlistings/financialServiceBg.png')} style={{ height: 190, alignItems: "center", justifyContent: "center", position: "relative" }} >
                    <View style={{ position: "absolute", top: 10, left: 10 }} >
                        <TouchableOpacity onPress={() => navigation.goBack()}  >
                            <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }} >Financial Services</Text>
                </ImageBackground>
                <View style={{ paddingHorizontal: 15 }} >
                    <Text style={{ fontSize: 19, fontWeight: "400", color: "#E0E0E0", textAlign: "center", marginTop: 20 }} >FanTank Collects Voting Data</Text>
                    <View style={{ backgroundColor: "#252525", padding: 20, borderRadius: 5, marginVertical: 20 }} >
                        {data.map((d, i) => (
                            <View key={i} style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }} >
                                <Entypo name="dot-single" size={24} color="#fff" />
                                <Text style={{ fontWeight: "700", color: "#fff", marginLeft: 10 }} >{d.title}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={{ alignItems: "center", marginBottom: 20 }} >
                        <Feather style={{ fontWeight: "bold", }} name="arrow-down" size={34} color="#378EF0" />
                    </View>
                    <View style={{ alignSelf: "center", marginVertical: 10 }} >
                        <Image source={require('../../common/assets/images/financialservicesprojectlistings/mainmenu_ecosystem.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 19, fontWeight: "400", color: "#E0E0E0", textAlign: "center", marginVertical: 15 }} >Financial Services </Text>
                        <Text style={{ fontSize: 16, color: "#C4C4C4", textAlign: "center", paddingHorizontal: 15 }} >FanTank is professionally staffed with executives in the fields of technology, legal, and investment banking to provide its established & emerging artist(s) clientele with a mix of the financing services for artistic projects from <Text style={{ color: "#fff", fontWeight: "700" }} >$250,000 to $75,000,000</Text> </Text>
                    </View>
                    <View style={{ backgroundColor: "#252525", padding: 20, borderRadius: 5, marginVertical: 20 }} >
                        {data2.map((d, i) => (
                            <View key={i} style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }} >
                                <Entypo name="dot-single" size={24} color="#fff" />
                                <Text style={{ color: "#E0E0E0", marginLeft: 10 }} >{d.title}</Text>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('FinancialServicesProjects')} >
                        <View style={{ backgroundColor: "#378EF0", borderRadius: 5, paddingVertical: Platform.OS === "ios" ? 20 : 15, marginHorizontal: 10, marginTop: 20, marginBottom: 50 }} >
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700", textAlign: "center" }} >See Project Listings</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    contsiner: {
        backgroundColor: "#000",
        paddingTop: Platform.OS === "ios" ? 0 : 35
    }
})