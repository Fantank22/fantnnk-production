import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import { AirbnbRating } from 'react-native-ratings';
import { Platform } from 'react-native';

export const ArtreneurTextReviews = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <View style={{ paddingHorizontal: 15 }} >
                    <View style={{ flexDirection: "row", justifyContent: 'flex-end', marginTop: 20, alignItems: "center" }} >
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 10, top: -10 }}>
                            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert('hello')} >
                            <Text style={{ color: "#fff", fontWeight: "700", borderColor: "#378EF0", borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10 }} >Submit review</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "#CACACA", marginTop: 10, marginBottom: 10 }} >Reviews (300)</Text>


                    <View style={{ backgroundColor: "#202020", padding: 10, borderRadius: 10, marginTop: 10 }} >
                        <Text style={{ marginBottom: 5 }} >
                            <AirbnbRating
                                count={5}
                                defaultRating={5}
                                size={20}
                                showRating={false}
                            />
                        </Text>
                        <Text style={{ fontSize: 16, color: "#fff", marginVertical: 5 }} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <Image style={{ height: 32, width: 32, borderColor: "#B6B6B6", borderWidth: 1, borderRadius: 16, marginRight: 10 }} source={require('../../common/assets/images/artist/artist2.png')} />
                                <View>
                                    <Text style={{ fontSize: 12, color: "#fff" }} >Jerome Bell</Text>
                                    <Text style={{ fontSize: 12, color: "#A6A6A6" }}>CEO of Monter Drinks</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: "#A6A6A6" }}>2 hours ago</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#202020", padding: 10, borderRadius: 10, marginTop: 10 }} >
                        <Text style={{ marginBottom: 5 }} >
                            <AirbnbRating
                                count={5}
                                defaultRating={5}
                                size={20}
                                showRating={false}
                            />
                        </Text>
                        <Text style={{ fontSize: 16, color: "#fff", marginVertical: 5 }} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <Image style={{ height: 32, width: 32, borderColor: "#B6B6B6", borderWidth: 1, borderRadius: 16, marginRight: 10 }} source={require('../../common/assets/images/artist/artist2.png')} />
                                <View>
                                    <Text style={{ fontSize: 12, color: "#fff" }} >Jerome Bell</Text>
                                    <Text style={{ fontSize: 12, color: "#A6A6A6" }}>CEO of Monter Drinks</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: "#A6A6A6" }}>2 hours ago</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#202020", padding: 10, borderRadius: 10, marginTop: 10 }} >
                        <Text style={{ marginBottom: 5 }} >
                            <AirbnbRating
                                count={5}
                                defaultRating={5}
                                size={20}
                                showRating={false}
                            />
                        </Text>
                        <Text style={{ fontSize: 16, color: "#fff", marginVertical: 5 }} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <Image style={{ height: 32, width: 32, borderColor: "#B6B6B6", borderWidth: 1, borderRadius: 16, marginRight: 10 }} source={require('../../common/assets/images/artist/artist2.png')} />
                                <View>
                                    <Text style={{ fontSize: 12, color: "#fff" }} >Jerome Bell</Text>
                                    <Text style={{ fontSize: 12, color: "#A6A6A6" }}>CEO of Monter Drinks</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: "#A6A6A6" }}>2 hours ago</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => alert('first')} >
                        <Text style={{ color: "#378EF0", marginVertical: 10, fontSize: 16 }} >Show older reviews ...</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <View style={{ position: "absolute", bottom: 0, width: "100%" }} >
                <View style={styles.headerTab}>
                    <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.activeTab} >
                        <Text style={{ color: "#378EF0", fontSize: 16, textAlign: "center" }} >Text Reviews</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ArtreneurVideoReviews')} style={styles.allTab} >
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }} >Video Reviews</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <Image
                style={styles.bgImage1}
                source={require('../../common/assets/images/3.png')}
            />
            <Image
                style={styles.bgImage2}
                source={require('../../common/assets/images/5.png')}
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
    rating: {
        backgroundColor: "red"
    },
    bgImage1: {
        position: "absolute",
        top: 40,
        right: 0,
        zIndex: -1000
    },
    bgImage2: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: -1000
    },
    headerTab: {
        flexDirection: "row",
        backgroundColor: "#1A1A1A",
        justifyContent: 'space-between'

    },
    allTab: {
        alignSelf: "center",
        paddingVertical: 20,
        width: "50%",
    },
    activeTab: {
        alignSelf: "center",
        paddingVertical: 20,
        borderTopColor: "#378EF0",
        borderTopWidth: 3,
        width: "50%",
    }
})
