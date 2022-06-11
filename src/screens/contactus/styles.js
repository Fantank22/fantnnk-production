import { StyleSheet, Platform } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === 'ios' ? 0 : 35
    },
    topBanner: {
        height: 190,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center"

    },
    bannerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff"
    },
    backIcon: {
        position: "absolute",
        top: 15, left: 15
    },
    subtitle: {
        color: "#EFEFEF",
        textAlign: "center",
        paddingHorizontal: 50,
        marginTop: 20
    },
    reportTitle: {
        fontSize: 16,
        color: "#E0E0E0",
        marginVertical: 15
    },
    separetor: {
        borderColor: "#646262",
        borderWidth: 1,
        marginBottom: 10
    },
    mainContant: {
        paddingHorizontal: 15
    },
    singleItems: {
        backgroundColor: "#252525",
        marginVertical: 10,
        borderRadius: 5,
        marginHorizontal: 15
    },
    itemTitle: {
        color: "#fff"
    },
    itemHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#7C7C7C",
        borderBottomWidth: 1,
        padding: 10,
    },
    optionTitle: {
        fontSize: 12,
        color: "#B7B7B7",
        marginLeft: -10
    },
    optionContant: {
        paddingHorizontal: 10
    },
    messageContant: {
        backgroundColor: "#252525",
        marginHorizontal: 15,
        padding: 20,
        borderRadius: 5,
        marginTop: 20
    },
    messageTitle: {
        fontSize: 18,
        color: "#ececec",
        marginVertical: 10
    },
    maxNumber: {
        color: "#9C9A9A",
        fontSize: 10,
        textAlign: "right",
    },
    goButton: {
        backgroundColor: "#378EF0",
        paddingVertical: Platform.OS === 'ios' ? 20 : 15,
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 10
    },
    goButtonText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#fff"
    },
    footerContant: {
        marginVertical: 20,
        marginHorizontal: 15
    },
    footerLogo: {
        height: 30,
        width: 96,
        alignSelf: "center",
        marginVertical: 10
    },
    socialContant: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    facebookShare: {
        backgroundColor: "#0C1424",
        borderColor: "#929EFF",
        borderWidth: 2,
        height: 40,
        width: 70,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"

    },
    twitterShare: {
        backgroundColor: "#0C1424",
        borderColor: "#1EA1F2",
        borderWidth: 2,
        height: 40,
        width: 70,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 15

    },
    instagramShare: {
        backgroundColor: "#0C1424",
        borderColor: "#EC8C8C",
        borderWidth: 2,
        height: 40,
        width: 70,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"

    }

})