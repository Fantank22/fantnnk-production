import { FlatList, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackendHeader } from '../../common/components/backendnavigation'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const data = [
    {
        id: 1,
        title: "Investors",
        icon: "account-group",
        subTitle: "",
        active: true,
        color: "#202A3F",
        link: "Investors"
    },
    {
        id: 2,
        title: "Edit Profile ",
        icon: "account-circle-outline",
        subTitle: "",
        active: true,
        color: "#2C1431",
        link: "Investors"
    },
    {
        id: 3,
        title: "Souting ",
        icon: "chart-line-variant",
        subTitle: "(All users)",
        active: true,
        color: "#262037",
        link: "Investors"
    },
    {
        id: 4,
        title: "Notifications ",
        icon: "bell-outline",
        subTitle: "",
        active: true,
        color: "#12253C",
        link: "Investors"
    },
    {
        id: 5,
        title: "Logout ",
        icon: "logout",
        subTitle: "",
        active: true,
        color: "#763D3D",
        link: "Investors"
    },
    {
        id: 6,
        title: "Mail ",
        icon: "email-outline",
        subTitle: "",
        active: false,
        color: "#242424",
        link: "Investors"
    },
    {
        id: 7,
        title: "Wallet ",
        icon: "wallet-outline",
        subTitle: "",
        active: false,
        color: "#242424",
        link: "Investors"
    },
    {
        id: 8,
        title: "Social Network ",
        icon: "instagram",
        subTitle: "",
        active: false,
        color: "#242424",
        link: "Investors"
    },
    {
        id: 9,
        title: "Event",
        icon: "play-circle-outline",
        subTitle: "",
        active: false,
        color: "#242424",
        link: "Investors"
    },
    {
        id: 10,
        title: "Services",
        icon: "lightbulb-outline",
        subTitle: "",
        active: false,
        color: "#242424",
        link: "Investors"
    },
    {
        id: 11,
        title: "Brands ",
        icon: "globe-model",
        subTitle: "",
        active: false,
        color: "#242424",
        link: "Investors"
    },
    {
        id: 12,
        title: "Brands ",
        icon: "account-multiple-outline",
        subTitle: "",
        active: false,
        color: "#242424",
        link: "Investors"
    },
]

export const MasterPanel = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Investors')} style={[styles.card, { backgroundColor: item.color }]}>
            <MaterialCommunityIcons name={item.icon} size={32} color={item?.active ? "#fff" : "#888888"} />
            <Text style={[styles.title, { color: item?.active ? "#fff" : "#888888" }]} >{item.title}</Text>
        </TouchableOpacity>
    );


    return (
        <SafeAreaView style={styles.container}>
            <BackendHeader title={'Back'} />
            <FlatList
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}

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
    title: {
        fontSize: 18,
        marginTop: 10
    },
    card: {
        backgroundColor: "#5681E8",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 30,
        width: "47%",
        marginTop: 20

    }
})