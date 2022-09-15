import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'

export const SingleNFT = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/artist.png')} style={{ height: 521, marginTop: 35, paddingHorizontal: 15 }} >
                    <View style={styles.header} >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <TouchableOpacity onPress={() => navigation.navigate('ConnectWallet')} style={styles.wallet} >
                                <View style={styles.walletIcon} ><Ionicons name="wallet" size={18} color="#A9A9A9" /></View>
                                <Text style={{ color: "#378EF0", marginRight: 5 }} >Connect Wallet</Text>
                            </TouchableOpacity>
                            <View style={styles.menuIcon} ><Feather name="menu" size={20} color="#A9A9A9" /></View>
                        </View>
                    </View>

                </ImageBackground>
                <View style={styles.contentContainer} >
                    <View style={styles.contentHeader} >
                        <Text style={{ fontSize: 22, fontWeight: "700", color: "#fff" }} >Niken Dewanil</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Image style={{ height: 21.82, width: 21.82, marginRight: 10 }} source={require('../../common/assets/images/artistlist/fitbit-token.png')} />
                            <Text style={{ fontSize: 22, color: "#fff" }} >100</Text>
                        </View>

                    </View>
                    <Text style={{ color: "#fff", marginVertical: 20, lineHeight: 20 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id ex sed justo efficitur ullamcorper. In blandit mi nec justo consectetur bibendum.</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20 }} >
                        <View style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 16, paddingHorizontal: 16, borderColor: "#fff", borderWidth: 1 }} ><Ionicons name="heart-outline" size={20} color="#A9A9A9" /></View>
                        <View style={{ backgroundColor: "#3772FF", paddingVertical: 16, paddingHorizontal: "30%", borderRadius: 10 }} >
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }} >Buy Now</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    wallet: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1A1A1A",
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 30,
        borderColor: "#444444",
        borderWidth: 1,
        marginRight: 10
    },
    walletIcon: {
        backgroundColor: "#444444",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginRight: 5
    },
    menuIcon: {
        backgroundColor: "#1A1A1A",
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderColor: "#444444",
        borderWidth: 1
    },
    contentContainer: {
        paddingHorizontal: 20,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        backgroundColor: "#000",
        position: "relative",
        marginTop: -30,
    },
    contentHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 50
    }


})
