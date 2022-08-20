import { Image, StyleSheet, Text, Dimensions, View } from 'react-native'
const screenWidth = Dimensions.get("window").width;
import { LineChart, } from "react-native-chart-kit";
import React from 'react'
const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [5000, 4000, 3000, 2000, 1000, 500, 0],
            color: (opacity = 1) => `#67E43A`, // optional
            strokeWidth: 3 // optional
        },
        {
            data: [500, 400, 300, 200, 100, 500, 0],
            color: (opacity = 1) => `#E43A3A`, // optional
            strokeWidth: 3 // optional
        },
    ],

    legend: [" Artists to Influ..", 'Scouts to Artists '] // optional 
}


export const PosRevenue = () => {
    return (
        <View style={{ marginHorizontal: 15 }} >
            <Text style={styles.title}>POS Revenue & Scouting Commissions</Text>
            <View>

                <LineChart
                    showBarTops={false}
                    withVerticalLabels={true}
                    data={data}
                    width={screenWidth - 30}
                    height={256}
                    chartConfig={{
                        backgroundColor: "transparent",
                        backgroundGradientFrom: "transparent",
                        backgroundGradientTo: "transparent",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `transparent`,
                        labelColor: (opacity = 1) => `#fff`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "0",
                        }
                    }}
                    bezier
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        color: "#E6E6E6",
        fontSize: 18,
        fontWeight: "500",
        marginTop: 20

    },
})