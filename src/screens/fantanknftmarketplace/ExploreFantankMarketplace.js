import { View, Text, ScrollView, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'

export const ExploreFantankMarketplace = ({ navigation }) => {
    const [index, setIndex] = React.useState(1)
    const tabs = [{ title: "Music", link: "TextReviewsArtrepreneurRep" }, { title: "Art", link: "VideoReviewsArtrepreneurRep" }]

    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/ExploreFantankMarketplace.png')} style={{ height: 130, marginTop: 35, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }} >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#1A1A1A", paddingVertical: 6, paddingHorizontal: 6, borderRadius: 30, borderColor: "#444444", borderWidth: 1 }} >
                                <View style={{ backgroundColor: "#444444", borderRadius: 20, paddingVertical: 5, paddingHorizontal: 5, marginRight: 5 }} >
                                    <Image source={require('../../common/assets/images/fantanknftmarketplace/metamask.png')} />
                                </View>
                                <Text style={{ color: "#fff", marginRight: 5 }} >10.80</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Favourites')} style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, marginHorizontal: 5, borderColor: "#444444", borderWidth: 1 }} >
                                <Ionicons name="heart-outline" size={20} color="#A9A9A9" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, borderColor: "#444444", borderWidth: 1 }} ><Feather name="menu" size={20} color="#A9A9A9" /></TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center", marginTop: 20 }} >Explore</Text>
                </ImageBackground>
                <View style={{ marginHorizontal: 15 }} >

                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center", marginVertical: 30 }}>
                        {
                            tabs.map((t, i) => (

                                <TouchableOpacity key={i} onPress={() => console.log('hello')} >
                                    <View style={i + 1 === index ? styles.activeTab : styles.allTab}>
                                        <Text onPress={() => setIndex(i + 1)}
                                            style={i + 1 === index ? { color: "white" } : { color: "#5E5C61" }}
                                        >
                                            {t.title}</Text>
                                    </View>
                                </TouchableOpacity>

                            ))
                        }
                    </View>

                    {[1, 2, 3, 4, 5, 6].map((d, i) => (
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
                    ))}

                </View>
            </ScrollView>

            <Image
                source={require("../../common/assets/images/3.png")}
                style={styles.bgImage1}
            />


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },

    allTab: {
        fontSize: 16,
        color: "#5E5C61",
        borderColor: "#5E5C61",
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        marginHorizontal: 10

    },
    activeTab: {
        fontSize: 16,
        color: "#fff",
        backgroundColor: "#378EF0",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        marginHorizontal: 10

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
