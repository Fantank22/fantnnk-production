import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Buttons, ServiceHeader } from '../../common/components'

export const Servicedetails = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style='light' />
            <ServiceHeader title={item.title} />
            <Image style={{ width: "100%", height: 174, marginTop: 20, marginHorizontal: 15, alignSelf: "center", borderRadius: 10 }} source={item.image} />
            <View style={{ marginHorizontal: 20, marginTop: 50 }} >
                <Text style={{ fontSize: 18, fontWeight: "600", color: "#fff", textAlign: "center", marginVertical: 10 }} >{item.title}</Text>
                <Text style={{ color: "#fff", textAlign: "center" }}>{item.description}</Text>
            </View>
            <View style={{ position: "absolute", bottom: 20, width: "100%" }} >
                <Buttons onPress={() => alert('ok')} title={item.btnTitle} style={{ marginHorizontal: 15 }} fillBtn />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 0 : 40
    }
})