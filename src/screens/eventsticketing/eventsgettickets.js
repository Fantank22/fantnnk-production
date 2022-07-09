import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EventHeader } from '../../common'
import { MaterialIcons } from '@expo/vector-icons'
const data = [
    {
        id: 1,
        title: "Niken Dewanil Performs ",
        address: "Club Mint / 2323 Olympic Blvd., Los Angeles, CA. 90210",
        day: "FRIDAY",
        date: "JAN 7",
        time: "7:00 PM"
    },
    {
        id: 2,
        title: "Condense the Artist performs",
        address: "Flip Performance Arts Center / 6789 Robertson Street / Los Angeles, CA. 90213",
        day: "FRIDAY",
        date: "JAN 7",
        time: "7:00 PM"
    },
    {
        id: 3,
        title: "FANTANK-S.E.SHOWCASE-RAP (Celebrity Showcase) - Sponsored by Singha Beer ",
        address: "House of Blues, Nashville, TN.",
        day: "FRIDAY",
        date: "JAN 7",
        time: "7:00 PM"
    },
    {
        id: 4,
        title: "FanTank - Country Music - Regional Showcase",
        address: "Swerve Cigar  Lounge Richmond, VA. 23809",
        day: "FRIDAY",
        date: "JAN 7",
        time: "7:00 PM"
    },
    {
        id: 5,
        title: "SHE performs @",
        address: "Rasta Beach - Leme Beach, Rio de Janeiro, Posto #1",
        day: "FRIDAY",
        date: "JAN 7",
        time: "7:00 PM"
    },
    {
        id: 6,
        title: "R&B Music Showcase (Sponsored by Singha Beer),",
        address: "Performing Arts Center - 1111  Broad Street, Richmond, VA. 2303",
        day: "FRIDAY",
        date: "JAN 7",
        time: "7:00 PM"
    },

]

export const EventsGetTickets = ({ route, navigation }) => {
    const { title } = route.params

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('EventsTicketsSeating', { data: item })} style={{ flexDirection: "row", backgroundColor: "#1A1A1A", padding: 10, marginTop: 10, borderRadius: 10, width: "100%" }} >
                <View style={{ width: "25%" }} >
                    <View style={{ backgroundColor: "#000", padding: 10, borderRadius: 5, }} >
                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }} >{item.day}</Text>
                        <Text style={{ color: "#fff", fontSize: 12, }} >{item.date}</Text>
                        <Text style={{ color: "#fff", fontSize: 12, }} >{item.time}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingLeft: 10, width: "70%" }} >
                    <View>
                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }} >{item.title}</Text>
                        <Text style={{ color: "#fff", fontSize: 12, marginTop: 10 }} >{item.address}</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={21} color="white" />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container} >
            <EventHeader title={`Get Tickets - ${title} selected`} />
            <FlatList
                data={data}
                contentContainerStyle={{ marginHorizontal: 15 }}
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
})