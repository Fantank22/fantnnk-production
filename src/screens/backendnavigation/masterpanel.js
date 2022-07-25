import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
        color: "#202A3F"
    },
    {
        id: 2,
        title: "Edit Profile ",
        icon: "account-circle-outline",
        subTitle: "",
        active: true,
        color: "#2C1431"
    },
    {
        id: 3,
        title: "Souting ",
        icon: "chart-line-variant",
        subTitle: "(All users)",
        active: true,
        color: "#262037"
    },
    {
        id: 4,
        title: "Notifications ",
        icon: "bell-outline",
        subTitle: "",
        active: true,
        color: "#12253C"
    },
    {
        id: 5,
        title: "Logout ",
        icon: "logout",
        subTitle: "",
        active: true,
        color: "#763D3D"
    },
]

export const MasterPanel = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}>
            <MaterialCommunityIcons name={item.icon} size={32} color="#fff" />
            <Text style={styles.title} >{item.title}</Text>
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
        backgroundColor: "#000"
    },
    title: {
        color: "#fff",
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