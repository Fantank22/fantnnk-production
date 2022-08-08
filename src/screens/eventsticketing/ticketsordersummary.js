import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EventHeader } from '../../common'
import { AntDesign, EvilIcons, Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Input } from 'native-base';

export const TicketsOrderSummary = ({ route, navigation }) => {
    const [quantity, serQuantity] = React.useState(2)
    const [price, setPrice] = React.useState(9 * quantity)

    const { data } = route.params
    return (
        <SafeAreaView style={styles.container} >
            <EventHeader title={"Order Summary"} />
            <ScrollView>
                <View style={{ marginHorizontal: 15, marginTop: 20, padding: 20, paddingBottom: 30, backgroundColor: "#1A1A1A", borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                    <ImageBackground style={{ height: 164, width: "100%", borderRadius: 5, resizeMode: "stretch", justifyContent: 'flex-end' }} source={require('../../common/assets/images/eventsticketing/seatbooking2.png')}>
                        <View style={{ backgroundColor: "#1e1b1be0", margin: 10, borderRadius: 5, padding: 10 }} >
                            <Text style={{ color: "#fff", textAlign: "center" }} >TIME REMAINING</Text>
                            <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }} >4:31:26</Text>
                        </View>
                    </ImageBackground>
                    <Text style={{ fontSize: 16, color: "#fff", marginVertical: 10, textAlign: "center" }}>{data.title}</Text>
                    <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "center", marginVertical: 5, marginHorizontal: 10 }} >
                        <EvilIcons name="location" size={24} color="#B7B7B7" />
                        <Text style={{ fontSize: 14, color: "#B7B7B7", textAlign: "center", marginLeft: 10 }}>{data.address}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 5, marginHorizontal: 10 }} >
                        <Ionicons name="time-outline" size={24} color="#B7B7B7" />
                        <Text style={{ fontSize: 14, color: "#B7B7B7", textAlign: "center", marginLeft: 10 }}>{data.day} , {data.date} , {data.time}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 5, marginHorizontal: 10 }} >
                        <MaterialIcons name="qr-code" size={24} color="#B7B7B7" />
                        <Text style={{ fontSize: 14, color: "#B7B7B7", textAlign: "center", marginLeft: 10 }}>Row E I 1-10 or 12 tickets</Text>
                    </View>
                    <View style={{ borderBottomColor: "#383838", borderBottomWidth: 1, marginVertical: 10 }} />


                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }} >
                        <View style={{ position: "relative" }} >
                            <View style={{ flexDirection: "row", alignItems: "center", borderColor: "#000", borderWidth: 2, borderRadius: 10 }} >
                                <Text style={{ color: "#AFAFAF", fontSize: 16, fontWeight: "bold", marginHorizontal: 10 }} >QTY</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#000" }} >
                                    <Text style={{ color: "#fff", fontSize: 22, fontWeight: "700", marginHorizontal: 10 }} >{quantity}</Text>
                                    <View style={{ marginRight: 10 }}>
                                        <MaterialIcons onPress={() => {
                                            setPrice(() => quantity * 9)
                                            serQuantity(quantity + 1)

                                        }} name="keyboard-arrow-up" size={24} color="#6F767E" />
                                        <MaterialIcons onPress={() => {
                                            if (quantity > 1) {
                                                serQuantity(quantity - 1)
                                            }
                                        }} name="keyboard-arrow-down" size={24} color="#6F767E" />
                                    </View>
                                </View>

                            </View>
                            <Text style={{ color: "#EEEEEE", textAlign: "center", position: "absolute", bottom: -20, left: 15 }} >$9.00 /each</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }} >${price}.00</Text>
                            <View style={{ backgroundColor: "#23CD14", height: 20, width: 20, borderRadius: 13, justifyContent: "center", alignItems: "center", marginHorizontal: 10 }}>
                                <Foundation name="dollar" size={18} color="white" />
                            </View>
                            <View style={{ borderColor: "#CACACA", borderWidth: 1, height: 20, width: 20, borderRadius: 13, justifyContent: "center", alignItems: "center" }} >
                                <Text style={{ color: "#CACACA", fontSize: 16, fontWeight: "bold" }} >i</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 15, padding: 20, backgroundColor: "#1A1A1A", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, backgroundColor: "#383838" }}  >
                    <Text style={{ color: "#fff" }} >
                        Note: To assure fans safety during these uncertain  times,all tickets are subject to restrictions and requirements put in...
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Text onPress={() => navigation.navigate('EventsPageQRCode')} style={{ color: "#929EFF", fontSize: 16 }} >See more</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="#929EFF" />
                    </View>
                </View>

                <View style={{ backgroundColor: "#1A1A1A", padding: 20, marginHorizontal: 15, borderRadius: 5, marginVertical: 20 }} >
                    <Text style={{ color: "#D2D2D2", marginBottom: 20 }} >Where do you want your TICKETS RECEIPT - QR CODE VOTING INSTRUCTIONS emailed?  </Text>

                    <Input
                        borderRadius={30}
                        borderColor={'light.600'}
                        placeholder='Email'
                        placeholderTextColor={'light.500'}
                        padding={4}
                        fontSize={16}
                        color={'light.100'}
                        _focus={{
                            borderColor: "light.600",
                            backgroundColor: "transparent"
                        }}
                    />

                </View>


            </ScrollView>
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