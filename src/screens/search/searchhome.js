import { View, Text, StyleSheet, ImageBackground, Platform, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, FontAwesome5, EvilIcons } from '@expo/vector-icons'

export const SearchHome = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView style={{ paddingHorizontal: 15 }} >
                <ImageBackground source={require('../../common/assets/images/search/searchHomeBanner.png')} style={{ height: 184, paddingHorizontal: 20 }} >
                    <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginTop: 40 }} >
                        <FontAwesome5 style={{ marginRight: 10 }} name="user-circle" size={23} color="#fff" />
                        <Feather name="bell" size={23} color="#fff" />
                    </View>
                    <Text style={{ color: "#fff", fontSize: 22, textAlign: "center", marginTop: 10 }} >Talent & Scout Search</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search2')} >
                        <View style={{ backgroundColor: "#2B2B2B", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, marginTop: 30, alignItems: "center", justifyContent: "space-between" }} >
                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <EvilIcons name="search" size={24} color={'#C5BBBB'} />
                                <Text style={{ color: "#C5BBBB", fontSize: 12, marginLeft: 10 }} >Artists, Scouts, Art Forms, etc</Text>
                            </View>
                            <Feather name="filter" size={24} color={'#C5BBBB'} />
                        </View>
                    </TouchableOpacity>

                    {/* <Input
                        color={"#fff"}
                        marginTop={5}
                        borderRadius={10}
                        borderWidth={0}
                        fontSize={Platform.OS === 'ios' ? 16 : 14}
                        paddingTop={Platform.OS === 'ios' ? 4 : 0}
                        paddingBottom={Platform.OS === 'ios' ? 4 : 0}
                        backgroundColor={'#2A2A2A'} w={{ base: "100%", md: "25%" }}
                        InputLeftElement={<Icon as={<EvilIcons name="search" />} size={7} ml="3" color="muted.300" />}
                        InputRightElement={<Icon as={<Feather name="filter" />} size={5} mr="3" color="muted.300" />}
                        placeholder="artists, scouts, geographies, etc" /> */}
                </ImageBackground>
                <View style={{ marginTop: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }} >
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }} >Explore Art Forms</Text>
                        <Text style={{ fontSize: 15, color: "#fff" }} >view all</Text>
                    </View>
                    <ScrollView horizontal style={{ marginVertical: 20 }} >
                        <ImageBackground source={require('../../common/assets/images/search/music.png')} style={{ height: 188, width: 160, justifyContent: "flex-end", marginRight: 20 }} >
                            <Text style={{ color: "#fff", fontSize: 16, alignSelf: "center", marginBottom: 10 }} > Music</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../../common/assets/images/search/art.png')} style={{ height: 188, width: 160, justifyContent: "flex-end", marginRight: 20 }} >
                            <Text style={{ color: "#fff", fontSize: 16, alignSelf: "center", marginBottom: 10 }} > Art</Text>
                            <View style={{ backgroundColor: "#5D5FEF", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15, width: "70%", position: "absolute", alignSelf: "center", top: "40%" }} >
                                <Text style={{ color: "#fff", fontSize: 12 }} >Coming Soon</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../common/assets/images/search/art.png')} style={{ height: 188, width: 160, justifyContent: "flex-end", marginRight: 20 }} >
                            <Text style={{ color: "#fff", fontSize: 16, alignSelf: "center", marginBottom: 10 }} > Music</Text>
                            <View style={{ backgroundColor: "#5D5FEF", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15, width: "70%", position: "absolute", alignSelf: "center", top: "40%" }} >
                                <Text style={{ color: "#fff", fontSize: 12 }} >Coming Soon</Text>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </View>
                <View style={{ marginTop: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }} >
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }} >Top Trending Scouts</Text>
                        <Text style={{ fontSize: 15, color: "#fff" }} >view all</Text>
                    </View>
                    <ScrollView horizontal style={{ marginVertical: 20 }} >
                        <View style={{ flexDirection: "column", alignItems: "center", marginRight: 15 }} >
                            <Image style={{ height: 74, width: 75, borderRadius: 40 }} source={require('../../common/assets/images/artist/artist2.png')} />
                            <Text style={{ fontSize: 12, color: "#fff", marginTop: 10 }} >Niken Dewanil</Text>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center", marginRight: 15 }} >
                            <Image style={{ height: 74, width: 75, borderRadius: 40 }} source={require('../../common/assets/images/artist/artist3.png')} />
                            <Text style={{ fontSize: 12, color: "#fff", marginTop: 10 }} >Wade Warren</Text>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center", marginRight: 15 }} >
                            <Image style={{ height: 74, width: 75, borderRadius: 40 }} source={require('../../common/assets/images/artist/artist4.png')} />
                            <Text style={{ fontSize: 12, color: "#fff", marginTop: 10 }} >Jenny Wilson</Text>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center", marginRight: 15 }} >
                            <Image style={{ height: 74, width: 75, borderRadius: 40 }} source={require('../../common/assets/images/artist/artist5.png')} />
                            <Text style={{ fontSize: 12, color: "#fff", marginTop: 10 }} >Ronald Richards</Text>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center", marginRight: 15 }} >
                            <Image style={{ height: 74, width: 75, borderRadius: 40 }} source={require('../../common/assets/images/artist/artist6.png')} />
                            <Text style={{ fontSize: 12, color: "#fff", marginTop: 10 }} >Niken Dewanil</Text>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center", marginRight: 15 }} >
                            <Image style={{ height: 74, width: 75, borderRadius: 40 }} source={require('../../common/assets/images/artist/artist7.png')} />
                            <Text style={{ fontSize: 12, color: "#fff", marginTop: 10 }} >Niken Dewanil</Text>
                        </View>
                        <View style={{ flexDirection: "column", alignItems: "center", marginRight: 15 }} >
                            <Image style={{ height: 74, width: 75, borderRadius: 40 }} source={require('../../common/assets/images/artist/artist8.png')} />
                            <Text style={{ fontSize: 12, color: "#fff", marginTop: 10 }} >Niken Dewanil</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ marginTop: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }} >
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }} >Top Trending Artists</Text>
                        <Text style={{ fontSize: 15, color: "#fff" }} >view all</Text>
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }} >
                        <View style={{ width: "48%", marginVertical: 10 }} >
                            <Image style={{ width: '100%', height: 208, borderRadius: 10 }} source={require('../../common/assets/images/home/artist1.png')} />
                        </View>
                        <View style={{ width: "48%", marginVertical: 10 }} >
                            <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist2.png')} />
                        </View>
                        <View style={{ width: "48%", marginVertical: 10 }} >
                            <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist3.png')} />
                        </View>
                        <View style={{ width: "48%", marginVertical: 10 }} >
                            <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist4.png')} />
                        </View>
                        <View style={{ width: "48%", marginVertical: 10 }} >
                            <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist5.png')} />
                        </View>
                        <View style={{ width: "48%", marginVertical: 10 }} >
                            <Image style={{ width: '100%', borderRadius: 10 }} source={require('../../common/assets/images/home/artist6.png')} />
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#161616", marginVertical: 20, padding: 15, borderRadius: 10 }} >
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", textAlign: "center", paddingHorizontal: 30 }} >Our FanTank Talent Booking Services</Text>
                    <View style={{ flexDirection: "row", alignItems: "flex-start", marginVertical: 10 }} >
                        <Feather name="check-circle" size={24} color="#66E347" />
                        <Text style={{ color: "#D2D2D2", marginLeft: 10, marginRight: 10 }}> No Time to Search, Book, and Contract artists for your special event?  </Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "flex-start", marginVertical: 10 }} >
                        <Feather name="check-circle" size={24} color="#66E347" />
                        <Text style={{ color: "#D2D2D2", marginLeft: 10, marginRight: 10 }}> Contact our booking services where we  help you find & contract the right artists for event.</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('TalentBookingService')} >
                        <View style={{ backgroundColor: "#378EF0", paddingVertical: 15, borderRadius: 10, marginTop: 10 }} >
                            <Text style={{ fontSize: 16, color: "#fff", textAlign: "center" }} >Book Service </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        marginBottom: Platform.OS === "ios" ? 50 : 20
    }
})
