import { Text, View, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import {
    fanbittransferred,
    friendRequest,
    investmentstats,
    newbadgeearned,
    newemailreceived,
    neweventfound,
    scoreupdated,
    yourbeingtracked
} from '../../common/assets/images/notification';
import { useState } from 'react';

const btnData = [
    {
        id: 1,
        title: "All",
        color: "#5C5C5C"
    },
    {
        id: 2,
        title: "Social",
        color: "#407FFF"
    },
    {
        id: 3,
        title: "Scouting",
        color: "#F36986"
    },
    {
        id: 4,
        title: "Artistry",
        color: "#F39B69"
    },

]
const notificationData = [
    {
        id: 1,
        title: "Friend request received",
        time: "1h ago",
        srtDtails: "New friend request",
        image: friendRequest,
        status: "unread"
    },
    {
        id: 2,
        title: "SS score updated ",
        time: "1h ago",
        srtDtails: "Scout score up 22%",
        image: scoreupdated,
        status: "unread"
    },
    {
        id: 3,
        title: "New badge earned",
        time: "1h ago",
        srtDtails: "Badge 5 earned",
        image: newbadgeearned,
        status: "read"
    },
    {
        id: 4,
        title: "Your being tracked",
        time: "1h ago",
        srtDtails: "your being tracked by user Kayne1111",
        image: yourbeingtracked,
        status: "read"

    },
    {
        id: 5,
        title: "Fanbit transferred",
        time: "1h ago",
        srtDtails: "500 Fanbit deposited in wallet",
        image: fanbittransferred,
        status: "read"
    },
    {
        id: 6,
        title: "New email received ",
        time: "1h ago",
        srtDtails: "New email received from user mikem7904",
        image: newemailreceived,
        status: "unread"
    },
    {
        id: 7,
        title: "Investment stats",
        time: "1h ago",
        srtDtails: "$20 deposited towards Artrepreneur ....",
        image: investmentstats,
        status: "unread"
    },

    {
        id: 8,
        title: "New event found",
        time: "1h ago",
        srtDtails: "New rap event in your radius",
        image: neweventfound,
        status: "unread"
    },


]

export const Notification = () => {
    const [data, setData] = useState(notificationData)

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => console.log(item)}
                style={[styles.notificationItem, { backgroundColor: item.status === 'unread' ? "#192A3C" : '#212121', }]} >
                <View style={styles.notificationItem2} >
                    <Image source={item.image} />
                    <View style={{ marginLeft: 15 }} >
                        <View style={styles.notificationContant} >
                            <Text style={styles.notificationTitle} >{item.title}</Text>
                            <Entypo name="dot-single" size={24} color="#C4C4C4" />
                            <Text style={styles.notificationTitle2} >1h ago</Text>
                        </View>
                        <Text style={styles.notificationTitle2} >{item.srtDtails}</Text>
                    </View>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={28} color="#378EF0" />
            </TouchableOpacity >
        )
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={{ marginLeft: 15, flexGrow: 0 }} horizontal  >
                {btnData.map((item, index) => (
                    <View key={index} style={[styles.headerButton, { backgroundColor: item.color }]} >
                        <Text style={[styles.btnText, { color: "#fff" }]} >{item.title}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.notificationContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={(item) => renderItem(item)}
                />
            </View>
        </SafeAreaView>
    )
}



