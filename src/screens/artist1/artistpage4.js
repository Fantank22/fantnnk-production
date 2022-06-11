import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Modal } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StickyHeader } from '../../common';

export const ArtistPage4 = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style='light' />
            <StickyHeader navigation={navigation} />
            <ScrollView
                style={{
                    backgroundColor: "#121212",
                    marginTop: -80,
                }}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../../common/assets/images/artist/russ.png")}
                        style={{ width: "100%", height: 430 }} >
                        <View
                            style={{
                                height: "100%",
                                width: "100%",
                                paddingHorizontal: 20,
                                marginTop: 100,
                            }} >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                <Text
                                    style={{
                                        color: "#fff",
                                        fontSize: 28,
                                        fontWeight: "500",
                                        lineHeight: 36,
                                    }}
                                >
                                    Russ
                                </Text>

                                <Text
                                    style={{
                                        color: "#fff",
                                        fontSize: 14,
                                        fontWeight: "400",
                                        lineHeight: 18,
                                        marginTop: 5,
                                    }}
                                >
                                    Los Angeles, CA ·  <Image source={require('../../common/assets/images/flug/usa-flag.png')} />
                                </Text>

                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginTop: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#378EF0",
                                            fontSize: 14,
                                            fontWeight: "400",
                                            lineHeight: 18,
                                        }}
                                    >
                                        # Music
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#fff",
                                            fontSize: 14,
                                            fontWeight: "400",
                                            lineHeight: 18,
                                            marginLeft: 10,
                                        }}
                                    >
                                        # R&B
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#fff",
                                            fontSize: 14,
                                            fontWeight: "400",
                                            lineHeight: 18,
                                            marginLeft: 10,
                                        }}
                                    >
                                        # Vocalist - Celebrity
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginTop: 10,
                                    }}
                                >
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            borderBottomColor: "#378EF0",
                                            borderBottomWidth: 1,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginBottom: 4,
                                            }}
                                        >
                                            1mo.
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            borderBottomColor: "#fff",
                                            borderBottomWidth: 1,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginBottom: 4,
                                            }}
                                        >
                                            3mo.
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            borderBottomColor: "#fff",
                                            borderBottomWidth: 1,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginBottom: 4,
                                            }}
                                        >
                                            6mo.
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            borderBottomColor: "#fff",
                                            borderBottomWidth: 1,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginBottom: 4,
                                            }}
                                        >
                                            12mo.
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            borderBottomColor: "#fff",
                                            borderBottomWidth: 1,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginBottom: 4,
                                            }}
                                        >
                                            24mo.
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            paddingHorizontal: 10,
                                            borderBottomColor: "#fff",
                                            borderBottomWidth: 1,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginBottom: 4,
                                            }}
                                        >
                                            All
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        marginTop: 18,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* GRAPH VIEW */}
                                    <View
                                        style={{
                                            width: "80%",
                                        }}
                                    >
                                        {/* <View
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <Image
                                                source={require("../../common/assets/images/artist/greengrapg.png")}
                                                style={{ width: 98, height: 18 }}
                                            />
                                            <View
                                                style={{
                                                    marginLeft: 5,
                                                    backgroundColor: "#e7e7e766",
                                                    borderRadius: 6.47,
                                                    paddingVertical: 3.41,
                                                    paddingHorizontal: 9,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexDirection: "row",
                                                }}
                                            >
                                                <Text style={{ color: "#ffffff99", fontSize: 9 }}>
                                                    CS
                                                </Text>
                                                <Text style={{ color: "#FFF", fontSize: 9 }}>
                                                    1,211
                                                </Text>
                                            </View>
                                        </View> */}
                                        <View
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "row",
                                                marginTop: 10,
                                            }}
                                        >
                                            <Image
                                                source={require("../../common/assets/images/graph/dangergraph.png")}
                                                style={{ width: 98, height: 18 }}
                                            />
                                            <View
                                                style={{
                                                    marginLeft: 5,
                                                    backgroundColor: "#e7e7e766",
                                                    borderRadius: 6.47,
                                                    paddingVertical: 3.41,
                                                    paddingHorizontal: 9,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexDirection: "row",
                                                }}
                                            >
                                                <Text style={{ color: "#ffffff99", fontSize: 9 }}>
                                                    SS
                                                </Text>
                                                <Text style={{ color: "#FFF", fontSize: 9 }}>
                                                    1,211
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Image
                                            source={require("../../common/assets/images/badge/badge10.png")}
                                            style={{ width: 70, height: 80, marginTop: -20 }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View
                        style={{
                            paddingHorizontal: 8,
                            borderRadius: 10,
                            height: 106,
                            marginTop: -64,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#ffffff3d",
                                paddingVertical: 12,
                                paddingHorizontal: 16,
                                borderRadius: 10,
                                height: 106,
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    flexDirection: "row",
                                }}
                            >
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginRight: 14.5,
                                        }}
                                    >
                                        <Image
                                            source={require("../../common/assets/images/artistlist/fitbit-token.png")}
                                            style={{ height: 25, width: 25, marginRight: 8 }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                fontWeight: "500",
                                                color: "#CCCCCC",
                                            }}
                                        >
                                            25, 000
                                        </Text>
                                    </View>
                                    <View>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: "500",
                                                color: "#35C112",
                                            }}
                                        >
                                            25%
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                fontWeight: "500",
                                                color: "#CCCCCC",
                                            }}
                                        >
                                            30 Days
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Events")}
                                        style={{
                                            borderRadius: 30,
                                            backgroundColor: "#378EF0",
                                            paddingHorizontal: 24,
                                            paddingVertical: 6,
                                        }}
                                    >
                                        <Text style={{ color: "#fff", fontSize: 12 }}>
                                            SEND FANBIT
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View
                                style={{
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexDirection: "row",
                                    marginTop: 16,
                                }}
                            >
                                <View
                                    style={{
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexDirection: "row",
                                        flex: 1,
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => alert("ok")}
                                        style={{
                                            borderRadius: 30,
                                            borderColor: "#fff",
                                            borderWidth: 1,
                                            paddingHorizontal: 21,
                                            paddingVertical: 6,
                                        }}
                                    >
                                        <Text style={{ color: "#fff", fontSize: 12 }}>TRACK</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => alert("ok")}
                                        style={{
                                            borderRadius: 30,
                                            borderColor: "#fff",
                                            borderWidth: 1,
                                            paddingHorizontal: 21,
                                            paddingVertical: 6,
                                        }}
                                    >
                                        <Text style={{ color: "#fff", fontSize: 12 }}>WALLET</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => alert("ok")}
                                        style={{
                                            borderRadius: 30,
                                            borderColor: "#fff",
                                            borderWidth: 1,
                                            paddingHorizontal: 21,
                                            paddingVertical: 6,
                                        }}
                                    >
                                        <Text style={{ color: "#fff", fontSize: 12 }}>MESSAGE</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setShowModal(true)}
                                    style={{ marginLeft: 15 }}
                                >
                                    <Ionicons
                                        name="ellipsis-horizontal-outline"
                                        style={{ color: "#fff" }}
                                    />
                                </TouchableOpacity>

                                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                                    <Modal.Content maxWidth="400px" {...styles["bottom"]}>
                                        <Modal.Body style={{ backgroundColor: "#fff" }}>
                                            <Text>My Model</Text>
                                        </Modal.Body>
                                    </Modal.Content>
                                </Modal>
                            </View>
                        </View>
                    </View>

                    {/* Scouting Activity */}

                    <View style={{ paddingHorizontal: 10 }} >
                        <Text style={{
                            color: "#fff",
                            fontSize: 16,
                            marginTop: 10
                        }} >Scouting Activity</Text>
                        <View style={{ backgroundColor: "#4B4B4C", padding: 10, borderRadius: 5, marginTop: 15 }} >
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../../common/assets/images/artist/randyRen.png')} />
                                <View>
                                    <View
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Image
                                            source={require("../../common/assets/images/graph/greengrapg.png")}
                                            style={{ width: 98, height: 18 }}
                                        />
                                        <View
                                            style={{
                                                marginLeft: 5,
                                                backgroundColor: "#e7e7e766",
                                                borderRadius: 6.47,
                                                paddingVertical: 3.41,
                                                paddingHorizontal: 9,
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <Text style={{ color: "#ffffff99", fontSize: 9 }}>
                                                CS
                                            </Text>
                                            <Text style={{ color: "#FFF", fontSize: 9 }}>
                                                1,211
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                                            <AntDesign name="arrowup" size={14} color="#35C112" />
                                            <Text style={{ fontSize: 12, color: "#35C112" }} >12.3%</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                <View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Text style={{ color: "#fff", fontSize: 16 }} >Randy Ren </Text>
                                        <View style={{ backgroundColor: "#49C3EB", paddingHorizontal: 3, paddingVertical: 3, borderRadius: 10 }} >
                                            {/* <FontAwesome name="dollar" size={10} color="white" /> */}
                                            <Entypo name="check" size={10} color="white" />
                                        </View>
                                    </View>
                                    <Text style={{ color: "#fff", fontSize: 14 }} >New York, NY . <Image source={require('../../common/assets/images/flug/usa-flag.png')} /> </Text>
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginTop: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "#378EF0",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                            }}
                                        >
                                            # Music
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginLeft: 10,
                                            }}
                                        >
                                            # Pop
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginLeft: 10,
                                            }}
                                        >
                                            # Vocalist
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => navigation.navigate('UserPage2')} >
                                        <Text style={{ color: "#fff", borderColor: "#fff", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }} >View profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#4B4B4C", padding: 10, borderRadius: 5, marginTop: 15 }} >
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../../common/assets/images/artist/nikenDewanil.png')} />
                                <View >
                                    <View
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Image
                                            source={require("../../common/assets/images/graph/greengrapg.png")}
                                            style={{ width: 98, height: 18 }}
                                        />
                                        <View
                                            style={{
                                                marginLeft: 5,
                                                backgroundColor: "#e7e7e766",
                                                borderRadius: 6.47,
                                                paddingVertical: 3.41,
                                                paddingHorizontal: 9,
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <Text style={{ color: "#ffffff99", fontSize: 9 }}>
                                                CS
                                            </Text>
                                            <Text style={{ color: "#FFF", fontSize: 9 }}>
                                                1,211
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                                            <AntDesign name="arrowup" size={14} color="#35C112" />
                                            <Text style={{ fontSize: 12, color: "#35C112" }} >12.3%</Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            marginTop: 10,
                                        }}
                                    >
                                        <Image
                                            source={require("../../common/assets/images/graph/dangergraph.png")}
                                            style={{ width: 98, height: 18 }}
                                        />
                                        <View
                                            style={{
                                                marginLeft: 5,
                                                backgroundColor: "#e7e7e766",
                                                borderRadius: 6.47,
                                                paddingVertical: 3.41,
                                                paddingHorizontal: 9,
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <Text style={{ color: "#ffffff99", fontSize: 9 }}>
                                                SS
                                            </Text>
                                            <Text style={{ color: "#FFF", fontSize: 9 }}>
                                                1,211
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                                            <AntDesign name="arrowup" size={14} color="#F23D3D" />
                                            <Text style={{ fontSize: 12, color: "#F23D3D" }} >12.3%</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                <View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                                        <Text style={{ color: "#fff", fontSize: 16 }} >Niken Dewanil </Text>
                                        <View style={{ backgroundColor: "#35C112", paddingHorizontal: 5, paddingVertical: 3, borderRadius: 10 }} >
                                            <FontAwesome name="dollar" size={10} color="white" />
                                        </View>
                                    </View>
                                    <Text style={{ color: "#fff", fontSize: 14 }} >Los Angeles, CA . <Image source={require('../../common/assets/images/flug/usa-flag.png')} /> </Text>
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            marginTop: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "#378EF0",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                            }}
                                        >
                                            # Music
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginLeft: 10,
                                            }}
                                        >
                                            # Pop
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#fff",
                                                fontSize: 12,
                                                fontWeight: "400",
                                                lineHeight: 18,
                                                marginLeft: 10,
                                            }}
                                        >
                                            # Vocalist
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{ color: "#fff", borderColor: "#fff", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }} >View profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        width: "100%"
    },

    bottom: {
        marginBottom: 0,
        marginTop: "auto",
    },
});
