import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

const Favourites = () => {
    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 45 }} >
                    <Entypo name="cross" size={24} color="white" />
                </View>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center", marginTop: 20 }} >Favourites (8)</Text>

                <View style={{ marginTop:20 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/notable.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10, marginVertical: 15, borderRadius: 10 }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/musicArtist1.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10,marginVertical: 15, borderRadius: 10  }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/notable.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10, marginVertical: 15, borderRadius: 10 }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/musicArtist1.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10,marginVertical: 15, borderRadius: 10  }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/notable.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10, marginVertical: 15, borderRadius: 10 }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/musicArtist1.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10,marginVertical: 15, borderRadius: 10  }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/notable.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10, marginVertical: 15, borderRadius: 10 }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/musicArtist1.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10,marginVertical: 15, borderRadius: 10  }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/notable.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10, marginVertical: 15, borderRadius: 10 }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ width: "48%" }} >
                            <ImageBackground source={require('../../assets/FinancialServices/musicArtist1.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10,marginVertical: 15, borderRadius: 10  }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../assets/FinancialServices/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
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
        paddingHorizontal: 15
    },
})

export default Favourites