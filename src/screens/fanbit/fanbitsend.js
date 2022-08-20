import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Buttons } from "../../common";

export const FanbitSend = ({ navigation, route }) => {
    const { data } = route.params
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Entypo style={{ marginLeft: 15 }} name="cross" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{data.token} FanBit</Text>
                <Text style={styles.subtitle}>Transfered to you</Text>
            </View>
            <View style={styles.imageContainer}>
                <View style={styles.userimageBorder}>
                    <Image
                        style={styles.userImage}
                        source={require("../../common/assets/images/fanbit/monthlybadge.png")}
                    />
                    <View style={styles.chcekIcon} >
                        <AntDesign
                            name="check"
                            size={15}
                            color="#fff"
                        />
                    </View>
                </View>
                <View style={styles.varticalLine}></View>
                <View style={styles.fitbitTokenBorder}>
                    <Image
                        style={styles.fitbitTokenImage}
                        source={require("../../common/assets/images/artistlist/fitbit-token.png")}
                    />
                </View>
                <View style={styles.varticalLine}></View>
                <View style={styles.artistimageBorder}>
                    <Image
                        style={styles.userImage}
                        source={require("../../common/assets/images/artistlist/artist-user-img.png")}
                    />
                    <View style={styles.chcekIcon}>
                        <AntDesign
                            name="check"
                            size={15}
                            color="#fff"
                        />
                    </View>
                </View>
            </View>
            <View style={{ position: "absolute", bottom: 100, marginHorizontal: 20 }} >
                <Buttons style={{ width: Dimensions.get('screen').width - 40, alignSelf: "center" }} fillBtn title={'Done'} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: 50,
    },
    titleContainer: {
        marginTop: 40,
    },
    title: {
        color: "white",
        fontSize: 28,
        alignSelf: "center",
    },
    subtitle: {
        color: "#D0D0D0",
        fontSize: 18,
        alignSelf: "center",
    },
    imageContainer: {
        alignItems: "center",
    },
    userimageBorder: {
        borderColor: "#35C112",
        borderWidth: 3,
        width: 63,
        height: 63,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%",
        position: "relative",
    },
    artistimageBorder: {
        borderColor: "#35C112",
        borderWidth: 3,
        width: 63,
        height: 63,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fitbitTokenBorder: {
        borderColor: "#35C112",
        borderWidth: 3,
        width: 38,
        height: 38,
        borderRadius: 19,
        alignItems: "center",
        justifyContent: "center",
    },
    fitbitTokenImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    highlightText: {
        color: "white",
        fontSize: 20,
    },
    date: {
        fontSize: 12,
        color: "#C4C4C4",
        alignSelf: "center",
        marginVertical: 5,
    },
    feedback: {
        color: "white",
        fontSize: 14,
        alignSelf: "center",
        marginTop: 70,
    },
    optional: {
        fontSize: 9,
        color: "#888888",
    },
    buttons: {
        marginTop: 100,
    },

    varticalLine: {
        borderColor: "#35C112",
        borderWidth: 2,
        height: 70,
    },
    chcekIcon: {
        backgroundColor: "#35C112",
        borderRadius: 20,
        padding: 2,
        position: "absolute",
        bottom: -5,
        right: -5,
    },
});
