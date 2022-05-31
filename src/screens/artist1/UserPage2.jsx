import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Modal } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const UserPage2 = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <View style={styles.container} >
            <ScrollView
                style={{
                    backgroundColor: "#121212",
                    marginTop: -80,
                }}>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../../assets/artist/randyben.png")}
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
                                    Artist Name
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
                                    Lihat profil Niken Dian Rahma Dewani LinkedIn, komunitas
                                    profesional...
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
                                    New York City, NY ·  <Image source={require('../../assets/artist/usa-flag.png')} />
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
                                        # Pop
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
                                        # Vocalist
                                    </Text>
                                </View>
                                <Text style={{ color:"#fff",fontSize:12 }} ># Enterprise - VP of A&R Warner Music Group </Text>
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
                                        <View
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                flexDirection: "row",
                                            }}
                                        >
                                            <Image
                                                source={require("../../assets/artist/greengrapg.png")}
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
                                                source={require("../../assets/artist/dangergraph.png")}
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
                                            source={require("../../assets/artist/badge5.png")}
                                            style={{ width: 70, height: 80 }}
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
                                            source={require("../../assets/fitbit-token.png")}
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
                                <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../../assets/artist/artist2.png')} />
                                <Image style={{ width: 200, height: 45 }} source={require('../../assets/artist/Graph.png')} />
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                <View>
                                    <View style={{ flexDirection:"row",alignItems:"center" }} >
                                        <Text style={{ color: "#fff", fontSize: 16 }} >Niken Dewanil </Text>
                                        <View style={{ backgroundColor: "#35C112" ,paddingHorizontal:5,paddingVertical:3,borderRadius:10 }} >
                                            <FontAwesome name="dollar" size={10} color="white" />
                                        </View>
                                    </View>
                                    <Text style={{ color: "#fff", fontSize: 14 }} >Los Angeles, CA . <Image source={require('../../assets/artist/usa-flag.png')} /> </Text>
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
                        <View style={{ backgroundColor: "#4B4B4C", padding: 10, borderRadius: 5, marginTop: 15 }} >
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../../assets/artist/Russ.png')} />
                                <Image style={{ width: 200, height: 45 }} source={require('../../assets/artist/greenGraph.png')} />
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                <View>
                                    <View style={{ flexDirection:"row",alignItems:"center" }} >
                                        <Text style={{ color: "#fff", fontSize: 16 }} >Russ </Text>
                                        <View style={{ backgroundColor: "#49C3EB" ,paddingHorizontal:3,paddingVertical:3,borderRadius:10 }} >
                                            {/* <FontAwesome name="dollar" size={10} color="white" /> */}
                                            <Entypo name="check" size={10} color="white" />
                                        </View>
                                    </View>
                                    <Text style={{ color: "#fff", fontSize: 14 }} >New York, NY . <Image source={require('../../assets/artist/usa-flag.png')} /> </Text>
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
                                    <TouchableOpacity onPress={() => navigation.navigate('UserPage3')} >
                                        <Text style={{ color: "#fff", borderColor: "#fff", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }} >View profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        width: "100%",
        marginTop: 50
    },

    bottom: {
        marginBottom: 0,
        marginTop: "auto",
    },
});

export default UserPage2