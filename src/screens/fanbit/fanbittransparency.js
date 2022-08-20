import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BadgeLavel, FanbitHeader, LeaderBoard, PosRevenue, TransactionVolume, UserType } from '../../common'
import { StatusBar } from 'expo-status-bar'

export const FanbitTransparency = () => {
    return (
        <View style={styles.container} >
            <StatusBar style='light' backgroundColor='#000' />
            <FanbitHeader title={'Fanbit POS'} />
            <ScrollView >
                <View style={{ alignItems: "center", marginVertical: 20 }} >
                    <Image style={styles.image} source={require('../../common/assets/images/artistlist/fitbit-token.png')} />
                    <Text style={styles.title} >Fanbit Transparency</Text>
                </View>

                <View style={{ marginHorizontal: 15 }} >
                    <Text style={styles.subTitle}>Circulation </Text>
                    <Image style={{ width: '100%', resizeMode: "contain", marginTop: 20 }} source={require('../../common/assets/images/fanbit/world1.png')} />
                </View>
                <View style={{ borderColor: "#3F3F3F", borderWidth: 3, marginVertical: 20 }} />
                <View>
                    <LeaderBoard />
                </View>
                <View style={{ borderColor: "#3F3F3F", borderWidth: 3, marginVertical: 20 }} />


                <View>
                    <TransactionVolume />
                </View>
                <View style={{ borderColor: "#3F3F3F", borderWidth: 3, marginVertical: 20 }} />
                <View>
                    <PosRevenue />
                </View>
                <View style={{ borderColor: "#3F3F3F", borderWidth: 3, marginVertical: 20 }} />
                <View>
                    <BadgeLavel />
                </View>
                <View style={{ borderColor: "#3F3F3F", borderWidth: 3, marginVertical: 20 }} />
                <View>
                    <UserType />
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
        paddingBottom: 100
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
        marginTop: 20

    },
    subTitle: {
        color: "#E6E6E6",
        fontSize: 18,
        fontWeight: "500",
        marginTop: 20

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
    }
})