import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export const ForgotHeader = () => {
    return (
        <View style={{ alignSelf: "center", paddingVertical: 10 }} >
            <Image style={{ height: 41, width: 123 }} source={require('../../assets/images/logo-text.png')} />
        </View>
    )
}


const styles = StyleSheet.create({})