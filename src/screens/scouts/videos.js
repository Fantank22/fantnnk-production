import { ImageBackground, Platform, StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';
import videos1 from '../../common/assets/images/scouts/video1.png'
import videos2 from '../../common/assets/images/scouts/video2.png'
import videos3 from '../../common/assets/images/scouts/video3.png'

export const Videos = ({ navigation }) => {
    const data = [
        {
            id: 1,
            image: videos1,
            title: "FanTank - How It Works",
            views: "19,210,251",
            date: "Jul  1, 2023"
        },
        {
            id: 2,
            image: videos2,
            title: "FanTank - How It Works",
            views: "19,210,251",
            date: "Jul  1, 2023"
        },
        {
            id: 3,
            image: videos3,
            title: "FanTank - How It Works",
            views: "19,210,251",
            date: "Jul  1, 2023"
        }
    ]

    return (
        <View style={styles.container}> 
            {/* <SafeAreaView style={styles.container}> */}
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => `key-${index}`}
                    ListHeaderComponent={() => (
                        <ImageBackground source={require('../../common/assets/images/scouts/StatsBanner.png')} style={{ height: 190, paddingHorizontal: 15 }} >
                            <View style={{ marginTop: Platform.OS === 'ios' ? 35 : 10, flexDirection: "row", alignItems: "center" }} >
                                <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                                    <AntDesign name="arrowleft" size={24} color="white" />
                                </TouchableWithoutFeedback>
                                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700", marginLeft: 15 }} >Videos</Text>
                            </View>

                            <View style={{ marginTop: Platform.OS === 'ios' ? 50 : 30, }} >
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }} >Watch Videos</Text>

                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} >
                                    <TouchableWithoutFeedback onPress={() => console.log('first')} >
                                        <View style={{ backgroundColor: "#fff", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginRight: 10 }} >
                                            <Text>FanTank</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={() => console.log('first')} >
                                        <View style={{ borderColor: "#AEAEAE", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginRight: 10 }} >
                                            <Text style={{ color: "#AEAEAE" }} >Scouting Opportunity</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={() => console.log('first')} >
                                        <View style={{ borderColor: "#AEAEAE", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginRight: 10 }} >
                                            <Text style={{ color: "#AEAEAE" }} >FanBit</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </ImageBackground>
                    )}
                    renderItem={({ item, index }) => (
                        <View style={{ marginVertical: 20,paddingHorizontal:5 }} >
                        <Image style={{ height: 217, width: "100%" }} source={item.image} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingHorizontal: 15 }} >
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }} >
                                <View style={{ height: 36, width: 36, backgroundColor: "#03A9F4", alignItems: "center", justifyContent: "center", borderRadius: 18 }} >
                                    <Image style={{ height: 22, width: 15 }} source={require('../../common/assets/images/logo.png')} />
                                </View>
                                <View style={{ marginLeft: 20 }} >
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >{item.title}</Text>
                                    <Text style={{ color: "#ccc", fontSize: 12 }} >{item.views} views • {item.date}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => console.log(item.id)} >
                                <Entypo name="dots-three-vertical" size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    )}
                />
            {/* </SafeAreaView> */}
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    }
})