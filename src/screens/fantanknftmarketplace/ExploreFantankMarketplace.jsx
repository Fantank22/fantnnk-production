import { View, Text, ScrollView, ImageBackground, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import ExploreMusic from './ExploreMusic'

const ExploreFantankMarketplace = () => {
    const [index, setIndex] = React.useState(1)
    const music = <ExploreMusic />
    const tabs = [{ title: "Music", link: "TextReviewsArtrepreneurRep" }, { title: "Art", link: "VideoReviewsArtrepreneurRep" }]
    const contants = [music, music]

    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <ImageBackground source={require('../../assets/FinancialServices/ExploreFantankMarketplace.png')} style={{ height: 130, marginTop: 35, paddingHorizontal: 15 }} >
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
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center", marginTop: 20 }} >Explore</Text>
                </ImageBackground>
                <View style={{ paddingHorizontal: 15 }} >

                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center", marginVertical: 30 }}>
                        {
                            tabs.map((t, i) => (
                                <>
                                    <TouchableWithoutFeedback onPress={() => console.log('hello')} >
                                        <View  style={i + 1 === index ? styles.activeTab : styles.allTab}>
                                            <Text onPress={() => setIndex(i + 1)}
                                                style={i + 1 === index ? {color:"white"} : {color:"#5E5C61"}}
                                            >
                                                {t.title}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </>
                            ))
                        }
                    </View>
                    {
                        contants.map((t, i) => (
                            <>
                                {i + 1 === index && <View>{t}</View>}
                            </>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
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

    }
})

export default ExploreFantankMarketplace