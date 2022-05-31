import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export const TabView = ({ navigation }) => {
    const [index, setIndex] = React.useState(1)
    const tabs = [{ title: "SCOUTS", link: "TextReviewsArtrepreneurRep" }, { title: "ARTISTS", link: "VideoReviewsArtrepreneurRep" }, { title: "BOTH", link: "VideoReviewsArtrepreneurRep" }]
    return (
        <View>
            <View style={styles.headerTab}>
                {
                    tabs.map((t, i) => (

                        <TouchableWithoutFeedback key={i} onPress={() => console.log('1')} >
                            <View style={i + 1 === index ? styles.activeTab : styles.allTab}>
                                <Text onPress={() => setIndex(i + 1)}
                                    style={{ color: "#fff" }}
                                >
                                    {t.title}</Text>
                            </View>
                        </TouchableWithoutFeedback>

                    ))
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerTab: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#0C1424",
        borderColor: "#378EF0",
        borderWidth: 1,
        borderRadius: 30,
        padding: 2
    },
    allTab: {
        fontSize: 16,
        color: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 15
    },
    activeTab: {
        fontSize: 16,
        color: "#fff",
        backgroundColor: "#378EF0",
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 15


    }
})
