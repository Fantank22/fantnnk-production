import { Image, ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Buttons } from '../../common';

export const EventsTicketing = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style='light' />
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/eventsticketing/topBanner1.png')} style={styles.topImage}>
                    <View style={styles.backIcon} >
                        <MaterialIcons onPress={() => navigation.goBack()} name="keyboard-arrow-left" size={24} color="white" />
                    </View>
                    <Text style={styles.title} >Curated Showcases & Events</Text>
                    <Text style={styles.subTitle} >Where Technology & The Eye Test Meet! </Text>
                </ImageBackground>
                <View style={styles.headerCard} >
                    <View style={styles.leftContant} >
                        <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
                    </View>
                    <View style={{ width: "60%" }} >
                        <Text style={styles.subTitle2}>Users strive for new badges & related  perks via FanTank's QR code voting  technology  </Text>
                    </View>
                    <View style={styles.rightContant} >
                        <Image style={{ height: 50, width: 50 }} source={require('../../common/assets/images/badge/badge10.png')} />
                    </View>

                </View>
                <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginVertical: 30, paddingHorizontal: 15 }} >
                    <Image source={require('../../common/assets/images/eventsticketing/homeGroup.png')} />
                </View>
                <View style={{ marginHorizontal: 15 }} >
                    <Buttons onPress={() => navigation.navigate('EventsTicketCategories')} title={'Showcases & Events'} fillBtn={true} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 0 : 35
    },
    backIcon: {
        position: "absolute",
        top: 15,
        left: 15
    },
    topImage: {
        height: 174,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    subTitle: {
        fontSize: 12,
        color: "#fff",
        marginTop: 10
    },
    subTitle2: {
        fontSize: 12,
        color: "#C1C1C1",
        marginTop: 10,
        textAlign: "center",
        marginHorizontal: 10,
        lineHeight: 20
    },
    headerCard: { backgroundColor: "#1A1A1A", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20, paddingHorizontal: 10, paddingVertical: 20, borderLeftColor: "#4051DF", borderLeftWidth: 5, borderRightColor: "#4051DF", borderRightWidth: 5, borderRadius: 7 },
    leftContant: { height: 58, width: 58, backgroundColor: "#242734", alignItems: "center", justifyContent: "center", borderRadius: 29 },
    rightContant: { height: 58, width: 58, backgroundColor: "#C4C4C4", alignItems: "center", justifyContent: "center", borderRadius: 29 }

})