import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Buttons, FanbitHeader } from '../../common'
import { useState } from 'react';
const amounts = [
    {
        id: 1,
        amount: 5,
        token: 200
    },
    {
        id: 2,
        amount: 15,
        token: 750
    },
    {
        id: 3,
        amount: 25,
        token: 1250
    },
    {
        id: 4,
        amount: 50,
        token: 1750
    },
    {
        id: 5,
        amount: 75,
        token: 4250
    },
    {
        id: 6,
        amount: 100,
        token: 5750
    },
    {
        id: 7,
        amount: 150,
        token: 8750
    },
    {
        id: 8,
        amount: 200,
        token: 12000
    },
    {
        id: 9,
        amount: 250,
        token: 15500
    },
]
export const BuyFanbit2 = ({ navigation }) => {

    const [data, setData] = useState({
        id: 1,
        amount: 5,
        token: 200
    })

    const handleAmount = (e) => {
        console.log(e)
        setData(e)
    }
    return (
        <View style={styles.container} >
            <StatusBar style='light' backgroundColor='#000' />
            <FanbitHeader title={'Fanbit Shop'} />
            <ScrollView style={{ paddingHorizontal: 15 }}>
                <View style={{ alignItems: "center", marginVertical: 20 }} >
                    <Image style={styles.image} source={require('../../common/assets/images/artistlist/fitbit-token.png')} />
                    <Text style={styles.title} >Buy Fanbit </Text>
                </View>

                <View style={{ marginTop: 10 }} >
                    <Text style={styles.amountTitle} >Select Amount</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }} >
                        {amounts.map((d, i) => (
                            <TouchableOpacity onPress={() => handleAmount(d)} key={i} style={data.amount === d.amount ? styles.activeAmount : styles.allAmount} >
                                <Text style={styles.usdAmount} >${d.amount}</Text>
                                <Text style={styles.tokenAmount} >{d.token} tokens</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={{ marginTop: 20 }} >
                    <Text style={styles.amountTitle} >Select Transaction Type</Text>
                    <View style={{ backgroundColor: "#1A1A1A", padding: 15, borderRadius: 5 }} >
                        <TouchableOpacity onPress={() => navigation.navigate('FanbitSelectTransactionType')} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                            <Text style={{ color: "#378EF0", fontSize: 16 }} >One Time Transaction</Text>
                            <MaterialIcons name="arrow-forward-ios" size={21} color="#378EF0" />
                        </TouchableOpacity>
                        <View style={{ borderColor: "#636363", borderWidth: 1, marginVertical: 15 }} />
                        <TouchableOpacity onPress={() => navigation.navigate('FanbitTransparency')} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                            <Text style={{ color: "#378EF0", fontSize: 16 }} >Re Occurring Transaction</Text>
                            <MaterialIcons name="arrow-forward-ios" size={21} color="#378EF0" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 20 }} >
                    <Buttons onPress={() => navigation.navigate('Payment', { data: data })} fillBtn title={'Next'} />
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
        paddingBottom: 80
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
    amountTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#fff",
        marginBottom: 20

    },
    tokenAmount: {
        color: "#E0E0E0",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        marginTop: 10

    },
    usdAmount: {
        color: "#A7A7A7",
        fontSize: 16,
        textAlign: "center"

    },
    allAmount: {
        borderRadius: 10,
        backgroundColor: "#1A1A1A",
        borderColor: "#2C2C2C",
        borderWidth: 2,
        width: "31%",
        paddingVertical: 20,
        marginBottom: 15
    },
    activeAmount: {
        borderRadius: 10,
        backgroundColor: "#1A1A1A",
        borderColor: "#378EF0",
        borderWidth: 2,
        width: "31%",
        paddingVertical: 20,
        marginBottom: 15
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