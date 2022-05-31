import { View, Text, StyleSheet, ImageBackground, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'

export const Favourites = ({ navigation }) => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <View style={styles.container} >
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 45 }} >
                        <Entypo name="cross" size={24} color="white" />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff", textAlign: "center", marginTop: 20 }} >Favourites (8)</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
                numColumns={2}
                renderItem={({ item, index }) => (

                    <View style={{ width: "48%", marginVertical: 5, marginHorizontal: 5 }} >
                        <TouchableOpacity onPress={() => navigation.navigate('SingleNFT')} >
                            <ImageBackground source={require('../../common/assets/images/fantanknftmarketplace/notable.png')} style={{ height: 184.4, justifyContent: "space-between", padding: 10, marginVertical: 15, borderRadius: 10 }} >
                                <View style={{ backgroundColor: "#5CAABD", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 6, alignSelf: "flex-end" }} >
                                    <Ionicons name="heart-outline" size={20} color="white" />
                                </View>
                                <View>
                                    <Text style={{ color: "#fff", fontWeight: "700" }} >Niken Dewanil</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Image source={require('../../common/assets/images/fantanknftmarketplace/tron.png')} />
                                        <Text style={{ fontSize: 12, color: "#CDCACA", marginLeft: 5 }} >100</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                )
                }
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        paddingHorizontal: 15
    },
})

