import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { Slider, Stack } from 'native-base';

export const Scouting = () => {
  const [onChangeValue, setOnChangeValue] = React.useState(50);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(50);
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView >
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }} >
          <Feather name="eye" size={24} color="white" />
          <Text style={{ color: "#fff", fontSize: 16, marginLeft: 10 }} >Quick View</Text>
        </View>
        <View style={{ padding: 15, backgroundColor: "#1B1B1B", borderColor: "#414141", borderWidth: 1, borderRadius: 10 }} >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }} >Type</Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }} >
            <View style={{ backgroundColor: "#378EF0", padding: 20, borderRadius: 30 }} >
              <Text style={{ color: "#fff" }} >Artrepreneur</Text>
            </View>
            <View style={{ padding: 20, borderRadius: 30, borderColor: "#AEAEAE", borderWidth: 1, marginLeft: 20 }} >
              <Text style={{ color: "#fff", }} >Digital Talent Scouts</Text>
            </View>
          </View>

          <View style={{ borderColor: "#414141", borderWidth: 1 }} ></View>

          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700", marginVertical: 15 }} >Next Badge Progress</Text>

          <View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
              <Text style={{ color: "#A4A4A4", fontSize: 12 }} >Current Badge</Text>
              <Text style={{ color: "#A4A4A4", fontSize: 12 }} >Next Badge</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
              <View style={{ backgroundColor: "#2E3142", width: 63, height: 93, alignItems: "center", justifyContent: "center", borderRadius: 10 }} >
                <Image style={{ width: 47, height: 31 }} source={require('../../common/assets/images/badge/badge2.png')} />
              </View>

              <View style={{}} >

                <Stack alignItems="center" w={150}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ color: "#fff", fontSize: 12, marginRight: 20 }} >Scout score </Text>
                    <Text style={{ color: "#fff", fontSize: 12, marginLeft: 20 }} >{onChangeValue}%</Text>
                  </View>
                  <Slider w={150} defaultValue={50} colorScheme={"yellow"} onChange={v => {
                    setOnChangeValue(Math.floor(v));
                  }} onChangeEnd={v => {
                    v && setOnChangeEndValue(Math.floor(v));
                  }}>
                    <Slider.Track bg={"blueGray.700"}>
                      <Slider.FilledTrack />
                    </Slider.Track>
                  </Slider>
                </Stack>
                <Stack alignItems="center" w={150}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ color: "#fff", fontSize: 12, marginRight: 20 }} >Artists votes </Text>
                    <Text style={{ color: "#fff", fontSize: 12, marginLeft: 20 }} >{onChangeValue}%</Text>
                  </View>
                  <Slider w={150} defaultValue={50} colorScheme="cyan.400" onChange={v => {
                    setOnChangeValue(Math.floor(v));
                  }} onChangeEnd={v => {
                    v && setOnChangeEndValue(Math.floor(v));
                  }}>
                    <Slider.Track bg={"blueGray.700"}>
                      <Slider.FilledTrack />
                    </Slider.Track>
                  </Slider>
                </Stack>
                <Stack alignItems="center" w={150}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ color: "#fff", fontSize: 12, marginRight: 20 }} >Artists votes </Text>
                    <Text style={{ color: "#fff", fontSize: 12, marginLeft: 20 }} >{onChangeValue}%</Text>
                  </View>
                  <Slider w={150} defaultValue={50} colorScheme={"red"} onChange={v => {
                    setOnChangeValue(Math.floor(v));
                  }} onChangeEnd={v => {
                    v && setOnChangeEndValue(Math.floor(v));
                  }}>
                    <Slider.Track bg={"blueGray.700"}>
                      <Slider.FilledTrack />
                    </Slider.Track>
                  </Slider>
                </Stack>

              </View>


              <View style={{ backgroundColor: "#2E3142", width: 63, height: 93, alignItems: "center", justifyContent: "center", borderRadius: 10 }} >
                <Image style={{ width: 47, height: 31 }} source={require('../../common/assets/images/badge/badge2.png')} />
              </View>
            </View>
            <View style={{ borderColor: "#414141", borderWidth: 1, marginVertical: 10 }} ></View>
            <View>
              <Text style={{ fontSize: 16, color: "#d1d1d1", fontWeight: "700" }} > Commission (to date)</Text>
              <View style={{ flexDirection: "row", marginVertical: 15 }} >
                <Text style={{ fontSize: 16, color: "#d1d1d1" }} > <Text style={{ color: "#67E43A" }} >$500.79</Text> / YTD 85%</Text>
                <Image source={require("../../common/assets/images/scouting/stock.png")} />
                <Text style={{ fontSize: 16, color: "#d1d1d1" }} > 1 year</Text>
              </View>
            </View>
            <View style={{ borderColor: "#414141", borderWidth: 1 }} ></View>
            <View>
              <Text style={{ fontSize: 16, color: "#d1d1d1", fontWeight: "700", marginVertical: 10 }} >Portal Access </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }} >
                <Text style={{ color: "#378EF0", fontWeight: "700" }} >Scouting I.T. Dashboard </Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#378EF0" />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }} >
                <Text style={{ color: "#378EF0", fontWeight: "700" }} >Artrepreneur Access Only  </Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#378EF0" />
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 20 }} >
          <Text style={{ color: "#fff", fontSize: 16 }} >Scouting Activity</Text>
          <View style={{ backgroundColor: "#454C54", padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
              <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../../common/assets/images/artist/nikenDewanil.png')} />
              <View>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }} >
                  <Image style={{ width: 95 }} source={require('../../common/assets/images/scouting/stock.png')} />
                  <View style={{ backgroundColor: "#868789", padding: 5, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                    <Text style={{ color: "#CBCBCC", fontSize: 9 }} >SS</Text>
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700", marginLeft: 3 }} >1,211</Text>
                  </View>
                  <Text style={{ color: "#35C112", fontSize: 12 }} > <AntDesign name="arrowup" size={14} color="#35C112" />12.3%</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }} >
                  <Image style={{ width: 95 }} source={require('../../common/assets/images/scouting/stockdown.png')} />
                  <View style={{ backgroundColor: "#868789", padding: 5, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                    <Text style={{ color: "#CBCBCC", fontSize: 9 }} >SS</Text>
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700", marginLeft: 3 }} >1,211</Text>
                  </View>
                  <Text style={{ color: "#35C112", fontSize: 12 }} > <AntDesign name="arrowup" size={14} color="#35C112" />12.3%</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }} >
              <View>
                <Text style={{ fontSize: 16, color: "#fff" }} >Niken Dewanil</Text>
                <Text style={{ fontSize: 16, color: "#fff" }} >Los Angeles, CA</Text>
                <View style={{ flexDirection: "row" }} >
                  <Text style={{ color: "#378EF0", fontSize: 12 }} > # Music</Text>
                  <Text style={{ color: "#fff", fontSize: 12, marginLeft: 5 }} > # Pop</Text>
                  <Text style={{ color: "#fff", fontSize: 12, marginLeft: 5 }} > # Vocalist</Text>
                </View>
              </View>
              <View>
                <Image source={require('../../common/assets/images/scouting/updownGraph.png')} />
                <View style={{ borderColor: "#fff", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15, marginTop: 10 }} >
                  <Text style={{ color: "#fff", fontSize: 12 }} >View profile</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: "#454C54", padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
              <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../../common/assets/images/artist/artist2.png')} />
              <View>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }} >
                  <Image style={{ width: 95 }} source={require('../../common/assets/images/scouting/stock.png')} />
                  <View style={{ backgroundColor: "#868789", padding: 5, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                    <Text style={{ color: "#CBCBCC", fontSize: 9 }} >SS</Text>
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700", marginLeft: 3 }} >1,211</Text>
                  </View>
                  <Text style={{ color: "#35C112", fontSize: 12 }} > <AntDesign name="arrowup" size={14} color="#35C112" />12.3%</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }} >
                  <Image style={{ width: 95 }} source={require('../../common/assets/images/scouting/stockdown.png')} />
                  <View style={{ backgroundColor: "#868789", padding: 5, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                    <Text style={{ color: "#CBCBCC", fontSize: 9 }} >SS</Text>
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700", marginLeft: 3 }} >1,211</Text>
                  </View>
                  <Text style={{ color: "#35C112", fontSize: 12 }} > <AntDesign name="arrowup" size={14} color="#35C112" />12.3%</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }} >
              <View>
                <Text style={{ fontSize: 16, color: "#fff" }} >Niken Dewanil</Text>
                <Text style={{ fontSize: 16, color: "#fff" }} >Los Angeles, CA</Text>
                <View style={{ flexDirection: "row" }} >
                  <Text style={{ color: "#378EF0", fontSize: 12 }} > # Music</Text>
                  <Text style={{ color: "#fff", fontSize: 12, marginLeft: 5 }} > # Pop</Text>
                  <Text style={{ color: "#fff", fontSize: 12, marginLeft: 5 }} > # Vocalist</Text>
                </View>
              </View>
              <View>
                <Image source={require('../../common/assets/images/scouting/updownGraph.png')} />
                <View style={{ borderColor: "#fff", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15, marginTop: 10 }} >
                  <Text style={{ color: "#fff", fontSize: 12 }} >View profile</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: "#454C54", padding: 10, borderRadius: 10, marginVertical: 5 }} >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
              <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../../common/assets/images/artist/artist2.png')} />
              <View>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }} >
                  <Image style={{ width: 95 }} source={require('../../common/assets/images/scouting/stock.png')} />
                  <View style={{ backgroundColor: "#868789", padding: 5, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                    <Text style={{ color: "#CBCBCC", fontSize: 9 }} >SS</Text>
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700", marginLeft: 3 }} >1,211</Text>
                  </View>
                  <Text style={{ color: "#35C112", fontSize: 12 }} > <AntDesign name="arrowup" size={14} color="#35C112" />12.3%</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }} >
                  <Image style={{ width: 95 }} source={require('../../common/assets/images/scouting/stockdown.png')} />
                  <View style={{ backgroundColor: "#868789", padding: 5, flexDirection: "row", alignItems: "center", borderRadius: 5 }} >
                    <Text style={{ color: "#CBCBCC", fontSize: 9 }} >SS</Text>
                    <Text style={{ color: "#fff", fontSize: 12, fontWeight: "700", marginLeft: 3 }} >1,211</Text>
                  </View>
                  <Text style={{ color: "#35C112", fontSize: 12 }} > <AntDesign name="arrowup" size={14} color="#35C112" />12.3%</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }} >
              <View>
                <Text style={{ fontSize: 16, color: "#fff" }} >Niken Dewanil</Text>
                <Text style={{ fontSize: 16, color: "#fff" }} >Los Angeles, CA</Text>
                <View style={{ flexDirection: "row" }} >
                  <Text style={{ color: "#378EF0", fontSize: 12 }} > # Music</Text>
                  <Text style={{ color: "#fff", fontSize: 12, marginLeft: 5 }} > # Pop</Text>
                  <Text style={{ color: "#fff", fontSize: 12, marginLeft: 5 }} > # Vocalist</Text>
                </View>
              </View>
              <View>
                <Image source={require('../../common/assets/images/scouting/updownGraph.png')} />
                <View style={{ borderColor: "#fff", borderWidth: 1, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15, marginTop: 10 }} >
                  <Text style={{ color: "#fff", fontSize: 12 }} >View profile</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingHorizontal: 15
  }
})



