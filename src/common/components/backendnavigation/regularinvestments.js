import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'

export const RegularInvestments = () => {
    return (
        <View style={{ marginTop: 20 }} >
            <LineChart

                data={{
                    labels: ['0', '1D', '1W', '1M', '3M', '6M', '12M', 'All'],
                    datasets: [{
                        data: [
                            0,
                            50,
                            100,
                            150,
                            100,
                            50
                        ]
                    }]
                }}
                width={Dimensions.get('window').width - 32}
                height={220}
                chartConfig={{
                    backgroundColor: '#1B1B1B',
                    backgroundGradientFrom: '#1B1B1B',
                    backgroundGradientTo: '#1B1B1B',
                    decimalPlaces: 1,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 1,
                    }
                }}
                bezier
                style={{
                    borderColor: "#414141",
                    borderWidth: 1,
                    borderRadius: 5
                }}
            />
        </View>

    )
}


const styles = StyleSheet.create({})