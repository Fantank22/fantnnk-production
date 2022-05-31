import { View, Text, StyleSheet, ImageBackground, Platform, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, MaterialIcons } from '@expo/vector-icons'

export const TalentBookingService = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView style={{}} >
                <ImageBackground source={require('../../common/assets/images/search/TalentBookingService.png')} style={{ height: 216, paddingHorizontal: 15 }} >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <View style={{ marginTop: Platform.OS === "ios" ? 50 : 40 }} >
                            <MaterialIcons name="keyboard-arrow-left" size={Platform.OS === "ios" ? 30 : 24} color="#fff" />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: "#fff", fontSize: 22, textAlign: "center", marginTop: 30 }} >Talent Booking Service</Text>
                </ImageBackground>

                <View style={{ paddingHorizontal: 15 }} >
                    <View style={{ paddingHorizontal: 50, marginVertical: 20 }} >
                        <Text style={{ color: "#D0D0D0", textAlign: "center" }} >FanTank’s talent booking services assist its clients & mobile application users in finding the right artistic talent for their events no matter the type. If you don’t have the time for this process</Text>
                    </View>

                    <View style={{ backgroundColor: "#161616", marginVertical: 20, padding: 15, borderRadius: 10 }} >
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", textAlign: "center", paddingHorizontal: 30, marginVertical: 20 }} >The FanTank Talent Booking Specialist Role</Text>
                        <View style={{ flexDirection: "row", alignItems: "flex-start", marginVertical: 10 }} >
                            <Feather name="check-circle" size={24} color="#66E347" />
                            <Text style={{ color: "#D2D2D2", marginLeft: 10, marginRight: 20 }}> Recommend a full curated artist listing with
                                <TouchableOpacity onPress={() => navigation.navigate('IntakeQuestionnaire')} >
                                    <Text style={{ color: "#378EF0",marginLeft:5 }} >applicable data</Text>
                                </TouchableOpacity>
                                , links, press kits (if applicable) and more to help you locate the talent needed   </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "flex-start", marginVertical: 10 }} >
                            <Feather name="check-circle" size={24} color="#66E347" />
                            <Text style={{ color: "#D2D2D2", marginLeft: 10, marginRight: 20 }}> Assistance with the signing of legal agreement between parties</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "flex-start", marginVertical: 10 }} >
                            <Feather name="check-circle" size={24} color="#66E347" />
                            <Text style={{ color: "#D2D2D2", marginLeft: 10, marginRight: 20 }}> Assistance with the signing of legal agreement between parties</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Search3')} >
                            <View style={{ backgroundColor: "#378EF0", paddingVertical: 15, borderRadius: 10, marginTop: 20 }} >
                                <Text style={{ fontSize: 16, color: "#fff", textAlign: "center" }} >Book Service </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        marginBottom: Platform.OS === "ios" ? 50 : 20
    }
})

