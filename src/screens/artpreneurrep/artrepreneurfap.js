import { View, Text, StyleSheet, ImageBackground, Image, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';

const data = [
    {
        id: 1,
        question: "Where can I watch ?",
        answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. "
    },
    {
        id: 2,
        question: "Mauris id nibh eu fermentum mattis purus ?",
        answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. "
    },
    {
        id: 3,
        question: "Mauris id nibh eu fermentum mattis purus ?",
        answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. "
    },
    {
        id: 4,
        question: "Mauris id nibh eu fermentum mattis purus ?",
        answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. "
    },
    {
        id: 5,
        question: "Mauris id nibh eu fermentum mattis purus ?",
        answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. "
    },
    {
        id: 6,
        question: "Mauris id nibh eu fermentum mattis purus ?",
        answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. "
    },
]


export const ArtrepreneorFaq = ({ navigation }) => {
    const [index, setIndex] = useState(1)

    return (
        <View style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/artrepreneurrep/needHelpbg.png')} style={{ height: 139, marginTop: 35, paddingHorizontal: 15, paddingTop: 10 }} >
                    <Text style={{ color: "white" }} > <MaterialIcons name="arrow-back-ios" size={24} color="white" /></Text>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700", alignSelf: "center", marginTop: 25 }} >Frequently Asked Questions</Text>




                    <TouchableOpacity
                        onPress={() => navigation.navigate('SubmitQuestion')}
                        style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', backgroundColor: "#252525", width: '75%', alignSelf: "center", padding: 10, borderColor: "#414141", borderWidth: 1, borderRadius: 10, marginTop: 25 }} >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../../common/assets/images/artrepreneurrep/helpIcon.png')} />
                            <Text style={{ fontSize: 16, color: "#fff", marginHorizontal: 10 }} >Submit a question</Text>
                        </View>
                        <View style={{ backgroundColor: "#378EF0", height: 30, width: 30, borderRadius: 15, justifyContent: "center", alignItems: "center" }} >
                            <MaterialIcons name="arrow-forward-ios" size={15} color="#eeeeee" />
                        </View>
                    </TouchableOpacity>



                </ImageBackground>


                <View style={{ marginTop: 50, paddingHorizontal: 15, paddingBottom: 20 }}>
                    {/* <Text style={{ color: "#fff", fontSize: 18, borderBottomColor: "#696969", borderWidth: 1, paddingBottom: 10 }} >Frequently Asked Questions</Text> */}


                    {data.map((d, i) => (
                        <View key={i} style={{ paddingHorizontal: 15, borderBottomColor: "#696969", borderWidth: 1, marginVertical: 5 }} >


                            <TouchableOpacity style={styles.rowItem} onPress={() => setIndex(i + 1)} >
                                <Text style={{ color: "#fff", fontSize: 16, lineHeight: 20 }} >{d.question}</Text>
                                {i + 1 === index && <Entypo name="cross" size={24} color="red" />}
                                {i + 1 !== index && <Entypo name="plus" size={24} color="white" />}

                            </TouchableOpacity>


                            {i + 1 === index && <Text style={{ color: "#fff", marginVertical: 15, lineHeight: 20 }} >Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </Text>}
                        </View>
                    ))}

                </View>
            </ScrollView>
            <Image
                style={styles.bgImage1}
                source={require('../../common/assets/images/3.png')}
            />
            <Image
                style={styles.bgImage2}
                source={require('../../common/assets/images/5.png')}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        position: 'relative'
    },
    rowItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
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
