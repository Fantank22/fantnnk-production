import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 0 : 35,
        flex: 1
    },
    bannerImage: {
        height: 216,
        width: '100%'
    },
    slide: {
        width: '100%',
        height: 216
    },
    bannerTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700"
    },
    bannerDes: {
        color: "#E0E0E0",
        fontSize: 14,
        paddingHorizontal: 60,
        textAlign: "center",
        marginTop: 20
    },
    backIcon: {
        position: "absolute",
        left: 15,
        top: 15
    },
    topContant: {
        minHeight: 216,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0
    },
    title2: {
        fontSize: 22,
        color: "#fff",
        textAlign: "center",
        marginVertical: 20
    },
    itemsTitle: {
        color: "#378EF0",
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 5
    },
    itemContant: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1A1A1A",
        padding: 15,
        borderColor: "#1F1F1F",
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5
    },
    itemTitle: {
        fontWeight: "700",
        color: "#fff"
    },
    locationTitle: {
        fontSize: 12,
        color: "#CDCACA",
    },
    descriptionContant: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:5
    },
    applyBtn: {
        borderColor: "#378EF0",
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    },
    footerTitle: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "700",
        marginTop: 30,
        marginBottom:20
    },
    locationsCard: {
        width: 300,
        borderColor: "#404040",
        borderWidth: 1,
        padding: 20,
        borderRadius: 5,
        marginRight:15
    },
    locationsFlug: {
        backgroundColor: "#343941",
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent:"center"
    },
    locationsTitle: {
        color: "#fff",
        fontWeight: "700",
        marginVertical:10
    },
    locationsDetails: {
        fontSize: 12,
        color:"#CDCACA"
    },
    mailAddress: {
        color: "#378EF0",
        fontSize: 12,
        fontWeight: "700",
        marginTop:10
    }
})