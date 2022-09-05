import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import { TextArea } from 'native-base'
import { Buttons } from "../../common";
import { Platform } from 'react-native'

export const SubmitQuestion = () => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="light" />
            <ImageBackground source={require('../../common/assets/images/artrepreneurrep/submitQuestionbg.png')} style={{ height: 160, paddingHorizontal: 15, paddingTop: 10 }} >
                <Text style={{ color: "white" }} > <MaterialIcons name="arrow-back-ios" size={24} color="white" /></Text>
            </ImageBackground>
            <View style={{ paddingHorizontal: 15 }} >
                <View style={{ marginTop: '15%' }} >
                    <Text style={{ fontSize: 22, color: "#fff", fontWeight: "700", alignSelf: "center" }} > Submit your question</Text>
                    <Text style={{ fontSize: 14, color: "#fff", alignSelf: "center" }} > We will reach out as soon as possible</Text>
                </View>
                <View style={{ alignSelf: "center", marginTop: '15%' }} >
                    <Text style={{ fontSize: 12, color: "#e0e0e0", marginBottom: 10 }} >Message</Text>
                    <TextArea selectionColor={'#fff'} h={40} placeholder="Enter your question description" borderRadius={10} paddingLeft={4} color={'#fff'} paddingTop={3} borderWidth={0} backgroundColor={'#252525'} w="100%" _light={{
                        placeholderTextColor: "#9C9A9A"
                    }} _dark={{
                        bg: "coolGray.200"
                    }} _hover={{
                        bg: "coolGray.200"
                    }} />
                </View>
                <View style={{ marginTop: '15%' }}>
                    <TouchableOpacity onPress={() => alert('hello2')} >
                        <Buttons title={'Submit'} fillBtn={true} />
                    </TouchableOpacity>
                </View>

            </View>


            <Image
                style={styles.bgImage1}
                source={require('../../common/assets/images/3.png')}
            />
            <Image
                style={styles.bgImage2}
                source={require('../../common/assets/images/5.png')}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 0 : 40
    },
    bgImage1: {
        position: "absolute",
        top: 40,
        right: 0,
        zIndex: -1000
    },
    bgImage2: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: -1000
    }
})
