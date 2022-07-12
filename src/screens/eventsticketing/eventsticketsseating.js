import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EventHeader } from '../../common'
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';



export const EventsTicketsSeating = ({ route, navigation }) => {
    const { data } = route.params
    return (
        <SafeAreaView style={styles.container} >
            <EventHeader title={"Seat Booking"} />

            <ScrollView>
                <View style={{ margin: 20, padding: 20, backgroundColor: "#1A1A1A", borderRadius: 5 }} >
                    <Image style={{ height: 164, width: "100%", borderRadius: 5, resizeMode: "stretch" }} source={require('../../common/assets/images/eventsticketing/seatbooking2.png')} />

                    <Text style={{ fontSize: 16, color: "#fff", marginVertical: 10, textAlign: "center" }}>{data.title}</Text>
                    <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "center", marginVertical: 5, marginHorizontal: 10 }} >
                        <EvilIcons name="location" size={24} color="#B7B7B7" />
                        <Text style={{ fontSize: 14, color: "#B7B7B7", textAlign: "center", marginLeft: 10 }}>{data.address}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 5, marginHorizontal: 10 }} >
                        <Ionicons name="time-outline" size={24} color="#B7B7B7" />
                        <Text style={{ fontSize: 14, color: "#B7B7B7", textAlign: "center", marginLeft: 10 }}>{data.day} , {data.date} , {data.time}</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 10 }} >
                    <Image style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height / 3 }} source={require('../../common/assets/images/eventsticketing/seatbooking.png')} />
                </View>


                {[1, 2, 3].map((d, i) => (
                    <View key={i} style={{ marginHorizontal: 15, position: "relative" }} >
                        <View style={{ flexDirection: "row", backgroundColor: "#1A1A1A", padding: 15, marginVertical: 10, borderRadius: 10, width: "100%" }} >
                            <View style={{ width: "25%" }} >
                                <View style={{ backgroundColor: "#000", padding: 10, borderRadius: 5, alignItems: "center" }} >
                                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", marginBottom: 10 }} >$9/ea</Text>
                                    <AntDesign name="copy1" size={24} color="#4051DF" />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingLeft: 10, width: "70%" }} >
                                <View>
                                    <Text style={{ color: "#fff", fontSize: 16, }} >Lower 16</Text>
                                    <Text style={{ color: "#B7B7B7", fontSize: 14, marginTop: 5 }} >Row E</Text>
                                    <Text style={{ color: "#B7B7B7", fontSize: 14, marginTop: 5 }} >1-10 or 12 tickets</Text>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('TicketsOrderSummary', { data: data })} style={{ backgroundColor: "#378EF0", paddingHorizontal: 25, paddingVertical: 10, borderRadius: 20 }} >
                                    <Text style={{ color: "#fff" }}>Buy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: "#000", position: "absolute", top: "37%", left: -20 }} />
                        <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: "#000", position: "absolute", top: "37%", right: -20 }} />
                        <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: "#000", position: "absolute", top: "37%", left: -20 }} />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 0 : 40
    },
})