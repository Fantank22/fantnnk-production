
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Buttons, ServiceHeader } from '../../common/components'
import { AntDesign } from '@expo/vector-icons'

export const FanbitUtilityToken = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style='light' />
            <ServiceHeader title={item.title} />
            <Image style={{ width: 148, height: 144, marginTop: 20, marginHorizontal: 15, alignSelf: "center" }} source={item.image} />
            <View style={{ marginHorizontal: 20, marginTop: 50 }} >
                <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff", textAlign: "center", marginVertical: 10 }} >{item.title}</Text>
                <Text style={{ color: "#fff", textAlign: "center" }}>{item.description}</Text>
            </View>
            <View style={styles.imageContainer}>
                <View style={styles.userimageBorder}>
                    <Image
                        style={styles.userImage}
                        source={require("../../common/assets/images/artistlist/artist-user-img.png")}
                    />
                    <View style={styles.chcekIcon} >
                        <AntDesign
                            name="check"
                            size={15}
                            color="#fff"
                        />
                    </View>
                </View>
                <View style={styles.varticalLine}></View>
                <View style={styles.fitbitTokenBorder}>
                    <Image
                        style={styles.fitbitTokenImage}
                        source={require("../../common/assets/images/artistlist/fitbit-token.png")}
                    />
                </View>
                <View style={styles.varticalLine}></View>
                <View style={styles.artistimageBorder}>
                    <Image
                        style={styles.userImage}
                        source={require("../../common/assets/images/artistlist/artist-user-img.png")}
                    />
                    <View style={styles.chcekIcon}>
                        <AntDesign
                            name="check"
                            size={15}
                            color="#fff"
                        />
                    </View>
                </View>
            </View>
            <View style={{ position: "absolute", bottom: 20, width: "100%" }} >
                <Buttons onPress={() => alert('ok')} title={item.btnTitle} style={{ marginHorizontal: 15 }} fillBtn />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 0 : 40
    },
    imageContainer: {
        alignItems: "center",
    },
    userimageBorder: {
        borderColor: "#35C112",
        borderWidth: 3,
        width: 63,
        height: 63,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%",
        position: "relative",
    },
    artistimageBorder: {
        borderColor: "#35C112",
        borderWidth: 3,
        width: 63,
        height: 63,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fitbitTokenBorder: {
        borderColor: "#35C112",
        borderWidth: 3,
        width: 38,
        height: 38,
        borderRadius: 19,
        alignItems: "center",
        justifyContent: "center",
    },
    fitbitTokenImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    highlightText: {
        color: "white",
        fontSize: 20,
    },
    date: {
        fontSize: 12,
        color: "#C4C4C4",
        alignSelf: "center",
        marginVertical: 5,
    },
    feedback: {
        color: "white",
        fontSize: 14,
        alignSelf: "center",
        marginTop: 70,
    },
    optional: {
        fontSize: 9,
        color: "#888888",
    },
    buttons: {
        marginTop: 100,
    },

    varticalLine: {
        borderColor: "#35C112",
        borderWidth: 2,
        height: 50,
    },
    chcekIcon: {
        backgroundColor: "#35C112",
        borderRadius: 20,
        padding: 2,
        position: "absolute",
        bottom: -5,
        right: -5,
    },
})