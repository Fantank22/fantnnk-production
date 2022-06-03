import { ImageBackground, Platform, StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import { HStack } from 'native-base';
import { LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

export const ScoutingStats = ({ navigation }) => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [
            {
                data: [24, 55, 40, 60, 65, 73, 85, 97, 108, 150],
                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                color: (opacity = 1) => `rgb(51, 172, 242, ${opacity})`, // optional
                // backgroundColor: (opacity = 1) => `rgb(51, 172, 242, ${opacity})`, 
                strokeWidth: 2 // optional
            },
            {
                data: [44, 75, 60, 80, 95, 93, 105, 107, 118, 160],
                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                color: (opacity = 1) => `rgb(51, 172, 242, ${opacity})`, // optional
                // backgroundColor: (opacity = 1) => `rgb(51, 172, 242, ${opacity})`, 
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Digital Talent Scouts ", "Artrepreneurs"] // optional
    };
    const chartConfig = {
        backgroundGradientFrom: "#33ACF2",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgb(51, 172, 242, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    return (
        <View style={styles.container} >
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/scouts/StatsBanner.png')} style={{ height: 190, paddingHorizontal: 15 }} >
                    <View style={{ marginTop: Platform.OS === 'ios' ? 35 : 10, flexDirection: "row", alignItems: "center" }} >
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                            <AntDesign name="arrowleft" size={24} color="white" />
                        </TouchableWithoutFeedback>
                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700", marginLeft: 15 }} >Stats</Text>
                    </View>

                    <View style={{ marginTop: Platform.OS === 'ios' ? 45 : 50 }} >
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }} >Badges Activity</Text>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} >
                            <TouchableWithoutFeedback onPress={() => console.log('first')} >
                                <View style={{ backgroundColor: "#fff", paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginRight: 10 }} >
                                    <Text>Scout Type</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => console.log('first')} >
                                <View style={{ borderColor: "#AEAEAE", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginRight: 10 }} >
                                    <Text style={{ color: "#AEAEAE" }} ># of Badges</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => console.log('first')} >
                                <View style={{ borderColor: "#AEAEAE", borderWidth: 1, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginRight: 10 }} >
                                    <Text style={{ color: "#AEAEAE" }} >Badge Level </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                </ImageBackground>
                <View style={{ paddingHorizontal: 15 }} >
                    <View style={{ borderColor: "#646060", borderWidth: 1, borderRadius: 10, marginVertical: 20, backgroundColor: "#1E1C1C" }} >
                        <HStack backgroundColor={"#3C559E"} alignItems={"center"} justifyContent={"space-between"} p={5} borderTopLeftRadius={9} borderTopRightRadius={9} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Scout Type</Text>
                            <Text style={{ color: "#fff", fontWeight: "700" }} >+ / - % (YTD)</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >Digital Talent Scouts </Text>
                            <HStack alignItems={'center'} >
                                <Text style={{ color: "#fff" }} >395</Text>
                                <Entypo name="dot-single" size={24} color="#7C7A7A" />
                                <Feather name="arrow-up" size={16} color="#35C112" />
                                <Text style={{ color: "#35C112", fontSize: 12 }} >87.2%</Text>
                            </HStack>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >Digital Talent Scouts </Text>
                            <HStack alignItems={'center'} >
                                <Text style={{ color: "#fff" }} >58</Text>
                                <Entypo name="dot-single" size={24} color="#7C7A7A" />
                                <Feather name="arrow-down" size={16} color="#FB4B4B" />
                                <Text style={{ color: "#FB4B4B", fontSize: 12 }} >12.8%</Text>
                            </HStack>
                        </HStack>
                        <View style={{ borderColor: "#646060", borderWidth: 1, marginHorizontal: 10 }} />

                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} mb={10} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Total </Text>
                            <HStack alignItems={'center'} >
                                <Text style={{ color: "#fff" }} >453</Text>
                                <Entypo name="dot-single" size={24} color="#7C7A7A" />
                                <Feather name="arrow-up" size={16} color="#35C112" />
                                <Text style={{ color: "#35C112", fontSize: 12 }} >100%</Text>
                            </HStack>
                        </HStack>

                        <LineChart
                            data={data}
                            width={screenWidth - 30}
                            height={220}
                            chartConfig={chartConfig}
                        />

                    </View>
                </View>
                <View style={{ paddingHorizontal: 15 }} >
                    <View style={{ borderColor: "#646060", borderWidth: 1, borderRadius: 10, marginVertical: 20, backgroundColor: "#1E1C1C" }} >
                        <HStack backgroundColor={"#3C559E"} alignItems={"center"} justifyContent={"space-between"} p={5} borderTopLeftRadius={9} borderTopRightRadius={9} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Badge Level </Text>
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Commissions (YTD)</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge1.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 1</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge2.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 2</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge3.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 3</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge4.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 4</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge5.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 5</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge6.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 6</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge7.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 7</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge8.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 8</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge9.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 9</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} py={2} px={1} mx={5} my={2} backgroundColor={'#343333'} borderRadius={5} >
                            <HStack alignItems={'center'} >
                                <Image style={{ width: 40, height: 29 }} source={require('../../common/assets/images/badge/badge10.png')} />
                                <Text style={{ color: "#D6D6D6", }} >Badge 10</Text>
                            </HStack>
                            <Text style={{ color: "#fff" }} >$18,915</Text>
                        </HStack>
                        <View style={{ borderColor: "#646060", borderWidth: 1, marginHorizontal: 15, marginVertical: 10 }} />
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} mb={10} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Total </Text>
                            <Text style={{ color: "#fff", fontWeight: "700" }} >$50,389</Text>
                        </HStack>

                        <View style={{ padding: 10 }} >
                            <ImageBackground source={require('../../common/assets/images/scouts/badgeGraphbg.png')} style={{ height: 226, justifyContent: "flex-end" }} >
                                <HStack justifyContent={'space-between'} alignItems={'flex-end'} >
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 30, width: 14.15, backgroundColor: "#41D0AE", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge1.png')} />
                                    </HStack>
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 37, width: 14.15, backgroundColor: "#41D0AE", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge2.png')} />
                                    </HStack>
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 55, width: 14.15, backgroundColor: "#41D0AE", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge3.png')} />
                                    </HStack>
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 79, width: 14.15, backgroundColor: "#00348A", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge4.png')} />
                                    </HStack>
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 105, width: 14.15, backgroundColor: "#00348A", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge5.png')} />
                                    </HStack>
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 141, width: 14.15, backgroundColor: "#00348A", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge6.png')} />
                                    </HStack>
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 157, width: 14.15, backgroundColor: "#F5BC20", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge7.png')} />
                                    </HStack>
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 171, width: 14.15, backgroundColor: "#F5BC20", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge8.png')} />
                                    </HStack>
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 181, width: 14.15, backgroundColor: "#F5BC20", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge9.png')} />
                                    </HStack>
                                    <HStack flexDirection={'column'} alignItems={'center'} >
                                        <View style={{ height: 187, width: 14.15, backgroundColor: "#8A0C62", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} ></View>
                                        <Image style={{ width: 30, height: 19 }} source={require('../../common/assets/images/badge/badge10.png')} />
                                    </HStack>
                                </HStack>

                            </ImageBackground>
                        </View>

                    </View>
                </View>

                <View style={{ paddingHorizontal: 15 }} >
                    <View style={{ borderColor: "#646060", borderWidth: 1, borderRadius: 10, marginVertical: 20, backgroundColor: "#1E1C1C" }} >
                        <HStack backgroundColor={"#3C559E"} alignItems={"center"} justifyContent={"space-between"} p={5} borderTopLeftRadius={9} borderTopRightRadius={9} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Geography of Reps</Text>
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Numbers</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >United Kingdom </Text>
                            <Text style={{ color: "#fff" }} >40</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >Canada</Text>
                            <Text style={{ color: "#fff" }} >12</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >London</Text>
                            <Text style={{ color: "#fff" }} >01</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >Australia</Text>
                            <Text style={{ color: "#fff" }} >04</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >All Other</Text>
                            <Text style={{ color: "#fff" }} >01</Text>
                        </HStack>
                        <View style={{ borderColor: "#646060", borderWidth: 1, marginHorizontal: 10, marginVertical: 10 }} />

                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} mb={10} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Total </Text>
                            <Text style={{ color: "#fff", fontWeight: "700" }} >58</Text>
                        </HStack>

                        <View style={{ padding:10 }} >
                            <Image style={{ width: "100%" }} source={require('../../common/assets/images/scouts/map.png')} />
                        </View>

                        <HStack space={5} justifyContent={'center'} px={10} flexWrap={'wrap'} >
                            <HStack my={2} space={1} >
                                <View style={{ height: 13, width: 15, backgroundColor: "#FF914D", borderRadius: 3 }} />
                                <Text style={{ fontSize: 12, color: "#fff" }} >USA</Text>
                            </HStack>
                            <HStack my={2} space={1} >
                                <View style={{ height: 13, width: 15, backgroundColor: "#8C52FF", borderRadius: 3 }} />
                                <Text style={{ fontSize: 12, color: "#fff" }} >Canada</Text>
                            </HStack>
                            <HStack my={2} space={1} >
                                <View style={{ height: 13, width: 15, backgroundColor: "#FFDE59", borderRadius: 3 }} />
                                <Text style={{ fontSize: 12, color: "#fff" }} >United Kingdom</Text>
                            </HStack>
                            <HStack my={2} space={1} >
                                <View style={{ height: 13, width: 15, backgroundColor: "#03989E", borderRadius: 3 }} />
                                <Text style={{ fontSize: 12, color: "#fff" }} >Australia</Text>
                            </HStack>
                            <HStack my={2} space={1} >
                                <View style={{ height: 13, width: 15, backgroundColor: "#6F7676", borderRadius: 3 }} />
                                <Text style={{ fontSize: 12, color: "#fff" }} >Others</Text>
                            </HStack>
                        </HStack>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 15 }} >
                    <View style={{ borderColor: "#646060", borderWidth: 1, borderRadius: 10, marginVertical: 20, backgroundColor: "#1E1C1C" }} >
                        <HStack backgroundColor={"#3C559E"} alignItems={"center"} justifyContent={"space-between"} p={5} borderTopLeftRadius={9} borderTopRightRadius={9} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Perks</Text>
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Numbers</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >Apparel Qualify</Text>
                            <Text style={{ color: "#fff" }} >01</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >Event VIP Status</Text>
                            <Text style={{ color: "#fff" }} >00</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >Car Lease Program</Text>
                            <Text style={{ color: "#fff" }} >00</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >Profit Sharing</Text>
                            <Text style={{ color: "#fff" }} >00</Text>
                        </HStack>
                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} >
                            <Text style={{ color: "#fff" }} >Equity Vesting</Text>
                            <Text style={{ color: "#fff" }} >00</Text>
                        </HStack>
                        <View style={{ borderColor: "#646060", borderWidth: 1, marginHorizontal: 10, marginVertical: 10 }} />

                        <HStack justifyContent={'space-between'} alignItems={'center'} px={5} my={2} mb={10} >
                            <Text style={{ color: "#fff", fontWeight: "700" }} >Total </Text>
                            <Text style={{ color: "#fff", fontWeight: "700" }} >01</Text>
                        </HStack>



                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    }
})