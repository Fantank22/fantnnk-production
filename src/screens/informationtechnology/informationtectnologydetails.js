import { Image, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ServiceHeader } from '../../common/components'



export const InformationTectnologyDetails = ({ route, navigation }) => {
    const { item } = route.params
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style='light' />
            <ServiceHeader title={item.title} />
            <ScrollView style={{ marginHorizontal: 15 }} >
                <Image style={styles.bannerImage} source={item.image} />
                <Text style={styles.title} >{item.title}</Text>
                <Text style={styles.description} >{item.description}</Text>
                {item.feature.map((d, i) => (
                    <Text key={i} style={styles.featureTitle} > {'\u2022'} {d.title}</Text>
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
    bannerImage: {
        height: 210,
        width: "100%",
        borderRadius: 10,
        marginVertical: 20
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        color: "#fff",
        marginVertical: 10
    },
    description: {
        fontSize: 14,
        color: "#fff",
        marginVertical: 5
    },
    featureTitle: { fontSize: 14, color: "#fff", marginHorizontal: 10, fontWeight: "600", marginVertical: 10 }

})