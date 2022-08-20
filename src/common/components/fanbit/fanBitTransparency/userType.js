import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'


export const UserType = () => {
    return (
        <View style={{ marginLeft: 15 }} >
            <Text style={styles.title}>User Type</Text>


            <View style={{ marginVertical: 20, marginRight: 15, alignSelf: "center" }} >
                <Image source={require('../../../assets/images/fanbit/userType.png')} />
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