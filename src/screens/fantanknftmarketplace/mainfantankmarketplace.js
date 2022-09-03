import { View, Text, ScrollView, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'

export const MainFantankMarketplace = ({ navigation }) => {
    const collections = [
        { name: "Niken Dewanil" },
        { name: "Wade Warren" },
        { name: "Jenny Wilson" },
        { name: "Ronald Richards" },
        { name: "Annette Black" }

    ]
    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/mainFanTankBanner.png')} style={{ height: 174, marginTop: 35, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }} >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <TouchableOpacity onPress={() => navigation.navigate('ConnectWallet')} >
                                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#1A1A1A", paddingVertical: 6, paddingHorizontal: 6, borderRadius: 30, borderColor: "#444444", borderWidth: 1 }} >
                                    <View style={{ backgroundColor: "#444444", borderRadius: 20, paddingVertical: 5, paddingHorizontal: 5, marginRight: 5 }} >
                                        <Ionicons name="wallet" size={18} color="#A9A9A9" />
                                    </View>
                                    <Text style={{ color: "#378EF0", marginRight: 5 }} >Connect Wallet</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Favourites')} >
                                <View style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, marginHorizontal: 5, borderColor: "#444444", borderWidth: 1 }} >
                                    <Ionicons name="heart-outline" size={20} color="#A9A9A9" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, borderColor: "#444444", borderWidth: 1 }} >
                                <Feather name="menu" size={20} color="#A9A9A9" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center", marginTop: 30 }} >NFT Marketplace</Text>
                </ImageBackground>
                {/* Notable Drops  */}
                <View style={{ paddingLeft: 15 }} >
                    <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff", marginVertical: 20 }} >Notable Drops</Text>
                    <ScrollView horizontal >
                        {[1, 2, 3, 4].map((d, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('SingleNFT')} >
                                <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/notable.png')} style={{ width: 190, height: 214, justifyContent: "space-between", padding: 10, marginRight: 20 }} >
                                    <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, marginHorizontal: 5, alignSelf: "flex-end" }} ><Ionicons name="heart" size={20} color="red" /></View>
                                    <View>
                                        <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                                            <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                            <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}




                    </ScrollView>
                </View>

                {/* Top Collections  */}
                <View style={{ paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                        <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff", marginVertical: 20 }}>Top Collections</Text>
                        <TouchableOpacity onPress={() => alert('hello')} >
                            <Text style={{ color: "#378EF0", fontSize: 16 }} >View all</Text>
                        </TouchableOpacity>
                    </View>

                    {collections.map((c, i) => (
                        <View key={i} style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#1A1A1A", padding: 15, borderColor: "#404040", borderWidth: 1, borderRadius: 10, marginVertical: 5 }} >
                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <View style={{ position: "relative" }} >
                                    <Image style={{ height: 44, width: 44, borderColor: "#fff", borderWidth: 1, borderRadius: 22 }} source={require('../../common/assets/images/artist/artist2.png')} />
                                    <Image style={{ height: 18, width: 18, position: "absolute", bottom: 0, left: 30 }} source={require('../../common/assets/images/fantanknftmarketplace/verified.png')} />
                                </View>
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={{ fontWeight: "700", color: "#fff" }} >{c.name}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Text style={{ fontSize: 12, color: "#CACACA" }} >Floor price </Text>
                                        <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#fff", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "#67E43A" }} > <Feather name="arrow-up" size={16} color="#67E43A" /> 60.38 %</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-end" }} >
                                    <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                    <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff", marginLeft: 5 }} >12.13</Text>
                                </View>
                            </View>
                        </View>
                    ))}

                </View>

                {/* Top Trending  */}
                <View style={{ paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                        <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff", marginVertical: 20 }}>Top Trending</Text>
                        <TouchableOpacity onPress={() => alert('hello')} >
                            <Text style={{ color: "#378EF0", fontSize: 16 }} >View all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal >
                        <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/notable.png')} style={{ width: 190, height: 214, justifyContent: "space-between", padding: 10, marginRight: 20 }} >
                            <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, marginHorizontal: 5, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                            <View>
                                <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                    <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/notable.png')} style={{ width: 190, height: 214, justifyContent: "space-between", padding: 10, marginRight: 20 }} >
                            <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, marginHorizontal: 5, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                            <View >
                                <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                    <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/notable.png')} style={{ width: 190, height: 214, justifyContent: "space-between", padding: 10, marginRight: 20 }} >
                            <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, marginHorizontal: 5, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                            <View>
                                <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                    <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                </View>
                            </View>
                        </ImageBackground>

                    </ScrollView>
                </View>

                {/* Browse By Category  */}
                <View style={{ paddingLeft: 15 }} >
                    <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff", marginVertical: 20 }} >Browse By Category</Text>
                    <ScrollView horizontal >
                        <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/sports.png')} style={{ width: 190, height: 214, justifyContent: "flex-end", padding: 10, marginRight: 20 }} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Sports</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/art.png')} style={{ width: 190, height: 214, justifyContent: "flex-end", padding: 10, marginRight: 20 }} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Art</Text>
                        </ImageBackground>
                    </ScrollView>
                </View>

                {/* Resource For Getting Started */}

                <View style={{ paddingLeft: 15 }} >
                    <Text style={{ fontWeight: "700", fontSize: 18, color: "#fff", marginVertical: 20 }} >Resource For Getting Started</Text>
                    <ScrollView horizontal>
                        <View style={{ padding: 10, borderColor: "#3D3D3D", borderWidth: 1, height: 284, width: 306, borderRadius: 10, marginRight: 15 }} >
                            <Image style={{ alignSelf: "center", marginTop: 5 }} source={require('../../common/assets/images/fantanknftmarketplace/resource.png')} />
                            <Text style={{ color: "#fff", fontSize: 16, marginTop: 15 }} >Important updates for listing anddelisting your NFTs</Text>
                        </View>
                        <View style={{ padding: 10, borderColor: "#3D3D3D", borderWidth: 1, height: 284, width: 306, borderRadius: 10 }} >
                            <Image style={{ alignSelf: "center", marginTop: 5 }} source={require('../../common/assets/images/fantanknftmarketplace/resource.png')} />
                            <Text style={{ color: "#fff", fontSize: 16, marginTop: 15 }} >Important updates for listing anddelisting your NFTs</Text>
                        </View>

                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    }
})
