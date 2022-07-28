import { FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackendHeader, CustomInvestTab } from '../../common/components/backendnavigation'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export const Investors = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BackendHeader title={'Invest'} />
            <ScrollView>
                <View style={styles.card} >
                    <View style={{ borderBottomColor: "#414141", borderBottomWidth: 2, marginBottom: 15 }} >
                        <Image style={styles.artistImage} source={require('../../common/assets/images/artist/madyMorrell.png')} />
                        <Image style={styles.badgeImage} source={require('../../common/assets/images/badge/badge7.png')} />
                        <Text style={styles.title} >Mady Morrel</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20 }} >
                            <Text style={styles.address} >Vancouver</Text>
                            <Text style={styles.address} >Canada</Text>
                            <Image source={require('../../common/assets/images/flug/canadian-flag.png')} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title} >Portfolio Value</Text>
                        <View style={styles.protfolioValues} >
                            <View>
                                <Text style={styles.amountTitle} >$1,306.00</Text>
                                <Text style={styles.amountSubTitle} >Investment</Text>
                            </View>
                            <View style={styles.borderStyles} />
                            <View>
                                <Text style={styles.amountTitleColor} > <AntDesign name="arrowup" size={16} color="#83BF6E" /> 6.38 %</Text>
                                <Text style={styles.amountSubTitle} >Growth</Text>
                            </View>
                            <View style={styles.borderStyles} />
                            <View>
                                <Text style={styles.amountTitle} > 420.00</Text>
                                <Text style={styles.amountSubTitle} >Profit</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 15 }} >
                    <CustomInvestTab />
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
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#fff",
        textAlign: "center",
        marginVertical: 10
    },
    amountTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "#FCFCFC",
        marginVertical: 10
    },
    amountTitleColor: {
        fontSize: 16,
        fontWeight: "500",
        color: "#83BF6E"
    },
    amountSubTitle: {
        color: "#BBBBBB"
    },
    address: {
        fontSize: 12,
        color: "#BBBBBB",
        marginRight: 5,
    },
    artistImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: "#fff",
        borderWidth: 1,
        alignSelf: "center"
    },
    badgeImage: {
        width: 42,
        height: 42,
        borderRadius: 10,
        borderColor: "#F4BA20",
        borderWidth: 2,
        position: "absolute",
        right: 0
    },
    card: {
        backgroundColor: "#1B1B1B",
        borderColor: "#414141",
        borderWidth: 1,
        borderRadius: 10,
        margin: 15,
        padding: 20,
        position: "relative"

    },
    borderStyles: {
        borderColor: "#3D3D3D",
        borderWidth: 1,
        height: 50
    },
    protfolioValues: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    bgImage1: {
        position: "absolute",
        top: 0,
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