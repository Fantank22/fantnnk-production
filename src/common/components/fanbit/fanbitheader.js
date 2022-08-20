import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export const FanbitHeader = ({ title }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <MaterialIcons name="arrow-back-ios" size={21} color="white" />
            </TouchableOpacity>
            <Text style={styles.title} >{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "rgba(0, 0, 0, 0.35)"
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 15
    }
})