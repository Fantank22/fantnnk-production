import { ImageBackground, Platform, StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';

export const FanbitToken = ({ navigation }) => {


    return (
        <View style={styles.container} >
            <SafeAreaView >

                <ScrollView>
                    <ImageBackground source={require('../../common/assets/images/scouts/fanbitbanner.png')} style={{ height: 170, paddingHorizontal: 15 }} >
                        <View style={{ marginTop: Platform.OS === 'ios' ? 20 : 40, flexDirection: "row", alignItems: "center" }} >
                            <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                                <AntDesign name="arrowleft" size={24} color="white" />
                            </TouchableWithoutFeedback>
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700", marginLeft: 15 }} >Fanbit</Text>
                        </View>
                    </ImageBackground>
                    <View style={{ marginTop: -10, paddingHorizontal: 15 }} >
                        <Text style={{ fontSize: 24, color: "#fff", fontWeight: "500", textAlign: "center" }} >What is a FanBit?</Text>
                        <View style={{ alignItems: "center", marginVertical: 10 }} >
                            <Image source={require('../../common/assets/images/scouts/3D-Coin.png')} />
                        </View>
                        <View style={{ paddingHorizontal: 30, marginBottom: 20 }} >
                            <Text style={{ fontSize: 15, color: "#fff", textAlign: "center", lineHeight: 25 }} >
                                FanBit is the ecosystem's non security utility token that circulates through it on Blockchain Architecture as the medium for talent voting, data measurement,  commerce, and talent scouting commissions
                            </Text>
                        </View>
                        <View style={{ padding: 20, backgroundColor: "#252525", borderRadius: 10, marginTop: 20 }} >
                            <Text style={{ fontSize: 16, color: "#fff", textAlign: "center" }} >Skill at spotting artistic talent & careful management of tokens helps determine your badge level</Text>
                            <TouchableOpacity>
                                <View style={{ borderColor: "#378EF0", borderWidth: 1, alignSelf: "center", paddingVertical: Platform.OS === 'ios' ? 20 : 10, paddingHorizontal: 30, borderRadius: 5, marginTop: 20, marginBottom: 10 }} >
                                    <Text style={{ color: "#378EF0", fontSize: 16, fontWeight: "600" }} >Purchase FanBit Now</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    }
})