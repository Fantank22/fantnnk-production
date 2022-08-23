import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    headerButton: {
        paddingHorizontal: 25,
        paddingVertical: 5,
        borderRadius: 30,
        marginRight: 10,
    },
    notificationContainer: {
        marginHorizontal: 15,
        marginTop: 20
    },
    notificationItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 5
    },
    notificationItem2: {
        flexDirection: "row",
        alignItems: "center",
    },
    notificationContant: {
        flexDirection: "row",
        alignItems: "center"
    },
    notificationTitle: {
        color: "#FFF"
    },
    notificationTitle2: {
        color: "#FFF", fontSize: 12
    },
    title: {
        color: "#FFF"
    }
})