import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'

export const Favourites = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <ScrollView style={{ paddingHorizontal: 15 }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 45 }} >
                            <Entypo name="cross" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center", marginTop: 20 }} >Favourites (8)</Text>
                </View>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => (
                    <View key={i} style={styles.gridItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('SingleNFT')} style={styles.card}>
                            <Image style={styles.image} source={require('../../common/assets/images/fantanknftmarketplace/notable.png')} />
                            <View style={styles.love} >
                                <Ionicons name="heart-outline" size={20} color="white" />
                            </View>
                            <View style={styles.cardItem}>
                                <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                    <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SingleNFT')} style={styles.card}>
                            <Image style={styles.image} source={require('../../common/assets/images/fantanknftmarketplace/musicArtist1.png')} />
                            <View style={styles.love} >
                                <Ionicons name="heart-outline" size={20} color="white" />
                            </View>
                            <View style={styles.cardItem}>
                                <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                    <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
                }
            </ScrollView >

            <Image
                source={require("../../common/assets/images/3.png")}
                style={styles.bgImage1}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    love: {
        backgroundColor: "#5CAABD",
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "center",
        position: "absolute",
        right: 10,
        top: 10
    }
    ,
    image: {
        width: "100%",
        resizeMode: 'cover',
        borderRadius: 10,
        height: 185
    },
    card: {
        position: "relative",
        width: '48%',
    },
    cardItem: {
        position: "absolute",
        bottom: 10,
        left: 10
    },
    gridItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15
    },
    bgImage1: {
        position: "absolute",
        top: 40,
        right: 0,
        zIndex: -1000,
    },
})

