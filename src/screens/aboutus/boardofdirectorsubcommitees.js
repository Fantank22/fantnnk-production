import { View, Text, StyleSheet, ScrollView, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'

export const BoardofDirectorSubCommitees = () => {
    const members = [
        { name: "Kristin Watson", designation: "Member" },
        { name: "Ronald Richards", designation: "Member" },
        { name: "Bessie Cooper", designation: "Eleanor Pena" },
        { name: "Eleanor Pena", designation: "Member" },
        { name: "Ronald Richards", designation: "Member" },
        { name: "Bessie Cooper", designation: "Eleanor Pena" },

    ]
    return (
        <View style={styles.container} >
            <View style={{ borderBottomColor: "#252525", borderWidth: 1 }} ></View>
            <ScrollView style={{ paddingHorizontal: 15 }} >
                <Image style={{ width: 165, height: 173, alignSelf: "center", marginVertical: 30 }} source={require('../../assets/about/commitee.png')} />
                <Text style={{ color: "#fff", fontSize: 19, fontWeight: "700", textAlign: "center" }} >Flow Committee Directors</Text>
                <Text style={{ color: "#fff", textAlign: "center", marginTop: 20 }} >Comprised of top 2 badge level owners + industry executives & influentials across Arts & Entertainment - Marketing - Technology - Finance.  </Text>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 30 }} >
                    <View style={{ alignItems: "center", justifyContent: "center", marginHorizontal: 10 }} >
                        <Image style={{ height: 50, width: 50 }} source={require('../../assets/about/music-notes.png')} />
                        <Text style={{ fontSize: 12, color: "#fff" }} >Music</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center", marginHorizontal: 10 }} >
                        <Image style={{ height: 50, width: 50 }} source={require('../../assets/about/flim.png')} />
                        <Text style={{ fontSize: 12, color: "#fff" }} >Film</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center", marginHorizontal: 10 }} >
                        <Image style={{ height: 50, width: 50 }} source={require('../../assets/about/money.png')} />
                        <Text style={{ fontSize: 12, color: "#fff" }} >Money</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center", marginHorizontal: 10 }} >
                        <Image style={{ height: 50, width: 50 }} source={require('../../assets/about/badgeGroup.png')} />
                        <Text style={{ fontSize: 12, color: "#fff" }} >Badges</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", marginTop: 20 }} >
                    {
                        members.map((d, i) => (
                            <TouchableNativeFeedback onPress={() => navigation.navigate('DetailsPage')}>
                                <View style={{
                                    flexDirection: "column",
                                    alignItems: "center",
                                    backgroundColor: "#1B1B1B",
                                    width: "48%",
                                    paddingVertical: 20,
                                    borderBottomColor: "#069EFC",
                                    borderBottomWidth: 5,
                                    borderRadius: 5,
                                    marginTop: 10
                                }} >
                                    <Image style={{
                                        height: 60,
                                        width: 60,
                                        borderRadius: 30,
                                        borderColor: "white",
                                        borderWidth: 1,
                                    }} source={require('../../assets/artist/artist5.png')} />
                                    <Text style={{
                                        color: "white",
                                        fontSize: 14,
                                        marginTop: 10
                                    }} > {d.name}</Text>
                                    <Text style={{
                                        color: "#069EFC",
                                        fontSize: 14,
                                        textAlign: "center",
                                        marginHorizontal: 10
                                    }} > {d.designation} </Text>
                                </View>
                            </TouchableNativeFeedback>
                        ))
                    }

                </View>
            </ScrollView >
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
    }

})
