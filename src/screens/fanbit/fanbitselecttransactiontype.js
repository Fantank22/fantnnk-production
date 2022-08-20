import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { FanbitHeader } from '../../common'
import { MaterialIcons } from '@expo/vector-icons'


export const FanbitSelectTransactionType = () => {
    return (
        <View style={styles.container} >
            <StatusBar style='light' backgroundColor='#000' />
            <FanbitHeader title={'Purchase Type'} />
            <ScrollView style={{ marginHorizontal: 15 }} >
                {[1, 2, 3].map((d, i) => (
                    <View key={i} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#1A1A1A", marginVertical: 10, width: "100%", justifyContent: "space-between", padding: 20, borderRadius: 5 }} >
                        <View style={{ width: '80%' }} >
                            <Text style={styles.title}>Auto Purchase</Text>
                            <Text style={styles.subTitle}>Set up automatic daily, week, bi-weekly purchase of Fanbit</Text>
                        </View>
                        <View style={{ width: '20%', alignItems: "flex-end" }}>
                            <MaterialIcons name="arrow-forward-ios" size={24} color="#378EF0" />
                        </View>
                    </View>
                ))}
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
    title: {
        color: "#E7E7E7",
        fontSize: 16,
        fontWeight: "bold"
    },
    subTitle: {
        color: "#D9D9D9",
        fontSize: 14,
        marginTop: 10
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