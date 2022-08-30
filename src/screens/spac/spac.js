import { Image, ImageBackground, Platform, SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from "@expo/vector-icons";

export const Spac = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={'light'} />
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/spac/spacBanner.png')} style={styles.bannerImage} >
                    <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()} >
                        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>SPAC FINANCING</Text>
                </ImageBackground>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={styles.subTitle} >What is an (a -SPAC)?</Text>
                    <Text style={styles.description} >
                        The “a-SPAC” is special purpose acquisition company (SPAC)  formed for the sole purpose of raising investment capital through an <Text onPress={() => alert('ok')} style={{ color: "#378EF0" }} >initial public offering (IPO)</Text> for only artistic projects like music catalogs acquisitions, music artist song recordings, movies / film, art consortiums, fashion brands, theatric productions, and more!
                    </Text>

                    <Image style={styles.workImage} source={require('../../common/assets/images/spac/workImage.png')} />


                    <Text style={[styles.description, { marginBottom: 20 }]}>
                        Our team of finance professionals are there to assist the artist and his or her team through this process with the end goal of financing  the artists’ vision and art to the world while also creating ROI for investors.
                    </Text>
                </View>
            </ScrollView>

            <Image
                source={require("../../common/assets/images/3.png")}
                style={styles.bgImage1}
            />
            <Image
                source={require("../../common/assets/images/4.png")}
                style={styles.bgImage2}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 0 : 40
    },
    backIcon: {
        position: "absolute",
        top: 20,
        left: 20
    },
    bannerImage: {
        width: "100%",
        height: 165,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "500"
    },
    subTitle: {
        fontSize: 18,
        color: "#fff",
        marginTop: 20

    },
    description: {
        color: "#fff",
        marginTop: 20,
        lineHeight: 20
    },
    workImage: {
        width: '100%',
        resizeMode: "contain",
        marginVertical: 30
    },
    bgImage1: {
        position: "absolute",
        top: 50,
        right: 0,
        zIndex: -1000,
    },

    bgImage2: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: -1000,
    },
})