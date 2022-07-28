import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RegularInvestments } from './regularinvestments'
import { ArtrepreneurInvestments } from './artrepreneurinvestments'

export const CustomInvestTab = () => {
    const [index, setIndex] = useState(1)
    const regularInvests = <RegularInvestments />
    const artrepreneurInvests = <ArtrepreneurInvestments />

    const tab = ['Regular Investments', 'Artrepreneur Investments']
    const contant = [regularInvests, artrepreneurInvests]

    return (
        <>
            <View style={styles.container} >
                {tab.map((d, i) => (
                    <TouchableOpacity key={i} onPress={() => setIndex(i + 1)} style={i + 1 === index ? styles.activeTab : styles.allTab} >
                        <Text style={i + 1 === index ? styles.activeText : styles.allText} >{d}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View>
                {contant.map((d, i) => (
                    <View key={i}>
                        {i + 1 === index && <>{d}</>}
                    </View>
                ))}
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#2F2F2F",
        padding: 5,
        borderRadius: 30,
        marginVertical: 10
    },
    allTab: {
        backgroundColor: "transparent",
        padding: 15
    },
    activeTab: {
        backgroundColor: "#378EF0",
        padding: 15,
        borderRadius: 30
    },
    allText: {
        color: "#9C9A9A", fontSize: 12, fontWeight: "500"
    },
    activeText: {
        color: "#fff", fontSize: 12, fontWeight: "500"
    }
})