import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FanbitHeader } from '../../common'
import arthur from '../../common/assets/images/fanbit/Arthur.png'
import Shane from '../../common/assets/images/fanbit/Shane.png'
import Darrell from '../../common/assets/images/fanbit/Darrell.png'
import Cameron from '../../common/assets/images/fanbit/Cameron.png'
import Victoria from '../../common/assets/images/fanbit/Arthur.png'

import monthlybadge from '../../common/assets/images/fanbit/monthlybadge.png'
import RussImage from '../../common/assets/images/artist/russ.png'
import RandyRen from '../../common/assets/images/artist/randyRen.png'
import MarshaBrady from '../../common/assets/images/artist/marshaBrady.png'
import djSplice from '../../common/assets/images/artist/djSplice.png'
import MandyMoore from '../../common/assets/images/artist/madyMorrell.png'
import badge10 from '../../common/assets/images/badge/badge10.png'
import badge6 from '../../common/assets/images/badge/badge6.png'
import badge9 from '../../common/assets/images/badge/badge9.png'
import badge8 from '../../common/assets/images/badge/badge8.png'
import badge2 from '../../common/assets/images/badge/badge2.png'
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'


const activity = [
    {
        id: 1,
        name: "Arthur",
        image: arthur
    },
    {
        id: 2,
        name: "Shane",
        image: Shane
    },
    {
        id: 3,
        name: "Darrell",
        image: Darrell
    },
    {
        id: 4,
        name: "Cameron",
        image: Cameron
    },
    {
        id: 5,
        name: "Darrell",
        image: Darrell
    },
    {
        id: 6,
        name: "Victoria",
        image: arthur
    },
    {
        id: 7,
        name: "Shane",
        image: Shane
    },
]
const transaction = [
    {
        id: 1,
        name: "Monthly Badge Allotment",
        category: null,
        badge: null,
        balance: "+2000",
        image: monthlybadge,
        status: "Success"
    },
    {
        id: 2,
        name: "Russ",
        category: "Influencer",
        badge: badge10,
        balance: "+2000",
        image: RussImage,
        status: "Success"
    },
    {
        id: 3,
        name: "Randy Ren",
        category: "Enterprise",
        badge: badge6,
        balance: "+70",
        image: RandyRen,
        status: "Pending"
    },
    {
        id: 4,
        name: "Marsha Brady",
        category: "Brand",
        badge: badge9,
        balance: "+550",
        image: MarshaBrady,
        status: "Success"
    },
    {
        id: 6,
        name: "DJ Splice",
        category: "BTS",
        badge: badge8,
        balance: "-300",
        image: djSplice,
        status: "Pending"
    },
    {
        id: 7,
        name: "Mandy Moore ",
        category: "Fan",
        badge: badge2,
        balance: "+50",
        image: MandyMoore,
        status: "Success"
    },
    {
        id: 8,
        name: "Fanbit Relaod POS",
        category: null,
        badge: null,
        balance: "+2000",
        image: monthlybadge,
        status: "Pending"
    }
]


export const Fanbit1 = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <StatusBar style='light' backgroundColor='#000' />
            <FanbitHeader title={'Fanbit'} />
            <ScrollView style={{ marginBottom: 60 }}>
                <View style={styles.topContainer} >
                    <View>
                        <Text style={styles.title} >Fanbit Balance</Text>
                        <Text style={styles.tokenTitle} >100 Tokens</Text>
                        <TouchableOpacity style={styles.butTokenBtn} >
                            <Text style={styles.btnTitle} >Buy Token</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('BuyFanbit1')}>
                        <Image source={require('../../common/assets/images/artistlist/fitbit-token.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 15 }} >
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }} >Activity</Text>
                    <ScrollView style={{ flexGrow: 0, marginVertical: 20 }} horizontal >
                        {activity.map((d, i) => (
                            <View key={i} style={{ alignItems: "center", justifyContent: "center", marginRight: 15 }} >
                                <Image style={{ height: 50, width: 50, borderColor: "#B6B6B6", borderWidth: 2, borderRadius: 25 }} source={d.image} />
                                <Text style={{ color: "#fff", marginTop: 10 }} >{d.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={{ marginHorizontal: 15 }} >
                    <View style={{ marginHorizontal: 15 }} >
                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }} >Transaction</Text>
                        {transaction.map((d, i) => (
                            <TouchableOpacity key={i} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20, position: "relative" }} >
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Image style={{ height: 42, width: 42, borderRadius: 21, borderColor: "#fff", borderWidth: 1 }} source={d.image} />
                                    <View style={{ marginLeft: 10 }} >
                                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                                            <Text style={{ fontWeight: "500", color: "#E4E4E4", }} >{d.name}</Text>
                                            {d.category && <Entypo name="dot-single" size={24} color="#6D6767" />}
                                            {d.category && <Text style={{ fontWeight: "500", color: "#E4E4E4" }} >{d.category}</Text>}

                                            {d.badge !== null && <Entypo name="dot-single" size={24} color="#6D6767" />}
                                            {d.badge !== null && <Image style={{ height: 18, width: 27 }} source={d.badge} />}
                                        </View>
                                        <View style={{ backgroundColor: "#1F2919", width: 62, paddingVertical: 5, borderRadius: 5, marginTop: 5 }} >
                                            <Text style={{ fontSize: 12, color: "#7EF138", textAlign: "center" }} >Success</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ position: "absolute", right: 0, flexDirection: "row", alignItems: "center" }} >
                                    <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff", marginRight: 8 }} >+ 2000</Text>
                                    <Image style={{ height: 11, width: 11 }} source={require('../../common/assets/images/artistlist/fitbit-token.png')} />
                                </View>
                            </TouchableOpacity>
                        ))}

                    </View>
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
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 40 : 40
    },
    topContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 30
    },
    title: {
        color: "#C4C4C4"

    },
    tokenTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10
    },
    butTokenBtn: {
        borderColor: "#378EF0",
        borderWidth: 1,
        width: 160,
        paddingVertical: 10,
        borderRadius: 5
    },
    btnTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center"
    },




    bgImage1: {
        height: 300,
        width: 200,
        position: "absolute",
        top: 40,
        right: 0,
        zIndex: -1000,
    },

    bgImage2: {
        height: 214,
        width: 281,
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: -1000,
    },
})