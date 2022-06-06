import { ImageBackground, Platform, StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image } from 'react-native'
import React from 'react'
import { AntDesign, } from '@expo/vector-icons';
import { HStack } from 'native-base';

export const HowItWorks = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <ScrollView>
                <ImageBackground source={require('../../common/assets/images/scouts/howItWorkBg.png')} style={{ height: 170, paddingHorizontal: 15 }} >
                    <View style={{ marginTop: Platform.OS === 'ios' ? 35 : 10, flexDirection: "row", alignItems: "center" }} >
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()} >
                            <AntDesign name="arrowleft" size={24} color="white" />
                        </TouchableWithoutFeedback>
                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700", marginLeft: 15 }} >How it works</Text>
                    </View>

                </ImageBackground>
                <View style={{ paddingHorizontal: 15 }} >
                    <View style={{ marginTop: -75 }} >
                        <View style={{ backgroundColor: "#fff", height: 34, width: 34, borderColor: "#2A85FF", borderWidth: 2, borderRadius: 17, alignItems: "center", justifyContent: "center", alignSelf: "center", marginVertical: 15 }} >
                            <Text style={{ fontSize: 18, fontWeight: "700" }} >1</Text>
                        </View>
                        <Text style={{ fontSize: 16, color: "#E8E8E8", textAlign: "center", marginHorizontal: 40 }} >Evaluate Talent By Transferring FanBit To Artists. </Text>
                        <View style={{ padding: 20, backgroundColor: "#121212", borderColor: "#535353", borderWidth: 1, borderRadius: 10, marginVertical: 20 }} >
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                                <View style={{ backgroundColor: "#252525", padding: 20, borderColor: "#2C2C2C", borderWidth: 1, borderRadius: 10 }} >
                                    <Image source={require('../../common/assets/images/scouts/qrCode.png')} />
                                </View>
                                <View style={{ borderColor: "#35C112", borderWidth: 2, width: 20 }}></View>
                                <View style={{ height: 40, width: 40, borderRadius: 23, borderColor: "#35C112", borderWidth: 2, alignItems: "center", justifyContent: "center" }} >
                                    <Image style={{ height: 30, width: 30, }} source={require('../../common/assets/images/scouts/fitbit-token.png')} />
                                </View>
                                <View style={{ borderColor: "#35C112", borderWidth: 2, width: 20 }}></View>
                                <View style={{ backgroundColor: "#252525", padding: 20, borderColor: "#2C2C2C", borderWidth: 1, borderRadius: 10 }} >
                                    <Image source={require('../../common/assets/images/scouts/microphone.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }} >
                        <View style={{ backgroundColor: "#fff", height: 34, width: 34, borderColor: "#2A85FF", borderWidth: 2, borderRadius: 17, alignItems: "center", justifyContent: "center", alignSelf: "center", marginVertical: 15 }} >
                            <Text style={{ fontSize: 18, fontWeight: "700" }} >2</Text>
                        </View>
                        <Text style={{ fontSize: 16, color: "#E8E8E8", textAlign: "center", marginHorizontal: 40 }} >FanTank Collects Your Artistry Voting Data - Creates Services & Revenue </Text>
                        <View style={{ padding: 20, backgroundColor: "#121212", borderColor: "#535353", borderWidth: 1, borderRadius: 10, marginVertical: 20 }} >
                            <View style={{ alignSelf: "center" }} >
                                <Image source={require('../../common/assets/images/scouts/GroupVoting.png')} />
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 15 }} >
                        <View style={{ backgroundColor: "#fff", height: 34, width: 34, borderColor: "#2A85FF", borderWidth: 2, borderRadius: 17, alignItems: "center", justifyContent: "center", alignSelf: "center", marginVertical: 15 }} >
                            <Text style={{ fontSize: 18, fontWeight: "700" }} >3</Text>
                        </View>
                        <Text style={{ fontSize: 16, color: "#E8E8E8", textAlign: "center", marginHorizontal: 40 }} >Earn badges tokens & increase
                            scout score</Text>
                        <View style={{ padding: 20, backgroundColor: "#121212", borderColor: "#535353", borderWidth: 1, borderRadius: 10, marginVertical: 20 }} >
                            <View style={{ alignSelf: "center" }} >
                                <Image source={require('../../common/assets/images/scouts/diagram.png')} />
                            </View>
                            <HStack alignItems={'center'} justifyContent={"center"} my={5} >
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge1.png')} />
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge2.png')} />
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge3.png')} />
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge4.png')} />
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge5.png')} />
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge6.png')} />
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge7.png')} />
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge8.png')} />
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge9.png')} />
                                <Image style={{ width: 30, height: 20 }} source={require('../../common/assets/images/badge/badge10.png')} />

                            </HStack>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }} >
                        <View style={{ backgroundColor: "#fff", height: 34, width: 34, borderColor: "#2A85FF", borderWidth: 2, borderRadius: 17, alignItems: "center", justifyContent: "center", alignSelf: "center", marginVertical: 15 }} >
                            <Text style={{ fontSize: 18, fontWeight: "700" }} >4</Text>
                        </View>
                        <Text style={{ fontSize: 16, color: "#E8E8E8", textAlign: "center", marginHorizontal: 40 }} >FanTank Shares with Artrepreneurs</Text>
                        <View style={{ padding: 20, backgroundColor: "#121212", borderColor: "#535353", borderWidth: 1, borderRadius: 10, marginVertical: 20 }} >
                            <View style={{ alignSelf: "center" }} >
                                <Image style={{ width: 103, height: 32 }} source={require('../../common/assets/images/logo-text.png')} />
                            </View>
                            <View style={{ marginVertical: 15, alignItems: "center" }} >
                                <Image source={require('../../common/assets/images/scouts/organization-chart.png')} />
                            </View>
                            <View style={{ marginLeft: 20 }} >
                                <Text style={{ color: "#e7e7e7", marginVertical: 5 }} >{'\u2022'} Cash Commissions + Overrides </Text>
                                <Text style={{ color: "#e7e7e7", marginVertical: 5 }} >{'\u2022'} Perks (Tesla Lease) </Text>
                                <Text style={{ color: "#e7e7e7", marginVertical: 5 }} >{'\u2022'} Apparel</Text>
                                <Text style={{ color: "#e7e7e7", marginVertical: 5 }} >{'\u2022'} Profit Sharing</Text>
                                <Text style={{ color: "#e7e7e7", marginVertical: 5 }} >{'\u2022'} Equity Vesting </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }} >
                        <View style={{ backgroundColor: "#fff", height: 34, width: 34, borderColor: "#2A85FF", borderWidth: 2, borderRadius: 17, alignItems: "center", justifyContent: "center", alignSelf: "center", marginVertical: 15 }} >
                            <Text style={{ fontSize: 18, fontWeight: "700" }} >5</Text>
                        </View>
                        <Text style={{ fontSize: 16, color: "#E8E8E8", textAlign: "center", marginHorizontal: 40 }} >Value Proposition To Arts & Entertainment</Text>
                        <View style={{ padding: 20, backgroundColor: "#121212", borderColor: "#535353", borderWidth: 1, borderRadius: 10, marginVertical: 20 }} >
                            {/* <View style={{ alignSelf: "center" }} >
                                <Image style={{ width: 103, height: 32 }} source={require('../../assets/logo2.png')} />
                            </View> */}
                            <View style={{ marginVertical: 15, alignItems: "center" }} >
                                <Image source={require('../../common/assets/images/scouts/valuePosition.png')} />
                            </View>
                            <View style={{ marginLeft: 10 }} >
                                <View style={{ flexDirection:"row",marginVertical:5 }} >
                                    <Text style={{ color: "#e7e7e7" }} >{'\u2022'} </Text>
                                    <Text style={{ color: "#e7e7e7",marginLeft:10 }} ><Text style={{ color:"#fff",fontWeight:"700" }} >Labels</Text> - Talent Portfolio Risk Hedging / Alternative A&R Source</Text>
                                </View>
                                <View style={{ flexDirection:"row",marginVertical:5 }} >
                                    <Text style={{ color: "#e7e7e7" }} >{'\u2022'} </Text>
                                    <Text style={{ color: "#e7e7e7",marginLeft:10 }} ><Text style={{ color:"#fff",fontWeight:"700" }} >Artists</Text> - Alternative Financing Sources / Reduced Talent Selection  Subjectivity </Text>
                                </View>
                                <View style={{ flexDirection:"row",marginVertical:5 }} >
                                    <Text style={{ color: "#e7e7e7" }} >{'\u2022'} </Text>
                                    <Text style={{ color: "#e7e7e7",marginLeft:10 }} ><Text style={{ color:"#fff",fontWeight:"700" }} >Brands / Advertisers</Text> - increased connection to pulse of artistic ecosystem</Text>
                                </View>
                                <View style={{ flexDirection:"row",marginVertical:5 }} >
                                    <Text style={{ color: "#e7e7e7" }} >{'\u2022'} </Text>
                                    <Text style={{ color: "#e7e7e7",marginLeft:10 }} ><Text style={{ color:"#fff",fontWeight:"700" }} >Fans</Text> - Integration in Technology, Arts & Entertainment Content, Direct Marketing, and Event Promotions</Text>
                                </View>
                                <View style={{ flexDirection:"row",marginVertical:5 }} >
                                    <Text style={{ color: "#e7e7e7" }} >{'\u2022'} </Text>
                                    <Text style={{ color: "#e7e7e7",marginLeft:10 }} ><Text style={{ color:"#fff",fontWeight:"700" }} >Investors</Text> - Measured & Filtered Emerging & Established Artists Listings</Text>
                                </View>
                            </View>
                        </View>
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