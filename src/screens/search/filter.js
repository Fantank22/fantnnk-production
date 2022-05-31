import { SafeAreaView, StyleSheet, Text, View, Platform, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { HStack, Radio } from 'native-base'




export const Filter = () => {
  const [artFormValue, setArtFormValue] = React.useState("");
  const data = [
    {
      title: 'Art Form',
      data: [
        {
          title: 'Music'
        },
        {
          title: 'Acting'
        },
        {
          title: 'Art'
        },
        {
          title: 'Comedy'
        },
        {
          title: 'Directing (film)'
        },
        {
          title: 'Fashion Design'
        },
        {
          title: 'Modeling'
        },
        {
          title: 'Music Production'
        },
        {
          title: 'Musicianship'
        },
        {
          title: 'Writers'
        }
      ]
    },
    {
      title: 'GENRE',
      data: [
        {
          title: 'Country'
        },
        {
          title: 'Hip Hop'
        },
        {
          title: 'Jazz'
        },
        {
          title: 'Classical'
        },
        {
          title: 'Opera'
        },
        {
          title: 'Rock'
        },
        {
          title: 'Pop'
        },
        {
          title: 'R&B / Soul'
        },
        {
          title: 'Reggae / Caribbean'
        },
        {
          title: 'Writers'
        }
      ]
    }
  ]
  const renderItem = ({ item }) => (
    <View>
      <Text style={{ fontSize: 18, color: "#E0E0E0", fontWeight: "700", marginBottom: 10 ,marginTop:20}} >{item.title} </Text>

      <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={artFormValue} onChange={nextValue => {
        setArtFormValue(nextValue);
      }}>
        {item.data.map((d, i) => (
          <Radio key={i} colorScheme={'blue'} _text={{ color: "#fff" }} value={d.title} my={1}>
            {d.title}
          </Radio>
        ))}
        <View style={{ borderColor: "#fff", borderWidth: 1, marginVertical: 10, width: 500 }} />
      </Radio.Group>
    </View>

  );
  return (
    <View style={styles.container} >
      <SafeAreaView>

        <FlatList
          contentContainerStyle={{ alignItems: "flex-start" }}
          ListHeaderComponent={() => (
            <HStack space={4} >
              <View style={{ width: 16, height: 32, backgroundColor: "#CED3FF", borderRadius: 3 }} />
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }} >Filter</Text>
            </HStack>
          )}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </SafeAreaView>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C1424",
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'iso' ? 0 : 35,
    flex: 1
  },

})