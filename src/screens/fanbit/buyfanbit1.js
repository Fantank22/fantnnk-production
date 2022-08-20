import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FanbitHeader } from '../../common'
import { useState } from 'react';

export const BuyFanbit1 = () => {
    const tabs = ['1 Day', '1 week', '1 month', '1 year', 'All']
    const [index, setIndex] = useState(1)
    return (
        <View style={styles.container} >
            <StatusBar style='light' backgroundColor='#000' />
            <FanbitHeader title={'Fanbit POS'} />
            <ScrollView style={{ marginHorizontal: 15 }}>
                <View style={{ alignItems: "center", marginVertical: 20 }} >
                    <Image style={styles.image} source={require('../../common/assets/images/artistlist/fitbit-token.png')} />
                    <Text style={styles.title} >Fanbit Transfer Volume</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <View style={styles.summaryCard} >
                        <Text style={styles.cardTitle} >1,718.86 </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={styles.cardAmount} >1.93 % </Text>
                            <AntDesign name="arrowup" size={18} color="#67E43A" />
                            <Text style={styles.cardToday} >Today</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginTop: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "#E4A03A" }} />
                        <Text style={{ fontSize: 12, color: "#D0D0D0", marginLeft: 5 }}> Artists to Influencers</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "#378EF0" }} />
                        <Text style={{ fontSize: 12, color: "#D0D0D0", marginLeft: 5 }}> Scouts to Artist </Text>
                    </View>
                </View>
                <View style={{ position: "relative", marginTop: 20 }}>
                    <Image style={{}} source={require('../../common/assets/images/fanbit/graphyellow.png')} />
                    <Image style={{ position: "absolute", top: 35 }} source={require('../../common/assets/images/fanbit/graphblue.png')} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15, alignSelf: "center", marginTop: 40 }} >
                    {tabs.map((d, i) => (
                        <TouchableOpacity onPress={() => setIndex(i + 1)} style={i + 1 === index ? styles.activeTab : styles.allTab} key={i}>
                            <Text style={{ color: "#fff", fontSize: 12 }} >{d}</Text>
                        </TouchableOpacity>
                    ))}

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
        paddingTop: Platform.OS === 'ios' ? 40 : 40,
    },
    image: {
        height: 101,
        width: 101
    },
    title: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 50,
        marginTop: 20

    },
    summaryCard: {
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        width: 280,
        paddingVertical: 20,
        borderRadius: 5


    },
    cardTitle: {
        fontSize: 26,
        color: "#e0e0e0",
        fontWeight: "bold",
        marginBottom: 10
    },
    cardAmount: {
        fontSize: 18,
        color: "#67E43A",
        fontWeight: "bold"
    },
    cardToday: {
        fontSize: 18,
        color: "#D0D0D0",
        fontWeight: "bold",
        marginLeft: 20
    },
    allTab: {
        marginRight: 10,
        borderColor: "#fff",
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    activeTab: {
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: "#378EF0",
        borderColor: "#378EF0",
        borderWidth: 1,
    },


    bgImage1: {
        position: "absolute",
        top: 40,
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