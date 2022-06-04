import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export const RankingTab = () => {
    const [index, setIndex] = useState(1);


    const Screenrander1 = () => {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.ContentImage}
                    source={require("../../assets/images/artist/Graph.png")}
                />
            </View>
        );
    };

    const oneMo = Screenrander1();
    const tabs = ["3m", "6m", "9m", "12m", "All"];
    const contants = [oneMo, oneMo, oneMo, oneMo, oneMo, oneMo];
    return (
        <View style={styles.container} >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, borderRadius: 5 }} >
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }} >Ranking Stats</Text>
                <View style={styles.headerTab}>
                    {tabs.map((t, i) => (
                        <TouchableOpacity key={t} onPress={() => setIndex(i + 1)}>
                            <View style={i + 1 === index ? styles.activeTab : styles.allTab}>
                                <Text style={i + 1 === index ? { color: "#4051DF" } : { color: "#fff" }}> {t} </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10, backgroundColor: "#25282A", paddingHorizontal: 10, marginTop: 10 }} >
                <Text style={{ fontWeight: "700", color: "#B7B7B7" }} >Content Score</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <Text style={{ fontWeight: "700", color: "#FCFCFC", marginRight: 5 }} >1 out of 20,000</Text>
                    <Ionicons name="arrow-up-sharp" size={18} color="#83BF6E" />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10, paddingHorizontal: 10 }} >
                <Text style={{ fontWeight: "700", color: "#B7B7B7" }} >FanBit Received</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <Text style={{ fontWeight: "700", color: "#FCFCFC", marginRight: 5 }} >3 out of 48,000</Text>
                    <Ionicons name="ios-arrow-down" size={18} color="#E91B2E" />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10, backgroundColor: "#25282A", paddingHorizontal: 10 }} >
                <Text style={{ fontWeight: "700", color: "#B7B7B7" }} ># of friends</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <Text style={{ fontWeight: "700", color: "#FCFCFC", marginRight: 5 }} >5 out of 76,234</Text>
                    <Ionicons name="arrow-up-sharp" size={18} color="#83BF6E" />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 10, paddingHorizontal: 10 }} >
                <Text style={{ fontWeight: "700", color: "#E0E0E0" }} >Page Views</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <Text style={{ fontWeight: "700", color: "#FCFCFC", marginRight: 5 }} >1 out of 1,000,000</Text>
                    <Ionicons name="ios-arrow-down" size={18} color="#E91B2E" />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1D1F"
    },
    ContentImage: {
        width: 240,
        height: 70,
        marginVertical: 20,
    },
    headerTab: {
        flexDirection: "row",
        alignItems: "center"
    },
    allTab: {
        marginRight: 5,
        paddingHorizontal: 2,
    },
    activeTab: {
        borderBottomColor: "#4051DF",
        borderLeftColor: "transparent",
        borderTopColor: "transparent",
        borderRightColor: "transparent",
        borderWidth: 2,
        borderRadius: 3,
        marginRight: 5,
        paddingHorizontal: 2,
    },
});