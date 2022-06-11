import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { EvilIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { Radio, TextArea } from 'native-base';

const myData = [
    {
        id: 1,
        title: "My Profile",
        option: [
            { title: "Notification Email", },
            { title: "SMS Text Message", }
        ]

    },
    {
        id: 2,
        title: "Artist Services",
        option: [
            { title: "Sounting I.T", },
            { title: "Other", }
        ]

    },
    {
        id: 3,
        title: "Brand Services",
        option: [
            { title: "Brand I.T", },
            { title: "Other", }
        ]

    },
    {
        id: 4,
        title: "Enterprice Services",
        option: [
            { title: "I.T", },
            { title: "Other", }
        ]

    },
    {
        id: 5,
        title: "Finanlcial Services",
        option: [
            { title: "I.T", },
            { title: "Other", }
        ]

    },
    {
        id: 6,
        title: "I.T. Services",
        option: [
            { title: "Scouting", },
            { title: " Artists", },
            { title: " Brands", },
            { title: " Enterprise", },
            { title: " Billing", },
            { title: " Other", },
        ]

    },
    {
        id: 7,
        title: "Souting",
        option: [
            { title: "Badge Level", },
            { title: " Commissions", },
            { title: " Bookings", },
            { title: " Other", },
        ]

    },
    {
        id: 8,
        title: "Investments",
        option: [
            { title: "Equity Crowd Funding", },
            { title: " NFT", },
            { title: " SPAC", },
            { title: " Other", },
        ]

    },
    {
        id: 9,
        title: "Booking Services",
        option: [
            { title: "Artists", },
            { title: " Customers", }
        ]

    },
    {
        id: 10,
        title: "Events",
        option: [
            { title: "Ticketing", },
            { title: "Sponsorship", },
            { title: "Talent", },
            { title: "Other", },
        ]

    },
]

export const ContactUs = ({ navigation }) => {
    const [value, setValue] = React.useState("one");
    const [expandItem, setExpandItem] = React.useState(1);
    const [isOpen, setIsOpen] = React.useState(true);


    const handleExpand = (e) => {
        if (expandItem === e && isOpen) {
            setIsOpen(false)
            setExpandItem(e)
            return
        }
        setExpandItem(e)
        setIsOpen(true)
    }


    const renderItem = ({ item }) => {
        return (
            <View style={styles.singleItems} >
                <View style={styles.itemHeader} >
                    <Text style={styles.itemTitle} >{item.title}</Text>
                    <TouchableOpacity onPress={() => handleExpand(item.id)} >
                        <MaterialIcons name={expandItem === item.id && isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
                {expandItem === item.id && isOpen && (
                    <View style={styles.optionContant} >
                        <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => { setValue(nextValue) }}>
                            {item.option.map((data, index) => (
                                <Radio key={index + 1} colorScheme="blue" value={data.title} my={1.5}> <Text style={styles.optionTitle} >{data.title}</Text> </Radio>
                            ))}
                        </Radio.Group>
                    </View>
                )}

            </View>
        )
    }


    return (
        <SafeAreaView style={styles.container} >

            <FlatList
                data={myData}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => (
                    <View>
                        <ImageBackground style={styles.topBanner} source={require('../../common/assets/images/contactus/contactus-banner.png')} >
                            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()} >
                                <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                            </TouchableOpacity>
                            <Text style={styles.bannerTitle} >Contact Us</Text>
                        </ImageBackground>
                        <Text style={styles.subtitle} >We are here to assist, please inform us of your issue below</Text>
                        <View style={styles.mainContant} >
                            <Text style={styles.reportTitle} >Report Bug</Text>
                            <View style={styles.separetor} />
                        </View>
                    </View>
                )}
                renderItem={(item) => renderItem(item)}
                ListFooterComponent={() => (
                    <View>
                        <View style={styles.messageContant} >
                            <Text style={styles.messageTitle} >Message</Text>
                            <TextArea my={2} maxLength={140} color={'#fff'} h={40} placeholder="Write your message" w="100%" maxW="100%" />
                            <Text style={styles.maxNumber} >Max 140 character</Text>
                            <TouchableOpacity onPress={() => alert('ok')} >
                                <View style={styles.goButton} >
                                    <Text style={styles.goButtonText} >Go</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footerContant} >
                            <Image style={styles.footerLogo} source={require('../../common/assets/images/logo-text.png')} />
                            <View style={styles.separetor} />
                            <View style={styles.socialContant} >
                                <TouchableOpacity onPress={() => alert('ok')} >
                                    <View style={styles.facebookShare} >
                                        <EvilIcons name="sc-facebook" size={24} color="#6F767E" />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('ok')} >
                                    <View style={styles.twitterShare} >
                                        <Feather name="twitter" size={24} color="#6F767E" />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('ok')} >
                                    <View style={styles.instagramShare} >
                                        <Feather name="instagram" size={24} color="#6F767E" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}


