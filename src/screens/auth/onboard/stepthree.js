import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { Stack, HStack, Button, VStack } from "native-base";

import { Ionicons } from "@expo/vector-icons";

import { MultiCheckBox } from "../../../common";

export const StepThree = ({ navigation, setActiveStep, form, setForm }) => {
  const genres = ["Country", "Hip Hop", "Pop", "Heavy Metal", "Opera"];

  const checkBoxes = [];

  for (let i = 0; i < genres.length; i += 2) {
    if (i + 1 !== genres.length) {
      checkBoxes.push(
        <HStack w={"100%"} space={4} key={i}>
          <MultiCheckBox
            lable={genres[i]}
            value={genres[i]}
            form={form}
            setForm={setForm}
            name="genre"
            max={3}
          />

          <MultiCheckBox
            lable={genres[i + 1]}
            value={genres[i + 1]}
            form={form}
            setForm={setForm}
            name="genre"
            max={3}
          />
        </HStack>
      );
    } else {
      checkBoxes.push(
        <HStack w={"100%"} space={4} key={i}>
          <MultiCheckBox
            lable={genres[i]}
            value={genres[i]}
            form={form}
            setForm={setForm}
            name="genre"
            max={3}
          />
        </HStack>
      );
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <View>
          <HStack
            alignItems={"center"}
            justifyContent={"space-between"}
            style={{
              marginBottom: 30,
              marginTop: 30,
              paddingHorizontal: 15,
            }}
          >
            <Button
              onPress={() => setActiveStep(2)}
              variant={"outline"}
              colorScheme="gray"
              rounded={"full"}
            >
              <Ionicons name="chevron-back-outline" style={{ color: "#fff" }} />
            </Button>

            <VStack>
              <Text style={styles.screenTitle}>Genres</Text>
              <Text style={styles.screenSubTitle}>(Pick up 3)</Text>
            </VStack>

            <Button onPress={() => setActiveStep(4)} variant={"unstyled"}>
              Skip
            </Button>
          </HStack>
          <Stack
            space={4}
            w="100%"
            alignItems="center"
            style={{ paddingHorizontal: 15, marginBottom: 40 }}
          >
            {checkBoxes}
            <Button w={"full"} h={12} onPress={() => setActiveStep(4)}>
              Next
            </Button>
          </Stack>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
  },

  screenTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
  },

  screenSubTitle: {
    color: "#9C9A9A",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
});
