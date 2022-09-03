import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, Ionicons, MaterialIcons, EvilIcons, Entypo, AntDesign } from '@expo/vector-icons'
import { Icon, Input } from 'native-base'

export const StatsActivity = () => {
    const [moreDetails, setMoreDetails] = React.useState(1)

    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/activityBanner.png')} style={{ height: 130, marginTop: 35, paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }} >
                        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#1A1A1A", paddingVertical: 6, paddingHorizontal: 6, borderRadius: 30, borderColor: "#444444", borderWidth: 1 }} >
                                <View style={{ backgroundColor: "#444444", borderRadius: 20, paddingVertical: 5, paddingHorizontal: 5, marginRight: 5 }} >
                                    <Image source={require('../../common/assets/images/fantanknftmarketplace/metamask.png')} />
                                </View>
                                <Text style={{ color: "#fff", marginRight: 5 }} >10.80</Text>
                            </View>
                            <View style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, marginHorizontal: 5, borderColor: "#444444", borderWidth: 1 }} ><Ionicons name="heart-outline" size={20} color="#A9A9A9" /></View>
                            <View style={{ backgroundColor: "#1A1A1A", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, borderColor: "#444444", borderWidth: 1 }} ><Feather name="menu" size={20} color="#A9A9A9" /></View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center", marginTop: 20 }} >Activity</Text>
                    <View style={{ alignSelf: "center", marginTop: 10 }} >
                        <Input color={'#C4BBBB'} height={50} borderRadius={10} borderWidth={0} backgroundColor={'#2A2A2A'}
                            w={{
                                base: "90%",
                                md: "25%"
                            }} InputLeftElement={
                                <Icon as={<EvilIcons name="search" />} size={7} ml="2" color="#C4BBBB" />
                            }
                            InputRightElement={
                                <Icon as={<Ionicons name={'md-options-outline'} />} size={7} mr="2" color="#378EF0" onPress={() => alert('hello')} />}
                            placeholder="Search artists" />
                    </View>
                </ImageBackground>
                <ScrollView horizontal style={{ marginTop: 40, paddingLeft: 15 }} >
                    <View style={{ flexDirection: "row" }} >
                        <View style={{ backgroundColor: "#378EF0", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20, marginRight: 10 }} ><Text style={{ color: "white" }} >Sales</Text></View>
                        <View style={{ borderColor: "#AEAEAE", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20, marginRight: 10 }} ><Text style={{ color: "#AEAEAE" }} >Listing</Text></View>
                        <View style={{ borderColor: "#AEAEAE", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20, marginRight: 10 }} ><Text style={{ color: "#AEAEAE" }} >Bids</Text></View>
                        <View style={{ borderColor: "#AEAEAE", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20, marginRight: 10 }} ><Text style={{ color: "#AEAEAE" }} >Transfers</Text></View>
                        <View style={{ borderColor: "#AEAEAE", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20, marginRight: 10 }} ><Text style={{ color: "#AEAEAE" }} >Transfers</Text></View>
                        <View style={{ borderColor: "#AEAEAE", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 20, marginRight: 10 }} ><Text style={{ color: "#AEAEAE" }} >Transfers</Text></View>
                    </View>
                </ScrollView>
                <View style={{ paddingHorizontal: 15, marginTop: 15 }} >
                    {[1, 2, 3, 4, 5, 6, 7].map((data, i) => (
                        <View key={i} style={{ backgroundColor: "#1A1A1A", padding: 15, borderColor: "#404040", borderWidth: 1, borderRadius: 10, marginVertical: 5 }} >
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <View style={{ position: "relative" }} >
                                        <Image style={{ height: 44, width: 44, borderColor: "#fff", borderWidth: 1, borderRadius: 22 }} source={require('../../common/assets/images/artist/artist2.png')} />
                                        <Image style={{ height: 18, width: 18, position: "absolute", bottom: 0, left: 30 }} source={require('../../common/assets/images/fantanknftmarketplace/verified.png')} />
                                    </View>
                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={{ fontWeight: "700", color: "#fff" }} >Niken Dewanil</Text>
                                        <Text style={{ fontSize: 12, color: "#CDCACA" }} >@cyberClub</Text>

                                        <TouchableWithoutFeedback onPress={() => setMoreDetails(i + 1)} >
                                            <Text style={{ fontSize: 12, color: "#378EF0", marginTop: 5 }} ><AntDesign name={moreDetails === i + 1 ? 'minus' : 'plus'} size={14} color="#378EF0" /> {moreDetails === i + 1 ? 'Less' : 'More'}</Text>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>

                                <View>

                                    <Text style={{ color: "#CDCACA", alignSelf: "flex-end" }} > List</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "flex-end" }} >
                                        <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                        <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff", marginLeft: 5 }} >220</Text>
                                    </View>
                                    <Text style={{ color: "#CDCACA", fontSize: 12 }} >  <Entypo name="back-in-time" size={17} color="#CDCACA" /> 10 sec ago</Text>
                                </View>

                            </View>

                            {moreDetails === i + 1 && (
                                <View>
                                    <View style={{ borderColor: "#696969", borderWidth: 0.5, marginVertical: 10 }} ></View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                                            <Text style={{ fontSize: 12, color: "#CDCACA", marginBottom: 5 }} >USD Price</Text>
                                            <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }} >$40.00</Text>
                                        </View>
                                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontSize: 12, color: "#CDCACA", marginBottom: 5 }} >Quantity</Text>
                                            <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }} >1</Text>
                                        </View>
                                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontSize: 12, color: "#CDCACA", marginBottom: 5 }} >From</Text>
                                            <Text style={{ fontSize: 14, color: "#378EF0" }} >@cyberClub</Text>
                                        </View>
                                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ fontSize: 12, color: "#CDCACA", marginBottom: 5 }} >To</Text>
                                            <Text style={{ fontSize: 14, fontWeight: "700", color: "#fff" }} >-----</Text>
                                        </View>

                                    </View>
                                </View>
                            )}
                        </View>

                    ))}

                </View>
            </ScrollView >
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },

    allTab: {
        fontSize: 16,
        color: "#5E5C61",
        borderColor: "#5E5C61",
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        marginHorizontal: 10

    },
    activeTab: {
        fontSize: 16,
        color: "#fff",
        backgroundColor: "#378EF0",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        marginHorizontal: 10

    }
})
