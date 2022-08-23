import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    Animated
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Swiper from 'react-native-swiper'
import { Buttons } from "../../common";

export const OnBoarding = ({ navigation }) => {



    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ImageBackground
                source={require("../../common/assets/images/auth/onBoarding.png")}
                style={styles.image}
            >
                <View style={styles.logoImage}>
                    <Image source={require("../../common/assets/images/colorLogoText.png")} />
                </View>
            </ImageBackground>
            <View style={styles.carouselContainer}>
                <Swiper
                    bounces={true}
                    containerStyle={{ height: 216, maxHeight: 150 }}
                    showsPagination={true}
                    autoplay
                    loop
                    dot={<Animated.View style={{ backgroundColor: "#C4C4C4", width: 10, height: 10, borderRadius: 5, marginHorizontal: 5 }}></Animated.View>}
                    activeDot={<Animated.View style={{ backgroundColor: '#378EF0', width: 20, height: 10, borderRadius: 5, marginHorizontal: 5 }}></Animated.View>}>
                    <View style={styles.slide}>
                        <Text style={styles.title} >Arts & Entertainment Ecosystem</Text>
                        <Text style={styles.title} >+</Text>
                        <Text style={styles.title}>Talent Scouting Crowd Intelligence</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.title}  >Blockchain Architecture</Text>
                        <Text style={styles.title} >+</Text>
                        <Text style={styles.title} >DAO and Transparency</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text style={styles.title}  >ARTREPRENEURSHIP</Text>
                        <Text style={styles.title} >+</Text>
                        <Text style={styles.title} >NOW!</Text>
                    </View>
                </Swiper>
            </View>
            <View>
                <TouchableOpacity

                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.joinUsBtn}>Join Us</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.loginBtn}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    image: {
        height: 340,
        width: '100%',
    },
    logoImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    carouselContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "100",
    },
    slide: {
        alignItems: "center",
    },
    joinUsBtn: {
        color: "white",
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: "#378EF0",
        textAlign: "center",
        padding: 20,
        borderRadius: 4,
        fontSize: 16
    },
    loginBtn: {
        color: "white",
        marginBottom: 50,
        borderWidth: 1,
        borderColor: "#378EF0",
        textAlign: "center",
        marginLeft: 30,
        marginRight: 30,
        padding: 20,
        borderRadius: 4,
        fontSize: 16
    },
});
