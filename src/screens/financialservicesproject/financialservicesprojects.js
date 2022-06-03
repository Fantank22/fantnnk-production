import { StyleSheet, Text, View, SafeAreaView, Image, FlatList ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Slider } from 'native-base'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import nikenDewanil from '../../common/assets/images/artist/artist2.png'
import estherHoward from '../../common/assets/images/artist/estherHoward.png'
import annetteBlack from '../../common/assets/images/artist/annetteBlack.png' 

export const FinancialServicesProjects = ({ navigation }) => {
    const [onChangeValue, setOnChangeValue] = React.useState(50);
    const data = [
        {
            name: "Niken Dewanil",
            image: nikenDewanil
        },
        {
            name: "Esther Howard",
            image: estherHoward
        },
        {
            name: "Annette Black",
            image: annetteBlack
        },
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={{ backgroundColor: "#252525", paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5, marginVertical: 10 }} >
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                        <View style={{ width: '30%' }} >
                            <Image style={{ width: "100%", height: 96, borderRadius: 5 }} source={item.image} />
                        </View>
                        <View style={{ width: "65%", marginLeft: 15 }} >
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: "bold" }} >{item.name}</Text>
                            <Text style={{ color: '#E0E0E0', fontSize: 12 }} >Album & Tour</Text>
                            <Text style={{ color: '#E0E0E0', fontSize: 12, marginTop: 10 }} >$1,250,000 USD offering</Text>
                            <Slider w="100%" maxW="100%" defaultValue={onChangeValue} colorScheme="blue" size="lg" onChange={v => {
                                setOnChangeValue(Math.floor(v));
                            }}  >
                                <Slider.Track p={1.5} >
                                    <Slider.FilledTrack py={1} my={.5} mx={.5} borderRadius={10} />
                                </Slider.Track>
                                {/* <Slider.Thumb /> */}
                            </Slider>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                                <Text style={{ color: '#E0E0E0', fontSize: 12 }}>{onChangeValue}%</Text>
                                <Text style={{ color: '#E0E0E0', fontSize: 12 }}>60 days left</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomColor: "#9C9A9A", borderWidth: 1, marginVertical: 10 }} />
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <MaterialCommunityIcons style={{ transform: [{ rotate: "45deg" }], position: 'absolute', left: 0 }} name="square-outline" size={14} color="#E0E0E0" />
                            <Text style={{ color: "#fff", marginLeft: 20 }} >EC</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <MaterialCommunityIcons name="square-outline" size={14} color="#E0E0E0" />
                            <Text style={{ color: "#fff", marginLeft: 5 }} >NFT</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <FontAwesome name="circle" size={14} color="#378EF0" />
                            <Text style={{ color: "#378EF0", marginLeft: 5 }} >SPAC</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }} >
                            <FontAwesome name="circle" size={14} color="#E0E0E0" />
                            <Text style={{ color: "#fff", marginLeft: 5 }} >OTHERS</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                contentContainerStyle={{ marginTop: 20 }}
                data={data}
                keyExtractor={(item) => item.name}
                renderItem={(item, i) => renderItem(item)}
            />


        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 15
    }
})