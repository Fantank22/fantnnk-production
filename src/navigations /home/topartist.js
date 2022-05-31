import { View, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { HStack, Stack, VStack } from "native-base";

export const TopTrendingArtists = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 24 }}>
        <VStack space="0" px="3">
          <Stack
            justifyContent="space-between"
            direction="row"
            mb="2.5"
            mt="1.5"
            space={2}
          >
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist1.png")}
              />
            </HStack>
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist2.png")}
              />
            </HStack>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction="row"
            mb="2.5"
            mt="1.5"
            space={2}
          >
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist3.png")}
              />
            </HStack>
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist4.png")}
              />
            </HStack>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction="row"
            mb="2.5"
            mt="1.5"
            space={2}
          >
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist5.png")}
              />
            </HStack>
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist6.png")}
              />
            </HStack>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction="row"
            mb="2.5"
            mt="1.5"
            space={2}
          >
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist5.png")}
              />
            </HStack>
            <HStack>
              <Image
                source={require("../../common/assets/images/home/artist6.png")}
              />
            </HStack>
          </Stack>
        </VStack>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
