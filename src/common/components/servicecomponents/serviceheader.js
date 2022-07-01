import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const ServiceHeader = ({ title }) => {
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
        borderBottomColor: "#252525",
        borderBottomWidth: 1,
        paddingBottom:20
    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 15
    }
})