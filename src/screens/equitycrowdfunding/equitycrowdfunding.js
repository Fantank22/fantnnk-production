import { FlatList, Image, ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import { Slider } from 'native-base'
import nikenDewanil from '../../common/assets/images/artist/nikenDewanil.png'
import albertFlores from '../../common/assets/images/artist/albertFlores.png'
import codyFisher from '../../common/assets/images/artist/codyFisher.png'
import darrellSteward from '../../common/assets/images/artist/darrellSteward.png'

const data = [
    {
        id: 1,
        name: "Niken Dewanil",
        image: nikenDewanil,
        catrgory: "Album & Tour",
        leftDay: '60',
        offering: "1,250,000"

    },
    {
        id: 2,
        name: "Albert Flores",
        image: albertFlores,
        catrgory: "Album & Tour",
        leftDay: '60',
        offering: "1,250,000"
    },
    {
        id: 3,
        name: "Cody Fisher",
        image: codyFisher,
        catrgory: "Album & Tour",
        leftDay: '60',
        offering: "1,250,000"
    },
    {
        id: 4,
        name: "Darrell Steward",
        image: darrellSteward,
        catrgory: "Album & Tour",
        leftDay: '60',
        offering: "1,250,000"
    },
]

export const EquityCrowdFunding = ({ navigation }) => {
    const [index, setIndex] = useState(1)
    const tab = ['Music', 'Art', 'Acting', 'Dance']
    const [onChangeValue, setOnChangeValue] = React.useState(50);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProjectDetails')} >
            <View style={{ backgroundColor: "#252525", paddingHorizontal: 15, paddingVertical: 15, borderRadius: 5, marginVertical: 10 }} >
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                    <View style={{ width: '30%' }} >
                        <Image style={{ width: "100%", height: 96, borderRadius: 5 }} source={item?.image} />
                    </View>
                    <View style={{ width: "65%", marginLeft: 15 }} >
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: "bold" }} >{item?.name}</Text>
                        <Text style={{ color: '#E0E0E0', fontSize: 12 }} >{item?.catrgory}</Text>
                        <Text style={{ color: '#E0E0E0', fontSize: 12, marginTop: 10 }} >${item?.offering} USD offering</Text>
                        <Slider w="100%" maxW="100%" defaultValue={onChangeValue} colorScheme="blue" size="lg" onChange={v => {
                            setOnChangeValue(Math.floor(v));
                        }}  >
                            <Slider.Track p={1.5} >
                                <Slider.FilledTrack py={1} my={.5} mx={.5} borderRadius={10} />
                            </Slider.Track>
                        </Slider>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                            <Text style={{ color: '#E0E0E0', fontSize: 12 }}>{onChangeValue}%</Text>
                            <Text style={{ color: '#E0E0E0', fontSize: 12 }}>{item?.leftDay} days left</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    const renderHeader = () => (
        <>
            <ImageBackground source={require('../../common/assets/images/equitycrowdfunding/bannerbg.png')} style={styles.bannerImage} >
                <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()} >
                    <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.title} >Equity Crowdfunding</Text>

            </ImageBackground>

            <View style={{ marginVertical: 20 }} >
                <ScrollView horizontal style={styles.tabContainer} >
                    {tab.map((d, i) => (
                        <TouchableOpacity onPress={() => setIndex(i + 1)} style={i + 1 === index ? styles.activeTab : styles.inActiveTab} key={i} >
                            <Text style={i + 1 === index ? { color: "#fff" } : { color: "#AEAEAE" }} >{d}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </>
    )



    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style='light' />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
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
    bannerImage: {
        height: 195,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    title: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "500"
    },
    backIcon: {
        position: "absolute",
        top: 20,
        left: 20
    },
    activeTab: {
        backgroundColor: "#378EF0",
        marginRight: 15,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 30
    },
    inActiveTab: {
        borderColor: "#AEAEAE",
        borderWidth: 1,
        marginRight: 15,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 30
    },
    tabContainer: {
        flexDirection: "row",
        marginLeft: 15,
        flexGrow: 0
    }
})