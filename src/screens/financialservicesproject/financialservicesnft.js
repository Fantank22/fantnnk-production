import { StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { Button, FormControl, Input, Modal } from 'native-base';

export const FinancialServicesNft = () => {
    const [open, setOpen] = useState(false);

    const openModal = placement => {
        setOpen(true);
        console.log('first')
    };

    return (
        <View style={styles.container} >
            <ImageBackground source={require('../../common/assets/images/artist/artist2.png')} style={{ height: "100%" }} >
                <ScrollView style={{ backgroundColor: "rgba(0, 0, 0, 0.56)" }}  >
                    <View style={{ backgroundColor: "#191919", margin: 10, paddingHorizontal: 30, paddingVertical: 20, borderRadius: 5 }}>
                        <Image style={{ height: 289, width: "100%", borderRadius: 10 }} source={require('../../common/assets/images/financialservicesprojectlistings/projectdetails.png')} />
                        <TouchableOpacity onPress={() => openModal("bottom")}>
                            <View style={{ backgroundColor: "#000", flexDirection: "row", alignItems: "center", alignSelf: "flex-end", padding: 10, borderRadius: 10, marginTop: -50, marginRight: 20 }} >
                                <Feather name="users" size={20} color="#e0e0e0" />
                                <Text style={{ color: "#e0e0e0", fontSize: 12, fontWeight: "700", marginLeft: 10 }} >Owners</Text>
                            </View>
                        </TouchableOpacity>


                        <Text style={{ fontSize: 16, color: "#E91B2E", textAlign: "center", marginTop: 50 }} >WARNING : EXPLICIT LANGUAGE CONTAINED</Text>
                        <Text style={{ fontSize: 28, color: "#fff", textAlign: "center", marginTop: 20, fontWeight: "bold" }} >Prisoner Inside by Niken Dewanil</Text>
                        <Text style={{ color: "#e0e0e0", textAlign: "center", marginTop: 20, paddingHorizontal: 40 }} >Niken Dewanil | 2021 | 7 Songs | 7 Works of Art</Text>

                        <View style={{ borderBottomColor: "#B7B7B7", borderWidth: 1, marginVertical: 20 }} />
                        <Text style={{ color: "#e0e0e0", textAlign: "center", marginBottom: 10 }} >TIME REMAINING</Text>
                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16, marginVertical: 10 }} > 6d 4h 31m 26s </Text>
                        <Text style={{ color: "#B7B7B7", textAlign: "center", fontSize: 16, marginVertical: 10 }} >(Wed , Dec 15 at 1:24 am)</Text>
                        <Text style={{ fontSize: 16, color: "#E91B2E", textAlign: "center", marginVertical: 10 }} > Buy Now On The FanTank Marketplace</Text>

                        <TouchableOpacity onPress={() => alert('ok')} >
                            <View style={{ backgroundColor: "#378EF0", borderRadius: 5, paddingVertical: Platform.OS === "ios" ? 20 : 15, marginVertical: 10 }} >
                                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700", textAlign: "center" }} >Buy Now - $200</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true} size="full">
                        <Modal.Content backgroundColor={'#121212'} borderRadius={0} maxWidth="100%" {...styles['bottom']}>
                            <Modal.CloseButton />
                            <Modal.Header borderBottomWidth={0} color={'#E0E0E0'} backgroundColor={'#000'}>
                                <Text style={{ color: "#E0E0E0", fontSize: 18, fontWeight: 'bold', textAlign: "center" }} >Owned by</Text>
                            </Modal.Header>
                            <Modal.Body p={0}>
                                <View style={{ backgroundColor: "#2C2C2C" }} >
                                    {[1, 2, 3, 4,5].map((i) => (
                                        <View key={i} style={{ paddingHorizontal: 15, borderBottomColor: "#B7B7B7", borderBottomWidth: 1, }} >
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }} >
                                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                                    <Image style={{ height: 29, width: 29, borderRadius: 15 }} source={require('../../common/assets/images/financialservicesprojectlistings/owner.png')} />
                                                    <View style={{ marginLeft: 10 }} >
                                                        <Text style={{ color: "#fff", fontWeight: "700" }} >jhonDoe12</Text>
                                                        <Text style={{ color: "#B7B7B7", fontSize: 12 }} >573478543</Text>
                                                    </View>
                                                </View>
                                                <Text style={{ color: "#B7B7B7", fontSize: 12 }} >4 items</Text>
                                            </View>
                                        </View>
                                    ))}

                                </View>
                            </Modal.Body>

                        </Modal.Content>
                    </Modal>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottom: {
        marginBottom: 0,
        marginTop: "auto"
    },
})