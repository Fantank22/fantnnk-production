import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { HStack, Stack, VStack } from "native-base";

export const FlowConnectors = () => {
  return (
    <View style={styles.container}>
      <View style={{ borderBottomColor: "#252525", borderWidth: 1 }}></View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <ImageBackground
          source={require("../../common/assets/images/about/flowDirBg.png")}
          style={styles.topImage}
        >
          <Text style={styles.title}>Flow Connectors</Text>
        </ImageBackground>
        <View>
          <VStack space="4" mt="4" mb={4}>
            <Stack direction="row" space={3} justifyContent="space-between">
              <HStack style={styles.chairmanCard}>
                <Image
                  style={styles.cardImage}
                  source={require("../../common/assets/images/about/director.png")}
                />
                <Text style={styles.directorName}>Michael Mathews</Text>
                <Text style={styles.designation}>
                  Chief Executive Officer - CEO
                </Text>
              </HStack>
              <HStack style={styles.otherCard}>
                <Image
                  style={styles.cardImage}
                  source={require("../../common/assets/images/about/director.png")}
                />
                <Text style={styles.directorName}>Suresh Kumar</Text>
                <Text style={styles.otherDesignation}>
                  Chief Technology Officer - CTO
                </Text>
              </HStack>
            </Stack>
            <Stack direction="row" space={3} justifyContent="space-between">
              <HStack style={styles.otherCard}>
                <Image
                  style={styles.cardImage}
                  source={require("../../common/assets/images/about/director.png")}
                />
                <Text style={styles.directorName}>Chris Koomey</Text>
                <Text style={styles.otherDesignation}>
                  Chief Operating Officer - COO
                </Text>
              </HStack>
              <HStack style={styles.otherCard}>
                <Image
                  style={styles.cardImage}
                  source={require("../../common/assets/images/about/director.png")}
                />
                <Text style={styles.directorName}>Diane Fisher</Text>
                <Text style={styles.otherDesignation}>
                  Chief Marketing Officer (CMO)
                </Text>
              </HStack>
            </Stack>
            <Stack direction="row" space={3} justifyContent="space-between">
              <HStack style={styles.otherCard}>
                <Image
                  style={styles.cardImage}
                  source={require("../../common/assets/images/about/director.png")}
                />
                <Text style={styles.directorName}>Carmen Murray</Text>
                <Text style={styles.otherDesignation}>
                  Chief Legal Officer (CLO){" "}
                </Text>
              </HStack>
              <HStack style={styles.otherCard}>
                <Image
                  style={styles.cardImage}
                  source={require("../../common/assets/images/about/director.png")}
                />
                <Text style={styles.directorName}>Lynette San Miguel</Text>
                <Text style={styles.otherDesignation}>President </Text>
              </HStack>
            </Stack>
          </VStack>
        </View>
        <View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
              DAO Executive Selection{" "}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#FCFCFC",
                backgroundColor: "#33383F",
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 4,
              }}
            >
              Coming soon
            </Text>
          </View>
          <VStack space="4" mb={4}>
            <Stack direction="row" space={3} justifyContent="space-between">
              <HStack style={styles.otherCard}>
                <Image
                  style={styles.cardImage}
                  source={require("../../common/assets/images/about/director.png")}
                />
                <Text style={styles.directorName}>Rodney Jerkins</Text>
                <Text style={styles.otherDesignation}>
                  Chief Artistry Officer-CAO
                </Text>
              </HStack>
              <HStack style={styles.otherCard}>
                <Image
                  style={styles.cardImage}
                  source={require("../../common/assets/images/about/director.png")}
                />
                <Text style={styles.directorName}>Wade Warren</Text>
                <Text style={styles.otherDesignation}>
                  Chief Artistry Officer-CAO
                </Text>
              </HStack>
            </Stack>
          </VStack>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  topImage: {
    height: 177,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
  },
  chairmanCard: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1B1B1B",
    width: "48%",
    paddingVertical: 20,
    borderBottomColor: "#F98F8F",
    borderBottomWidth: 5,
    borderRadius: 5,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1,
  },
  directorName: {
    color: "white",
    fontSize: 14,
    marginTop: 10,
  },
  designation: {
    color: "#F98F8F",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 10,
  },
  otherCard: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1B1B1B",
    width: "48%",
    paddingVertical: 20,
    borderBottomColor: "#069EFC",
    borderBottomWidth: 5,
    borderRadius: 5,
  },
  otherDesignation: {
    color: "#069EFC",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 10,
  },
});
