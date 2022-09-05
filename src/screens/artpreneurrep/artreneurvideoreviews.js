import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import WebView from 'react-native-webview'
import { Platform } from 'react-native'

export const ArtreneurVideoReviews = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="light" />
            <ScrollView>
                <View style={{ paddingHorizontal: 15 }} >
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
                        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff", textAlign: "center", marginTop: 20 }} >Hear from Artrepreneurs & Clients </Text>
                    <Text style={{ fontSize: 12, color: "#EDEDED", textAlign: "center", paddingHorizontal: 25, marginTop: 10 }} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. . </Text>
                </View>
                <View>
                </View>
                <View style={{ paddingHorizontal: 15, marginTop: 20 }} >
                    <WebView
                        flexGrow={0}
                        scalesPageToFit={true}
                        bounces={false}
                        javaScriptEnabled
                        style={{ height: 211, backgroundColor: "#000", flexGrow: 0 }}
                        source={{ html: ` <iframe width="100%" height="100%" src="https://player.vimeo.com/video/183338093?h=460fed8b62" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `, }}
                        automaticallyAdjustContentInsets={true}
                    />
                    <WebView
                        scalesPageToFit={true}
                        bounces={false}
                        javaScriptEnabled
                        style={{ height: 211, backgroundColor: "#000" }}
                        source={{ html: ` <iframe width="100%" height="100%" src="https://player.vimeo.com/video/183338093?h=460fed8b62" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `, }}
                        automaticallyAdjustContentInsets={true}
                    />
                    <WebView
                        scalesPageToFit={true}
                        bounces={false}
                        javaScriptEnabled
                        style={{ height: 211, backgroundColor: "#000" }}
                        source={{ html: ` <iframe width="100%" height="100%" src="https://player.vimeo.com/video/183338093?h=460fed8b62" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `, }}
                        automaticallyAdjustContentInsets={true}
                    />
                    <WebView
                        scalesPageToFit={true}
                        bounces={false}
                        javaScriptEnabled
                        style={{ height: 211, backgroundColor: "#000" }}
                        source={{ html: ` <iframe width="100%" height="100%" src="https://player.vimeo.com/video/183338093?h=460fed8b62" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `, }}
                        automaticallyAdjustContentInsets={true}
                    />
                </View>

            </ScrollView>
            <View style={{ position: "absolute", bottom: 0, width: "100%" }} >
                <View style={styles.headerTab}>
                    <TouchableOpacity onPress={() => navigation.navigate('ArtreneurTextReviews')} style={styles.activeTab} >
                        <Text style={{ color: "#378EF0", fontSize: 16, textAlign: "center" }} >Text Reviews</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.allTab} >
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }} >Video Reviews</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <Image
                style={styles.bgImage1}
                source={require('../../common/assets/images/3.png')}
            />
            <Image
                style={styles.bgImage2}
                source={require('../../common/assets/images/5.png')}
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
    rating: {
        backgroundColor: "red"
    },
    bgImage1: {
        position: "absolute",
        top: 40,
        right: 0,
        zIndex: -1000
    },
    bgImage2: {
        position: "absolute",
        bottom: 20,
        left: 0,
        zIndex: -1000
    },
    headerTab: {
        flexDirection: "row",
        backgroundColor: "#1A1A1A",
        justifyContent: 'space-between'

    },
    activeTab: {
        alignSelf: "center",
        paddingVertical: 20,
        width: "50%",
    },
    allTab: {
        alignSelf: "center",
        paddingVertical: 20,
        borderTopColor: "#378EF0",
        borderTopWidth: 3,
        width: "50%",
    }
})
