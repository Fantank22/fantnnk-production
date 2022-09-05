import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const ExploreMusic = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
            <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/notable.png')} style={{ width: 163, height: 184.4, justifyContent: "space-between", padding: 10 }} >
                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                <View>
                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                    </View>
                </View>
            </ImageBackground>
            <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/musicArtist1.png')} style={{ width: 163, height: 184.4, justifyContent: "space-between", padding: 10 }} >
                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} ><Ionicons name="heart-outline" size={20} color="white" /></View>
                <View>
                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}

export default ExploreMusic