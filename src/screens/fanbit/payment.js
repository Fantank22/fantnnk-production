import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Checkbox, Icon, Input, Select } from 'native-base';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Buttons, FanbitHeader } from '../../common'
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
const amounts = [
    {
        id: 1,
        amount: 5,
        token: 200
    },
    {
        id: 2,
        amount: 15,
        token: 750
    },
    {
        id: 3,
        amount: 25,
        token: 1250
    },
    {
        id: 4,
        amount: 50,
        token: 1750
    },
    {
        id: 5,
        amount: 75,
        token: 4250
    },
    {
        id: 6,
        amount: 100,
        token: 5750
    },
    {
        id: 7,
        amount: 150,
        token: 8750
    },
    {
        id: 8,
        amount: 200,
        token: 12000
    },
    {
        id: 9,
        amount: 250,
        token: 15500
    },
]
export const Payment = ({ navigation, route }) => {
    const { data } = route.params
    let [service, setService] = useState("")
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.container} >
            <StatusBar style='light' backgroundColor='#000' />
            <FanbitHeader title={'Payment'} />
            <ScrollView >


                <View style={{ marginHorizontal: 15, paddingBottom: 20 }} >
                    <View style={styles.purchaseInfoTab} >
                        <View>
                            <Text style={styles.purchase} >Purchase Info</Text>
                            <Text style={styles.purchaseInfo} >${data.amount} for {data.token} tokens</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('BuyFanbit2')} >
                            <Text style={styles.changeBtn} >Change</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginTop: 20 }} >
                        <Text style={styles.paymentTypeTitle} >Select payment type</Text>
                        <Select
                            selectedValue={service}
                            py={Platform.OS === 'ios' ? 5 : 2}
                            borderRadius={15}
                            borderWidth={0}
                            color={'#A8A8A8'}
                            fontSize={16}
                            backgroundColor={'#252525'}
                            accessibilityLabel="Add a credit or debit card"
                            placeholder="Add a credit or debit card"
                            _selectedItem={{
                                bg: 'gray.300',
                                endIcon: <AntDesign name="check" size={24} color="black" />
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="Add a credit or debit card" value="ux" />
                            <Select.Item label="Add a credit or debit card" value="web" />
                        </Select>
                    </View>
                </View>

                <View style={{ borderColor: "#3F3F3F", borderWidth: 3 }} />

                <View style={{ marginTop: 20, marginHorizontal: 15 }} >
                    <Text style={styles.cardInfoTitle} >Enter new card info</Text>
                    <Text style={styles.cardNummberTitle} >Card number</Text>
                    <Input
                        selectionColor={'#A8A8A8'}
                        py={Platform.OS === 'ios' ? 5 : 2}
                        mt={2}
                        borderRadius={15}
                        borderWidth={0}
                        color={'#A8A8A8'}
                        fontSize={16}
                        backgroundColor={'#252525'}
                        keyboardType='number-pad'
                        placeholder='374245455400126'
                        autoComplete='cc-number'
                        _focus={{ borderWidth: 0 }}
                        InputRightElement={<Icon as={<Feather name="credit-card" />} size={5} mr="3" color="muted.400" />}
                    />
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }} >
                        <Image style={styles.cardImage} source={require('../../common/assets/images/payment/visa.jpeg')} />
                        <Image style={styles.cardImage} source={require('../../common/assets/images/payment/master.png')} />
                        <Image style={styles.cardImage} source={require('../../common/assets/images/payment/Discover.png')} />
                        <Image style={styles.cardImage} source={require('../../common/assets/images/payment/amex.png')} />
                    </View>

                    <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                        <View style={{ width: "31%" }} >
                            <Text style={styles.cardNummberTitle} >Month</Text>
                            <Select
                                w={'100%'}
                                selectedValue={service}
                                py={Platform.OS === 'ios' ? 5 : 2}
                                borderRadius={15}
                                borderWidth={0}
                                color={'#A8A8A8'}
                                fontSize={16}
                                backgroundColor={'#252525'}
                                accessibilityLabel="month"
                                placeholder="Month"
                                _selectedItem={{
                                    bg: 'gray.300',
                                    endIcon: <AntDesign name="check" size={24} color="black" />
                                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="January" value="jan" />
                                <Select.Item label="February" value="feb" />
                                <Select.Item label="March" value="mar" />
                                <Select.Item label="April" value="apr" />
                                <Select.Item label="May" value="may" />
                                <Select.Item label="June" value="jun" />
                                <Select.Item label="July" value="jul" />
                                <Select.Item label="August" value="aug" />
                                <Select.Item label="September" value="sep" />
                                <Select.Item label="October" value="oct" />
                                <Select.Item label="November" value="nov" />
                                <Select.Item label="December" value="dec" />
                            </Select>
                        </View>
                        <View style={{ width: "31%" }}>
                            <Text style={styles.cardNummberTitle} >Year</Text>
                            <Select
                                w={'100%'}
                                selectedValue={service}
                                py={Platform.OS === 'ios' ? 5 : 2}
                                borderRadius={15}
                                borderWidth={0}
                                color={'#A8A8A8'}
                                fontSize={16}
                                backgroundColor={'#252525'}
                                accessibilityLabel="month"
                                placeholder="Month"
                                _selectedItem={{
                                    bg: 'gray.300',
                                    endIcon: <AntDesign name="check" size={24} color="black" />
                                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="2022" value="22" />
                                <Select.Item label="2023" value="23" />
                                <Select.Item label="2024" value="24" />
                                <Select.Item label="2025" value="25" />
                                <Select.Item label="2026" value="26" />

                            </Select>
                        </View>
                        <View style={{ width: "31%" }}>
                            <Text style={styles.cardNummberTitle} >CVC</Text>
                            <Input
                                selectionColor={'#A8A8A8'}
                                w={'100%'}
                                py={Platform.OS === 'ios' ? 5 : 2}
                                mt={2}
                                borderRadius={15}
                                borderWidth={0}
                                color={'#A8A8A8'}
                                fontSize={16}
                                backgroundColor={'#252525'}
                                keyboardType='number-pad'
                                autoComplete='cc-csc'
                                _focus={{ borderWidth: 0 }}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.cardNummberTitle} >Zip Code</Text>
                        <Input
                            selectionColor={'#A8A8A8'}
                            py={Platform.OS === 'ios' ? 5 : 2}
                            mt={2}
                            borderRadius={15}
                            borderWidth={0}
                            color={'#A8A8A8'}
                            fontSize={16}
                            backgroundColor={'#252525'}
                            autoComplete='cc-number'
                            _focus={{ borderWidth: 0 }}
                        />
                    </View>
                    <View style={{ marginTop: 20 }} >
                        <Checkbox backgroundColor={'#252525'} colorScheme="blue">
                            <Text style={{
                                color: "#E0E0E0",
                                fontWeight: "500",
                            }}>Save for  future payments</Text>
                        </Checkbox>

                    </View>
                    <View style={{ backgroundColor: "#252525", padding: 15, marginTop: 20, borderRadius: 10 }} >
                        <Text style={{ color: "#E0E0E0" }} >Scouting Rep ID #</Text>
                        <Input
                            selectionColor={'#A8A8A8'}
                            py={Platform.OS === 'ios' ? 5 : 2}
                            mt={2}
                            borderRadius={15}
                            borderWidth={0}
                            color={'#A8A8A8'}
                            fontSize={16}
                            backgroundColor={'#383838'}
                            _focus={{ borderWidth: 0 }}
                        />
                    </View>

                </View>



                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }} >
                    <Buttons style={{ width: "45%" }} onPress={() => navigation.goBack()} title={'Cancel'} />
                    <Buttons style={{ width: "45%" }} onPress={() => navigation.navigate('FanbitSend', { data: data })} fillBtn title={'Purchase'} />
                </View>
            </ScrollView>

            <Image
                source={require("../../common/assets/images/3.png")}
                style={styles.bgImage1}
            />
            <Image
                source={require("../../common/assets/images/4.png")}
                style={styles.bgImage2}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 40 : 40,
        paddingBottom: 80
    },
    purchase: {
        color: "#C6C6C6",

    },
    purchaseInfo: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "500",
        marginTop: 10
    },
    purchaseInfoTab: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#212739",
        borderColor: "#378EF0",
        borderWidth: 1,
        borderStyle: "dashed",
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },

    changeBtn: {
        fontSize: 16,
        color: "#378EF0"
    },
    paymentTypeTitle: {
        color: "#E0E0E0",
        fontWeight: "500"
    },
    cardInfoTitle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "500"
    },
    cardNummberTitle: {
        color: "#E0E0E0",
        fontWeight: "500",
        marginTop: 20
    },
    input: {
        height: 40,
        // padding: 10,
        backgroundColor: "#252525",
        fontSize: 16,
        color: "#A8A8A8",
    },
    cardImage: { height: 18, width: 26, marginRight: 5 },

    bgImage1: {
        position: "absolute",
        top: 40,
        right: 0,
        zIndex: -1000,
    },

    bgImage2: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: -1000,
    },
})