import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import badge1 from '../../../assets/images/badge/badge1.png'
import badge2 from '../../../assets/images/badge/badge2.png'
import badge3 from '../../../assets/images/badge/badge3.png'
import badge4 from '../../../assets/images/badge/badge4.png'
import badge5 from '../../../assets/images/badge/badge5.png'
import badge6 from '../../../assets/images/badge/badge6.png'
import badge7 from '../../../assets/images/badge/badge7.png'
import badge8 from '../../../assets/images/badge/badge8.png'
import badge9 from '../../../assets/images/badge/badge9.png'
import badge10 from '../../../assets/images/badge/badge10.png'

const badges = [
    {
        id: 1,
        image: badge1
    },
    {
        id: 2,
        image: badge2
    },
    {
        id: 3,
        image: badge3
    },
    {
        id: 4,
        image: badge4
    },
    {
        id: 5,
        image: badge5
    },
    {
        id: 6,
        image: badge6
    },
    {
        id: 7,
        image: badge7
    },
    {
        id: 8,
        image: badge8
    },
    {
        id: 9,
        image: badge9
    },
    {
        id: 10,
        image: badge10
    },
]
export const LeaderBoard = () => {
    const [index, setIndex] = useState(1)
    return (
        <View style={{ marginLeft: 15 }} >
            <Text style={styles.title}>LeaderBoard </Text>

            <ScrollView horizontal style={{ flexGrow: 0 }} >
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    {badges.map((d, i) => (
                        <TouchableOpacity onPress={() => setIndex(i + 1)} key={i} style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
                            <Image style={i + 1 === index ? styles.activeBadge : styles.inactiveBadges} source={d.image} />
                            {i + 1 === index && <View
                                style={{
                                    height: 8,
                                    width: 8,
                                    backgroundColor: i + 1 <= 3 ? "#0FD2BA" : i + 1 <= 6 ? "#032F6E" : i + 1 <= 9 ? "#AB8A1A" : "#870B67",
                                    borderRadius: 5,
                                    marginTop: -15
                                }} />}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View style={{ marginTop: 20, marginRight: 15 }} >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => (
                    <TouchableOpacity key={i} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 20, position: "relative" }} >
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#E2DEDE" }}>{i + 1}</Text>
                            <Image style={{ height: 42, width: 42, borderRadius: 21, borderColor: "#fff", borderWidth: 1, marginLeft: 15 }} source={require('../../../assets/images/artist/artist1.png')} />
                            <View style={{ marginLeft: 10, marginLeft: 15 }} >
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Text style={{ fontWeight: "500", color: "#E4E4E4", }} >Eleanor Pena</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14, color: "#B8B8B8" }} >Fan</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ position: "absolute", right: 0, flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff", marginRight: 8 }} >2000</Text>
                            <Image style={{ height: 11, width: 11 }} source={require('../../../assets/images/artistlist/fitbit-token.png')} />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        color: "#E6E6E6",
        fontSize: 18,
        fontWeight: "500",
        marginTop: 20

    },
    activeBadge: {
        height: 80, width: 80
    },
    inactiveBadges: {
        height: 60, width: 50
    }
})