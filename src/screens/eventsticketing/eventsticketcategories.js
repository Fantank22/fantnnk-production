import { FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EventHeader } from '../../common'
import musicImage from '../../common/assets/images/eventsticketing/music.png'
import artImnage from '../../common/assets/images/eventsticketing/art.png'
import comadyImage from '../../common/assets/images/eventsticketing/comedy.png'
import danceImage from '../../common/assets/images/eventsticketing/dance.png'
import fashionImage from '../../common/assets/images/eventsticketing/fashiondesign.png'
import flimImage from '../../common/assets/images/eventsticketing/flimdirecting.png'
import melodyImage from '../../common/assets/images/eventsticketing/meloding.png'
import actingImage from '../../common/assets/images/eventsticketing/acting.png'
import writingImage from '../../common/assets/images/eventsticketing/writing.png'
import musicProductionImage from '../../common/assets/images/eventsticketing/musicProduction.png'
import musianshipImage from '../../common/assets/images/eventsticketing/musicianship.png'


const data = [
    {
        id: 1,
        title: "Music",
        image: musicImage,
        color: "#4051DF"
    },
    {
        id: 2,
        title: "Art",
        image: artImnage,
        color: "#7900FF"
    },
    {
        id: 3,
        title: "Comedy",
        image: comadyImage,
        color: "#23CD14"
    },
    {
        id: 4,
        title: "Dance",
        image: danceImage,
        color: "#FECD1A"
    },
    {
        id: 5,
        title: "Fashion Design",
        image: fashionImage,
        color: "#C400FF"
    },
    {
        id: 6,
        title: "Film Directing",
        image: flimImage,
        color: "#4051DF"
    },
    {
        id: 7,
        title: "Modeling",
        image: melodyImage,
        color: "#DB6B97"
    },
    {
        id: 8,
        title: "Acting",
        image: actingImage,
        color: "#FF7F3F"
    },
    {
        id: 9,
        title: "Writers & Books Publishing",
        image: writingImage,
        color: "#fff"
    },
    {
        id: 10,
        title: "Music Production Studio",
        image: musicProductionImage,
        color: "#DF4040"
    },
    {
        id: 11,
        title: "Musianship",
        image: musianshipImage,
        color: "#FF7F3F"
    },
]


export const EventsTicketCategories = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('EventsGetTickets', { title: item.title })} style={{ width: "48%", marginTop: 20, borderBottomColor: item.color, borderBottomWidth: 5, borderRadius: 5 }} >
                <Image style={{ height: 135, width: '100%' }} source={item.image} resizeMode='stretch' />
                <View style={{ backgroundColor: "#1A1A1A", paddingVertical: 15, }} >
                    <Text style={{ color: "#fff", textAlign: "center" }} > {item.title}</Text>
                </View>

            </TouchableOpacity>
        );
    };


    return (
        <SafeAreaView style={styles.container} >
            <EventHeader title={'Buy Tickets'} />

            <FlatList
                contentContainerStyle={{ marginHorizontal: 15 }}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={renderItem}
                ListHeaderComponent={() => (
                    <View>
                        <View style={{ marginHorizontal: 15, alignSelf: "center", marginTop: 20 }} >
                            <Image style={{ height: 344, width: 344 }} source={require('../../common/assets/images/eventsticketing/categoriesBanner.png')} />
                        </View>
                        <View style={{ marginHorizontal: 15 }} >
                            <Text style={styles.title} >Categories</Text>
                        </View>
                    </View>
                )}

            />




        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingTop: Platform.OS === 'ios' ? 0 : 40
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff"
    }
})