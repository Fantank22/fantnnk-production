import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Platform, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Slider } from 'native-base';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RankingTab } from '../../common/components';

export const ProjectDetails = ({ navigation }) => {
    const [onChangeValue, setOnChangeValue] = React.useState(50);
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/financialservicesprojectlistings/projectdetails.png')} style={{ height: 211, width: "100%", borderRadius: 10, marginTop: 20, }} >
                    <View style={{ alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.29)", paddingVertical: 20 }} >
                        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }} >Niken Dewanil</Text>
                        <Text style={{ fontSize: 12, color: "#E0E0E0" }} >Album & Tour</Text>
                    </View>
                </ImageBackground>
                <View style={{ backgroundColor: "#252525", padding: 20, marginHorizontal: 15, marginTop: -30, borderRadius: 5, marginBottom: 10 }} >
                    <View style={{}} >
                        <Text style={{ color: '#E0E0E0', fontSize: 12 }} >$1,250,000 USD offering</Text>
                        <Slider w="100%" defaultValue={onChangeValue} colorScheme="blue" size="lg" onChange={v => {
                            setOnChangeValue(Math.floor(v));
                        }}  >
                            <Slider.Track p={1.5} >
                                <Slider.FilledTrack py={1} my={.5} mx={.5} borderRadius={10} />
                            </Slider.Track>
                        </Slider>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                            <Text style={{ color: '#E0E0E0', fontSize: 12 }}>{onChangeValue}%</Text>
                            <Text style={{ color: '#E0E0E0', fontSize: 12 }}>60 days left</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('FinancialServicesNft')} >
                        <View style={{ borderColor: "#B8B8B8", borderWidth: 1, paddingVertical: Platform.OS === "ios" ? 15 : 10, borderRadius: 5, marginTop: 20 }} >
                            <Text style={{ color: "#fff", textAlign: "center" }} >Invest Now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: "#252525", padding: 20, borderRadius: 5, marginVertical: 10, marginHorizontal: 10 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                        <View>
                            <Text style={{ fontSize: 13, fontWeight: "bold", color: "#EFEFEF" }} >Content Score</Text>
                            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#FCFCFC" }} >1456.76</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <Ionicons name="arrow-up-sharp" size={24} color="#83BF6E" />
                                <Text style={{ color: "#83BF6E", fontWeight: "bold" }}  >37.8%</Text>
                                <Text style={{ color: "#6F767E", fontWeight: "bold" }} >this week</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../../common/assets/images/financialservicesprojectlistings/contentscore.png')} />
                        </View>

                    </View>
                </View>
                <View style={{ margin: 10 }} >
                    <RankingTab />
                </View>
                <View style={{ backgroundColor: "#1A1D1F", marginVertical: 10 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 20 }} >
                        <Text style={{ fontSize: 12, color: "#fff" }} >Type</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ fontSize: 12, color: "#fff", marginLeft: 15 }} >Raise</Text>
                            <Text style={{ fontSize: 12, color: "#fff", marginLeft: 15 }} >Summary</Text>
                            <Text style={{ fontSize: 12, color: "#fff", marginLeft: 15 }} >Status</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#23272C", paddingVertical: 20, paddingHorizontal: 10 }} >
                        <View style={{ flexDirection: "row", alignItems: "center", width: "40%" }} >
                            <View style={{ backgroundColor: "#4051DF", padding: 8, borderRadius: 20 }} >
                                <Entypo name="circle" size={18} color="white" />
                            </View>
                            <View style={{ marginLeft: 10 }} >
                                <Image style={{ height: 20, width: 64 }} source={require('../../common/assets/images/logo-text.png')} />
                                <Text style={{ color: "#FCFCFC", fontSize: 12 }} >Artrepreneur Pool</Text>
                                <Text style={{ color: "#B7B7B7", fontSize: 10 }} >Fantank Project</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ color: "#FCFCFC", fontSize: 12, marginLeft: 15 }} >$125,000</Text>
                            <Text style={{ color: "#378EF0", fontSize: 12, textDecorationLine: "underline", marginLeft: 15 }} >View</Text>
                            <View style={{ backgroundColor: "#3C4F3B", borderRadius: 5, marginLeft: 15 }} >
                                <Text style={{ color: "#83BF6E", fontSize: 12, fontWeight: "700", paddingVertical: 3, paddingHorizontal: 5 }} >open</Text>
                            </View>

                        </View>
                        {/* <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <MaterialCommunityIcons style={{ transform: [{ rotate: "45deg" }], position: 'absolute', left: 0 }} name="square-outline" size={14} color="#E0E0E0" />
                            <Text style={{ color: "#fff", marginLeft: 20 }} >EC</Text>
                        </View> */}
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 20, paddingHorizontal: 10 }} >
                        <View style={{ flexDirection: "row", alignItems: "center", width: "40%" }} >
                            <View style={{ backgroundColor: "#4051DF", padding: 8, borderRadius: 20 }} >
                                <Entypo name="circle" size={18} color="white" />
                            </View>
                            <View style={{ marginLeft: 10 }} >
                                <Image style={{ height: 20, width: 64 }} source={require('../../common/assets/images/logo-text.png')} />
                                <Text style={{ color: "#FCFCFC", fontSize: 12 }} >Accredited Individuals Investor Pool</Text>
                                <Text style={{ color: "#B7B7B7", fontSize: 10 }} >Fantank Project</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ color: "#FCFCFC", fontSize: 12, marginLeft: 15 }} >$1,50,000</Text>
                            <Text style={{ color: "#378EF0", fontSize: 12, textDecorationLine: "underline", marginLeft: 15 }} >View</Text>
                            <View style={{ backgroundColor: "#2A352B", borderRadius: 5, marginLeft: 15 }} >
                                <Text style={{ color: "#FF6A55", fontSize: 12, fontWeight: "700", paddingVertical: 3, paddingHorizontal: 5 }} >closed</Text>
                            </View>

                        </View>
                        {/* <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <MaterialCommunityIcons style={{ transform: [{ rotate: "45deg" }], position: 'absolute', left: 0 }} name="square-outline" size={14} color="#E0E0E0" />
                            <Text style={{ color: "#fff", marginLeft: 20 }} >EC</Text>
                        </View> */}
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#23272C", paddingVertical: 20, paddingHorizontal: 10 }} >
                        <View style={{ flexDirection: "row", alignItems: "center", width: "40%" }} >
                            <View style={{ backgroundColor: "#4051DF", height: 30, width: 30, borderRadius: 15 }} >
                                {/* <Entypo name="circle" size={18} color="white" /> */}
                                <MaterialCommunityIcons style={{ transform: [{ rotate: "45deg" }], position: 'absolute', left: 6, top: 6 }} name="square-outline" size={18} color="#E0E0E0" />
                            </View>
                            <View style={{ marginLeft: 10 }} >
                                <Image style={{ height: 20, width: 64 }} source={require('../../common/assets/images/logo-text.png')} />
                                <Text style={{ color: "#FCFCFC", fontSize: 12 }} >Equity Crowdfunding</Text>
                                <Text style={{ color: "#B7B7B7", fontSize: 10 }} >Fantank Project</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ color: "#FCFCFC", fontSize: 12, marginLeft: 15 }} >$500,000</Text>
                            <Text style={{ color: "#378EF0", fontSize: 12, textDecorationLine: "underline", marginLeft: 15 }} >View</Text>
                            <View style={{ backgroundColor: "#252B43", borderRadius: 5, marginLeft: 15 }} >
                                <Text style={{ color: "#378EF0", fontSize: 12, fontWeight: "700", paddingVertical: 3, paddingHorizontal: 5, textDecorationLine: "underline", }} >invest</Text>
                            </View>

                        </View>
                        {/* <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <MaterialCommunityIcons style={{ transform: [{ rotate: "45deg" }], position: 'absolute', left: 0 }} name="square-outline" size={14} color="#E0E0E0" />
                            <Text style={{ color: "#fff", marginLeft: 20 }} >EC</Text>
                        </View> */}
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 20, paddingHorizontal: 10 }} >
                        <View style={{ flexDirection: "row", alignItems: "center", width: "40%" }} >
                            <View style={{ backgroundColor: "#4051DF", padding: 8, borderRadius: 20 }} >
                                {/* <Entypo name="circle" size={18} color="white" /> */}
                                <MaterialCommunityIcons name="square-outline" size={18} color="white" />
                            </View>
                            <View style={{ marginLeft: 10 }} >
                                <Image style={{ height: 20, width: 64 }} source={require('../../common/assets/images/logo-text.png')} />
                                <Text style={{ color: "#FCFCFC", fontSize: 12 }} >NFT</Text>
                                <Text style={{ color: "#B7B7B7", fontSize: 10 }} >Fantank Project</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ color: "#FCFCFC", fontSize: 12, marginLeft: 15 }} >$500,000</Text>
                            <Text style={{ color: "#378EF0", fontSize: 12, textDecorationLine: "underline", marginLeft: 15 }} >View</Text>
                            <View style={{ backgroundColor: "#252B43", borderRadius: 5, marginLeft: 15 }} >
                                <Text style={{ color: "#378EF0", fontSize: 12, fontWeight: "700", paddingVertical: 3, paddingHorizontal: 5, textDecorationLine: "underline", }} >invest</Text>
                            </View>

                        </View>
                        {/* <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <MaterialCommunityIcons style={{ transform: [{ rotate: "45deg" }], position: 'absolute', left: 0 }} name="square-outline" size={14} color="#E0E0E0" />
                            <Text style={{ color: "#fff", marginLeft: 20 }} >EC</Text>
                        </View> */}
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#23272C", paddingVertical: 20, paddingHorizontal: 10 }} >
                        <View style={{ flexDirection: "row", alignItems: "center", width: "40%" }} >
                            <View style={{ backgroundColor: "#4051DF", padding: 8, borderRadius: 20 }} >
                                <Entypo name="circle" size={18} color="white" />
                            </View>
                            <View style={{ marginLeft: 10 }} >
                                <Image style={{ height: 20, width: 64 }} source={require('../../common/assets/images/logo-text.png')} />
                                <Text style={{ color: "#FCFCFC", fontSize: 12 }} >SPAC </Text>
                                <Text style={{ color: "#B7B7B7", fontSize: 10 }} >Fantank Project</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ color: "#FCFCFC", fontSize: 12, marginLeft: 15 }} >$0</Text>
                            <Text style={{ color: "#646262", fontSize: 12, textDecorationLine: "underline", marginLeft: 15 }} >inactive</Text>
                            <View style={{ backgroundColor: "#4D4D58", borderRadius: 5, marginLeft: 15 }} >
                                <Text style={{ color: "#9C9A9A", fontSize: 12, fontWeight: "700", paddingVertical: 3, paddingHorizontal: 5 }} >inactive</Text>
                            </View>

                        </View>
                        {/* <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <MaterialCommunityIcons style={{ transform: [{ rotate: "45deg" }], position: 'absolute', left: 0 }} name="square-outline" size={14} color="#E0E0E0" />
                            <Text style={{ color: "#fff", marginLeft: 20 }} >EC</Text>
                        </View> */}
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, backgroundColor: "#2C2C2C", paddingVertical: 15, marginBottom: 50 }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <View style={{ height: 32, width: 16, borderRadius: 5, backgroundColor: "#4051DF" }} />
                        <Text style={{ color: "#E0E0E0", fontSize: 18, fontWeight: "bold", marginLeft: 15 }} >Total Raise</Text>
                    </View>
                    <Text style={{ color: "#FCFCFC", fontSize: 18, fontWeight: "bold" }} >$1,250,000</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        // paddingHorizontal: 15,
    }
})