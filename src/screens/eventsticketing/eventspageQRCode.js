import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Buttons } from '../../common';

export const EventsPageQRCode = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/artist/nikenDewanil.png')} style={styles.bannerImage}>
                    <MaterialIcons style={styles.backIcon} onPress={() => navigation.goBack()} name="arrow-back-ios" size={21} color="white" />
                    <Text style={styles.title} >Niken Dewanil</Text>
                    <Text style={styles.address} > @ Club Mint - LA</Text>
                </ImageBackground>

                <Text style={{ color: "#E0E0E0", fontSize: 22, textAlign: "center", marginTop: 30 }} >What is QR Code Voting?</Text>

                <View style={{ marginHorizontal: 25, flexDirection: "row", marginTop: 30 }} >
                    <View style={{ alignItems: "center", width: "20%" }} >
                        <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#4051DF", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }} >1</Text>
                        </View>
                        <View style={{ borderLeftColor: "#4051DF", borderLeftWidth: 1, height: 40 }} />
                        <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#4051DF", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }} >2</Text>
                        </View>
                        <View style={{ borderLeftColor: "#4051DF", borderLeftWidth: 1, height: 40 }} />
                        <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#4051DF", justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }} >3</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 10, width: "80%" }} >
                        <Text style={{ fontSize: 16, color: "#C4C4C4", marginBottom: 50 }} >Scan QR Code inside venue or at entrance.</Text>
                        <Text style={{ fontSize: 16, color: "#C4C4C4", marginBottom: 50 }} >Evaluate the artistry on display by transferring FanBit to them. </Text>
                        <Text style={{ fontSize: 16, color: "#C4C4C4" }} >Get QR Code voting credit towards your next badge. Its that simple!</Text>
                    </View>
                </View>




                <View style={{ alignSelf: "center", marginVertical: 30 }} >
                    <Image source={require('../../common/assets/images/eventsticketing/qrcode.png')} />
                </View>
                <View style={{ alignSelf: "center", marginVertical: 30 }}>
                    <Image style={{ width: Dimensions.get('screen').width }} source={require('../../common/assets/images/eventsticketing/dhonermatha.png')} />
                </View>

                <View style={{ backgroundColor: "#0A0E1D", marginHorizontal: 15, padding: 20, alignItems: "center" }} >
                    <View style={{ backgroundColor: "#4051DF", height: 70, width: 70, borderRadius: 50, alignItems: "center", justifyContent: "center" }} >
                        <FontAwesome5 name="binoculars" size={24} color="white" />
                    </View>
                    <Text style={{ color: "#e0e0e0", fontSize: 22, marginTop: 30, marginBottom: 20, textAlign: "center" }} >Talent Booking Services</Text>
                    <Text style={{ color: "#C4C4C4", fontSize: 16, marginBottom: 30, textAlign: "center" }} >You don't have time to evaluate talent, negotiate fees, and procurement of a legal agreement?</Text>
                    <Text style={{ color: "#C4C4C4", fontSize: 16, marginBottom: 10, textAlign: "center" }} >Hire FanTank to streamline the talent booking process for you by using our unique mix of technology & crowd intelligence to curate  your talent prospect list.</Text>

                    <Buttons style={{ width: "100%" }} onPress={() => alert('ok')} title={'Start'} fillBtn />
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 0 : 40
    },
    bannerImage: {
        width: "100%",
        height: 190,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    backIcon: {
        position: "absolute",
        top: 20,
        left: 20
    },
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    address: {
        fontSize: 18,
        color: "#fff"
    }
})