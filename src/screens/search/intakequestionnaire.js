import { View, Text, ImageBackground, TouchableWithoutFeedback, StyleSheet, Platform, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Checkbox, CheckIcon, FormControl, HStack, Icon, Input, Select, Slider, TextArea } from 'native-base'
import PhoneInput from "react-native-phone-number-input";
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
export const IntakeQuestionnaire = ({ navigation: { goBack } }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [placeHolderShow, setPlaceHolderShow] = useState(true);
    let [service, setService] = React.useState("");
    const [groupValues, setGroupValues] = React.useState([]);
    const [onChangeValue, setOnChangeValue] = React.useState(70);





    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
        setPlaceHolderShow(false)
    };

    const showTimepicker = () => {
        showMode('time');
        setPlaceHolderShow(false)
    };
    return (
        <View style={styles.container} >
            <SafeAreaView style={{  marginBottom: Platform.OS === "ios" ? 80 : 50 }} >
                <ScrollView>
                    <ImageBackground source={require('../../common/assets/images/search/IntakeQuestionnaireBanner.png')} style={{ height: 180, paddingTop: Platform.OS === 'ios' ? 20 : 40, paddingHorizontal: 15 }} >
                        <TouchableWithoutFeedback onPress={() => goBack()} >
                            <MaterialIcons name="arrow-back-ios" size={20} color="#fff" />
                        </TouchableWithoutFeedback>
                        <Text style={{
                            color: "#fff", fontSize: 22, fontWeight: "700", textAlign: "center", marginTop: 30
                        }} >Intake questionnaire</Text>
                    </ImageBackground>
                    {/* <Feather name="user" size={24} color="black" /> */}
                    <View style={{ paddingHorizontal: 15, marginVertical: 20 }} >
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }} >Client Details</Text>
                        <View style={{ backgroundColor: "#151515", borderColor: "#262626", borderWidth: 1, borderRadius: 10, padding: 20 }} >
                            <FormControl>
                                <Text style={{ color: "#fff", marginTop: 5 }} >Client Name</Text>
                                <Input
                                    my={2}
                                    color={'#fff'}
                                    borderRadius={10}
                                    h={Platform.OS === 'ios' ? 50 : 45}
                                    backgroundColor={"gray.800"}
                                    borderWidth={0}
                                    type={'text'} w={{
                                        base: "100%",
                                        md: "25%"
                                    }} InputLeftElement={<Icon as={<Feather name="user" />} size={5} ml="2" color="muted.400" />} placeholder="Enter Name" />
                                <Text style={{ color: "#fff", marginTop: 5 }} >FANTANK user name (if applicable)</Text>
                                <Input
                                    my={2}
                                    color={'#fff'}
                                    borderRadius={10}
                                    h={Platform.OS === 'ios' ? 50 : 45}
                                    backgroundColor={"gray.800"}
                                    borderWidth={0}
                                    type={'text'} w={{
                                        base: "100%",
                                        md: "25%"
                                    }} InputLeftElement={<Icon as={<Feather name="user" />} size={5} ml="2" color="muted.400" />} placeholder="Enter Name" />
                                <Text style={{ color: "#fff", marginTop: 5 }} >Email</Text>
                                <Input
                                    // <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                                    my={2}
                                    color={'#fff'}
                                    borderRadius={10}
                                    h={Platform.OS === 'ios' ? 50 : 45}
                                    backgroundColor={"gray.800"}
                                    borderWidth={0}
                                    type={'text'} w={{
                                        base: "100%",
                                        md: "25%"
                                    }} InputLeftElement={<Icon as={<MaterialCommunityIcons name="email-outline" />} size={5} ml="2" color="muted.400" />} placeholder="Enter Name" />
                                <Text style={{ color: "#fff", marginTop: 5 }} >Phone</Text>
                                <PhoneInput
                                    defaultValue={123}
                                    defaultCode="US"
                                    layout="first"
                                    onChangeText={(text) => {
                                        setValue(text);
                                    }}
                                    onChangeFormattedText={(text) => {
                                        setFormattedValue(text);
                                    }}
                                    withDarkTheme
                                    withShadow
                                    containerStyle={{ backgroundColor: "#252525", width: "100%", borderRadius: 10, marginVertical: 10 }}
                                    textContainerStyle={{ backgroundColor: "#252525" }}
                                    textInputStyle={{ backgroundColor: "#252525", color: "#fff" }}
                                    codeTextStyle={{ color: "#fff" }}
                                />
                            </FormControl>

                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 15, marginVertical: 20 }} >
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700", marginVertical: 10 }} >Events Details</Text>
                        <View style={{ backgroundColor: "#151515", borderColor: "#262626", borderWidth: 1, borderRadius: 10, padding: 20 }} >
                            <FormControl>
                                <Text style={{ color: "#fff", marginTop: 5 }} >Date of Event</Text>

                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }} >
                                    <TouchableWithoutFeedback onPress={showDatepicker}>
                                        <View style={{ backgroundColor: "#252525", paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, width: "55%" }} >
                                            {placeHolderShow ? <Text style={{ color: "#fff" }} >Date</Text> : <Text style={{ color: "#fff" }} >{date.toLocaleDateString("en")}</Text>}
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={showTimepicker}>
                                        <View style={{ backgroundColor: "#252525", paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, width: "40%" }} >
                                            {placeHolderShow ? <Text style={{ color: "#fff" }} >Time</Text> : <Text style={{ color: "#fff" }} >{date.toLocaleTimeString('en')}</Text>}
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>

                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        onChange={onChange}
                                    />
                                )}

                                <Text style={{ color: "#fff", marginTop: 5 }} >FANTANK user name (if applicable)</Text>
                                <Input
                                    defaultValue='1220 mt road block 2'
                                    my={2}
                                    color={'#fff'}
                                    borderRadius={10}
                                    h={Platform.OS === 'ios' ? 50 : 45}
                                    backgroundColor={"gray.800"}
                                    borderWidth={0}
                                    type={'text'} w={{
                                        base: "100%",
                                        md: "25%"
                                    }} InputLeftElement={<Icon as={<Ionicons name="md-location-outline" />} size={5} ml="2" color="muted.400" />} placeholder="Enter Name" />
                                <Text style={{ color: "#fff", marginVertical: 5 }} >Type of Events</Text>
                                <TextArea color={'#fff'} padding={4} mb={3} borderRadius={10} borderWidth={0} backgroundColor={"gray.800"} h={40} placeholder="Events Details" w="100%" maxW="100%" />

                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Text style={{ color: "#fff", marginRight: 5 }} >Budget </Text>
                                    <Foundation name="info" size={20} color="#9A9FA5" />
                                </View>
                                <Select backgroundColor={"gray.800"} px={5} borderWidth={0} borderRadius={10}
                                    h={Platform.OS === 'ios' ? 50 : 45} color={"#fff"} selectedValue={service} minWidth="100%" accessibilityLabel="Choose Service" placeholder="Select One" _selectedItem={{
                                        bg: "gray.800",
                                        endIcon: <CheckIcon size="5" />
                                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    <Select.Item label="UX Research" value={1} />
                                    <Select.Item label="Web Development" value={2} />
                                    <Select.Item label="Cross Platform Development" value={3} />
                                    <Select.Item label="UI Designing" value={4} />
                                    <Select.Item label="Backend Development" value={5} />
                                </Select>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} >
                                    <Text style={{ color: "#fff", marginRight: 5 }} >Music Genre </Text>
                                    <Foundation name="info" size={20} color="#9A9FA5" />
                                </View>
                                <Select backgroundColor={"gray.800"} px={5} borderWidth={0} borderRadius={10}
                                    h={Platform.OS === 'ios' ? 50 : 45} color={"#fff"} selectedValue={service} minWidth="100%" accessibilityLabel="Choose Service" placeholder="Select One" _selectedItem={{
                                        bg: "gray.800",
                                        endIcon: <CheckIcon size="5" />
                                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                    <Select.Item label="UX Research" value={1} />
                                    <Select.Item label="Web Development" value={2} />
                                    <Select.Item label="Cross Platform Development" value={3} />
                                    <Select.Item label="UI Designing" value={4} />
                                    <Select.Item label="Backend Development" value={5} />
                                </Select>

                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent: "space-between" }} >
                                    <Text style={{ color: "#fff", marginRight: 5 }} >Music Genre </Text>
                                    <Text style={{ color: "#378EF0", marginRight: 5 }} >Edit </Text>
                                </View>

                                <View style={{ backgroundColor: "#252525", paddingVertical: 15, paddingHorizontal: 10, marginVertical: 10, borderRadius: 10 }} >
                                    <HStack space={2} onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
                                        <Checkbox value="one"> <Text style={{ color: "#378EF0" }} >Country</Text>  </Checkbox>
                                        <Checkbox value="two"> <Text style={{ color: "#378EF0" }} >Hip Hop</Text> </Checkbox>
                                        <Checkbox value="three"> <Text style={{ color: "#378EF0" }} > Pop</Text></Checkbox>
                                    </HStack>
                                </View>

                                <View style={{ marginVertical: 10 }} >
                                    <Text style={{ color: "#E0E0E0" }} >Male</Text>
                                    <HStack space={5} >
                                        <Slider onChange={v => {
                                            setOnChangeValue(Math.floor(v));
                                        }} w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={6} colorScheme="blue" >
                                            <Slider.Track>
                                                <Slider.FilledTrack />
                                            </Slider.Track>
                                            <Slider.Thumb >
                                                <Icon as={AntDesign} name="checkcircleo" color="white" size="sm" />
                                            </Slider.Thumb>
                                        </Slider>
                                        <View style={{ backgroundColor: "#2F6C80", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }} >
                                            <Text style={{ color: "#fff" }}>{onChangeValue}%</Text>
                                        </View>
                                    </HStack>
                                    <HStack space={7} >
                                        <Text style={{ color: "#B3B3B3" }} >0</Text>
                                        <Text style={{ color: "#B3B3B3" }} >20</Text>
                                        <Text style={{ color: "#B3B3B3" }} >40</Text>
                                        <Text style={{ color: "#B3B3B3" }} >60</Text>
                                        <Text style={{ color: "#B3B3B3" }} >80</Text>
                                        <Text style={{ color: "#B3B3B3" }} >100</Text>
                                    </HStack>
                                </View>
                                <View style={{ marginVertical: 10 }} >
                                    <Text style={{ color: "#E0E0E0" }} >Female</Text>
                                    <HStack space={5} >
                                        <Slider onChange={v => {
                                            setOnChangeValue(Math.floor(v));
                                        }} w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={6} colorScheme="blue" >
                                            <Slider.Track>
                                                <Slider.FilledTrack />
                                            </Slider.Track>
                                            <Slider.Thumb >
                                                <Icon as={AntDesign} name="checkcircleo" color="white" size="sm" />
                                            </Slider.Thumb>
                                        </Slider>
                                        <View style={{ backgroundColor: "#2F6C80", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }} >
                                            <Text style={{ color: "#fff" }}>{onChangeValue}%</Text>
                                        </View>
                                    </HStack>
                                    <HStack space={7} >
                                        <Text style={{ color: "#B3B3B3" }} >0</Text>
                                        <Text style={{ color: "#B3B3B3" }} >20</Text>
                                        <Text style={{ color: "#B3B3B3" }} >40</Text>
                                        <Text style={{ color: "#B3B3B3" }} >60</Text>
                                        <Text style={{ color: "#B3B3B3" }} >80</Text>
                                        <Text style={{ color: "#B3B3B3" }} >100</Text>
                                    </HStack>
                                </View>

                            </FormControl>
                            {/* < name="" size={24} color="black" /> */}
                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 15, marginVertical: 20 }} >
                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700", marginVertical: 10 }} >Event Service</Text>
                        <View style={{ backgroundColor: "#151515", borderColor: "#262626", borderWidth: 1, borderRadius: 10, padding: 20 }} >
                            <FormControl>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} >
                                    <Text style={{ color: "#fff", marginRight: 5 }} >Sound Services Needed</Text>
                                    <Foundation name="info" size={20} color="#9A9FA5" />
                                </View>
                                <HStack my={5} space={2} onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
                                    <Checkbox value="one"> <Text style={{ color: "#fff" }} >Audio</Text>  </Checkbox>
                                    <Checkbox value="two"> <Text style={{ color: "#fff" }} >Visual</Text> </Checkbox>
                                </HStack>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} >
                                    <Text style={{ color: "#fff", marginRight: 5 }} >Stage Production Service Needed</Text>
                                    <Foundation name="info" size={20} color="#9A9FA5" />
                                </View>
                                <HStack my={5} space={2} onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
                                    <Checkbox value="one"> <Text style={{ color: "#fff" }} >Yes</Text>  </Checkbox>
                                    <Checkbox value="two"> <Text style={{ color: "#fff" }} >No</Text> </Checkbox>
                                </HStack>

                            </FormControl>

                        </View>
                    </View>

                    <TouchableWithoutFeedback>
                        <View style={{ backgroundColor: "#378EF0", paddingVertical: Platform.OS === 'ios' ? 20 : 15, marginHorizontal: 15, borderRadius: 5 }} >
                            <Text style={{ textAlign: "center", color: "#fff", fontSize: 20, fontWeight: "600" }} >Contact Us</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </ScrollView>
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex:1,
       
    }
})
