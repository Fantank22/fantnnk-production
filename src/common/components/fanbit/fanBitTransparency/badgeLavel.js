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
export const BadgeLavel = () => {
    const [index, setIndex] = useState(1)
    return (
        <View style={{ marginLeft: 15 }} >
            <Text style={styles.title}>Badge Level</Text>

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
            <View style={{ marginVertical: 20, marginRight: 15, alignSelf: "center" }} >
                <Image source={require('../../../assets/images/fanbit/badgeLavel.png')} />
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