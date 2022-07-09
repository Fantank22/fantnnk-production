import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EventHeader } from '../../common'
import { AntDesign, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

export const EventsTicketsSeating = ({ route, navigation }) => {
    const { data } = route.params
    console.log(data)
    return (
        <SafeAreaView style={styles.container} >
            <EventHeader title={"Seat Booking"} />

            <View style={{ margin: 20, padding: 20, backgroundColor: "#1A1A1A", borderRadius: 5 }} >
                <Image style={{ height: 164, width: "100%", borderRadius: 5, resizeMode: "stretch" }} source={require('../../common/assets/images/eventsticketing/seatbooking2.png')} />

                <Text style={{ fontSize: 16, color: "#fff", marginVertical: 10, textAlign: "center" }}>Niken Dewanil Performs  </Text>
                <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "center", marginVertical: 5 }} >
                    <EvilIcons name="location" size={24} color="#B7B7B7" />
                    <Text style={{ fontSize: 14, color: "#B7B7B7", textAlign: "center", marginLeft: 10 }}>Club Mint / 2323 Olympic Blvd.,
                        Los Angeles, CA. 90210</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 5 }} >
                    <Ionicons name="time-outline" size={24} color="#B7B7B7" />
                    <Text style={{ fontSize: 14, color: "#B7B7B7", textAlign: "center", marginLeft: 10 }}>Friday , January 7  11:30pm</Text>
                </View>
            </View>
            <Image style={{ width: "100%" }} source={require('../../common/assets/images/eventsticketing/seatbooking.png')} />


            <View style={{ flexDirection: "row", backgroundColor: "#1A1A1A", padding: 10, marginTop: 10, borderRadius: 10, width: "100%" }} >
                <View style={{ width: "25%" }} >
                    <View style={{ backgroundColor: "#000", padding: 10, borderRadius: 5, alignItems: "center" }} >
                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", marginBottom: 10 }} >$9/ea</Text>
                        <AntDesign name="copy1" size={24} color="#4051DF" />
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingLeft: 10, width: "70%" }} >
                    <View>
                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }} >dsfdsfdsfds</Text>
                        <Text style={{ color: "#fff", fontSize: 12, marginTop: 10 }} >dsfdsfdsfsdf</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={21} color="white" />
                    </View>
                </View>
            </View>

            <Text  >EventsTicketsSeating</Text>
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