import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'

const NftAbout = () => {
    const directors = [
        { name: "Michael Mathews", designation: "Chairman" },
        { name: "Jane Cooper", designation: "Member" },
        { name: "Kevin Harrington", designation: "Member" },
        { name: "Amilya Annonetti", designation: "Member" },
        { name: "Bessie Cooper", designation: "Member" },
        { name: "Kathryn Murphy", designation: "Member" },
    ]

    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <ImageBackground source={require('../../assets/FinancialServices/nftAbout.png')} style={{ height: 195, marginTop: 35, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }} >
                        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#1A1A1A", paddingVertical: 6, paddingHorizontal: 6, borderRadius: 30, borderColor: "#444444", borderWidth: 1 }} >
                                <View style={{ backgroundColor: "#444444", borderRadius: 20, paddingVertical: 5, paddingHorizontal: 5, marginRight: 5 }} >
                                    <Image source={require('../../assets/FinancialServices/metamask.png')} />
                                </View>
                                <Text style={{ color: "#fff", marginRight: 5 }} >10.80</Text>
                            </View>
                            <View style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, marginHorizontal: 5, borderColor: "#444444", borderWidth: 1 }} ><Ionicons name="heart-outline" size={20} color="#A9A9A9" /></View>
                            <View style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, borderColor: "#444444", borderWidth: 1 }} ><Feather name="menu" size={20} color="#A9A9A9" /></View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center", marginTop: 40 }} >About</Text>
                </ImageBackground>
                <View style={{ paddingHorizontal: 15, marginTop: 20 }} >
                    <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }} >Fntank Marketplace Team</Text>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}} >
                        {
                            directors.map((d, i) => (
                                <TouchableNativeFeedback onPress={() => navigation.navigate('DetailsPage')}>
                                    <View style={d.designation === "Chairman" ? styles.chairmanCard : styles.otherCard} >
                                        <Image style={styles.cardImage} source={require('../../assets/about/director.png')} />
                                        <Text style={styles.directorName}>{d.name}</Text>
                                        <Text style={d.designation === "Chairman" ? styles.designation : styles.otherDesignation} > {d.designation} </Text>
                                    </View>
                                </TouchableNativeFeedback>
                            ))
                        }

                    </View>
                </View>

                <View style={{ paddingLeft: 15 }} >
                    <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff", marginVertical: 20 }} >Fantank Marketplace News</Text>
                    <ScrollView horizontal>
                        <View style={{ padding: 10, borderColor: "#3D3D3D", borderWidth: 1, height: 284, width: 306, borderRadius: 10, marginRight: 15 }} >
                            <Image style={{ alignSelf: "center", marginTop: 5 }} source={require('../../assets/FinancialServices/resource.png')} />
                            <Text style={{ color: "#fff", fontSize: 16, marginTop: 15 }} >Important updates for listing anddelisting your NFTs</Text>
                        </View>
                        <View style={{ padding: 10, borderColor: "#3D3D3D", borderWidth: 1, height: 284, width: 306, borderRadius: 10 }} >
                            <Image style={{ alignSelf: "center", marginTop: 5 }} source={require('../../assets/FinancialServices/resource.png')} />
                            <Text style={{ color: "#fff", fontSize: 16, marginTop: 15 }} >Important updates for listing anddelisting your NFTs</Text>
                        </View>

                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    },
    chairmanCard: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1B1B1B",
        width: "48%",
        paddingVertical: 20,
        borderBottomColor: "#F98F8F",
        borderBottomWidth: 5,
        borderRadius: 5,
        marginTop: 10
    },
    cardImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: "white",
        borderWidth: 1
    },
    directorName: {
        color: "white",
        fontSize: 14,
        marginTop: 10
    },
    designation: {
        color: "#F98F8F",
        fontSize: 14,
        textAlign: "center",
        marginHorizontal: 10
    },
    otherCard: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#1B1B1B",
        width: "48%",
        paddingVertical: 20,
        borderBottomColor: "#069EFC",
        borderBottomWidth: 5,
        borderRadius: 5,
        marginTop: 10
    },
    otherDesignation: {
        color: "#069EFC",
        fontSize: 14,
        textAlign: "center",
        marginHorizontal: 10
    }
})

export default NftAbout