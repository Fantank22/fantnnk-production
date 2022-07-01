import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ServiceHeader } from '../../common/components'
import { MaterialIcons } from '@expo/vector-icons';
import imageOne from '../../common/assets/images/informationtechnology/image1.png'
import imageTwo from '../../common/assets/images/informationtechnology/image2.png'
import imageThree from '../../common/assets/images/informationtechnology/image3.png'
import imageFour from '../../common/assets/images/informationtechnology/image4.png'


const myData = [
    {
        id: 1,
        image: imageOne,
        title: "Scouting I.T.",
        sortDes: "The FanTank Financing Marketplace provides the following financing services for Artists, Labels, and individual investors.",
        description: "Do you have an eye to spot talent? With FanTank's I.T. Solutions for Scouts we measure your skill at evaluating the next superstars. Our scouting dashboard is your central hub that monitors and provides you with real time feedback and visualization on your scout score trending, scout ranking, badge levels, and more. Influence your favorite art forms) and emerging artist in a cool new way.",
        feature: [
            {
                title: "Build Your Scout Score"
            },
            {
                title: "Win Contests & Promos "
            },
            {
                title: "Earn Badges"
            },
            {
                title: "Generate Income"
            }
        ]

    },
    {
        id: 2,
        image: imageTwo,
        title: "Artist I.T.",
        sortDes: "FanTank's I.T. Solutions for Artists is a central hub that monitors your content score trending and talent search engine ranking that is generated..... ",
        description: "FanTank's I.T. Solutions for Artists is a central hub that monitors your content score trending and talent search engine ranking that is generated from the collective intelligence of voting data received from Fans, Educators, Industry, Media, Brands, Behind The Scenes, other artists, and more. We measure the artistic pulse of the people and then fund your talent and dreams with no subjectivity!",
        feature: [
            {
                title: "Buzz Maps - shows where you have the most appeal visually and geographically across the World"
            },
            {
                title: "Comparative Rankings to other artists "
            },
            {
                title: `Track your progress towards being transformed into a "mini IPO" using our equity crowd funding services.`
            }
        ]

    },
    {
        id: 3,
        image: imageThree,
        title: "Brands & Advertisers",
        sortDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id ex sed justo efficitur ullamcorper. In blandit mi nec justo In blandit ..... ",
        description: "FanTank's I.T. Solutions for Artists is a central hub that monitors your content score trending and talent search engine ranking that is generated from the collective intelligence of voting data received from Fans, Educators, Industry, Media, Brands, Behind The Scenes, other artists, and more. We measure the artistic pulse of the people and then fund your talent and dreams with no subjectivity!",
        feature: [
            {
                title: "Build Your Scout Score"
            },
            {
                title: "Win Contests & Promos "
            },
            {
                title: "Earn Badges"
            },
            {
                title: "Generate Income"
            }
        ]

    },
    {
        id: 4,
        image: imageFour,
        title: "Enterprise Solutions",
        sortDes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id ex sed justo efficitur ullamcorper. In blandit mi nec justo In blandit ..... ",
        description: "FanTank's I.T. Solutions for Artists is a central hub that monitors your content score trending and talent search engine ranking that is generated from the collective intelligence of voting data received from Fans, Educators, Industry, Media, Brands, Behind The Scenes, other artists, and more. We measure the artistic pulse of the people and then fund your talent and dreams with no subjectivity!",
        feature: [
            {
                title: "Build Your Scout Score"
            },
            {
                title: "Win Contests & Promos "
            },
            {
                title: "Earn Badges"
            },
            {
                title: "Generate Income"
            }
        ]

    },
]

export const InformationTectnology = ({ navigation }) => {
    const rennderHeader = () => {
        return (
            <>
                <Image style={styles.bannerImage} source={require('../../common/assets/images/informationtechnology/topbanner.png')} />
                <Text style={styles.title} >Information Technology</Text>
            </>
        )
    }
    const renderItem = ({ item }) => {
        console.log(item.image);
        return (
            <View style={styles.itemContent} >
                <Image style={styles.itemImage} source={item.image} />
                <Text style={styles.itemTitle} >{item.title}</Text>
                <Text style={styles.sortDes} >{item.sortDes}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('InformationTectnologyDetails', { item: item })} >
                    <View style={styles.viewMoreBtn} >
                        <Text style={styles.viewMore} >View More</Text>
                        <MaterialIcons name="arrow-forward-ios" size={14} color="#378EF0" />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style='light' />
            <ServiceHeader title='Information Technology' />
            <FlatList
                data={myData}
                contentContainerStyle={{ marginHorizontal: 15 }}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => rennderHeader()}
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
        alignSelf: "center",
        marginVertical: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        marginVertical: 10
    },
    itemContent: {
        backgroundColor: "#1B1B1B",
        borderColor: "#3D3D3D",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginTop: 20
    },
    itemImage: {
        height: 210,
        width: "100%",
        borderRadius: 10,
        marginVertical: 10
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginVertical: 5

    },
    sortDes: {
        fontSize: 14,
        color: "#fff",
        marginVertical: 5
    },
    viewMore: {
        color: "#378EF0",
        marginRight: 5
    },
    viewMoreBtn: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5
    }
})