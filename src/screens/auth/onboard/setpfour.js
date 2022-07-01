import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Stack, HStack, Button, VStack } from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { Buttons, CustomCheckBox } from "../../../common";

export const StepFour = ({ navigation, setActiveStep, form, setForm }) => {
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
              onPress={() => setActiveStep(3)}
              variant={"outline"}
              colorScheme="gray"
              rounded={"full"}
            >
              <Ionicons name="chevron-back-outline" style={{ color: "#fff" }} />
            </Button>

            <VStack>
              <Text style={styles.screenTitle}>User Type</Text>
              <Text style={styles.screenSubTitle}>(Select 1)</Text>
            </VStack>

            <TouchableOpacity onPress={() => setActiveStep(5)}>
              <Text style={{ color: "#A19A9A", fontSize: 16 }} >Skip</Text>
            </TouchableOpacity>
          </HStack>

          <Stack
            space={4}
            w="100%"
            alignItems="center"
            style={{ paddingHorizontal: 15, marginBottom: 40 }}
          >
            <Stack space={4} w="100%" style={{ marginBottom: 40 }}>
              <Text
                style={{ color: "#378EF0", fontWeight: "600", fontSize: 18 }}
              >
                Behind The Scenes
              </Text>

              <HStack w={"100%"} space={4}>
                <CustomCheckBox
                  lable={"DJ"}
                  value={"DJ"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
                <CustomCheckBox
                  lable={"Producer"}
                  value={"Producer"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
              </HStack>

              <HStack w={"100%"} space={4}>
                <CustomCheckBox
                  lable={"Song Writer"}
                  value={"Song Writer"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
                <CustomCheckBox
                  lable={"Music Director"}
                  value={"Music Director"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
              </HStack>
            </Stack>

            <Stack space={4} w="100%" style={{ marginBottom: 40 }}>
              <Text
                style={{ color: "#378EF0", fontWeight: "600", fontSize: 18 }}
              >
                Branding & Advertising
              </Text>

              <HStack w={"100%"} space={4}>
                <CustomCheckBox
                  lable={"Country"}
                  value={"Country"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
                <CustomCheckBox
                  lable={"Hip Hop"}
                  value={"Hip Hop"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
              </HStack>
            </Stack>
            <Stack space={4} w="100%" style={{ marginBottom: 40 }}>
              <Text
                style={{ color: "#378EF0", fontWeight: "600", fontSize: 18 }}
              >
                Educator
              </Text>

              <HStack w={"100%"} space={4}>
                <CustomCheckBox
                  lable={"Coach"}
                  value={"Coach"}
                  selected={true}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
                <CustomCheckBox
                  lable={"Teacher"}
                  value={"Teacher"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
              </HStack>
              <HStack w={"100%"} space={4}>
                <CustomCheckBox
                  lable={"Professor"}
                  value={"Professor"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
                <CustomCheckBox
                  lable={"Instructor"}
                  value={"Instructor"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
              </HStack>
            </Stack>
            <Stack space={4} w="100%" style={{ marginBottom: 40 }}>
              <Text
                style={{ color: "#378EF0", fontWeight: "600", fontSize: 18 }}
              >
                Fan
              </Text>

              <HStack w={"100%"} space={4}>
                <CustomCheckBox
                  lable={"Fan"}
                  selected={false}
                  form={form}
                  setForm={setForm}
                  name={"userType"}
                />
              </HStack>
            </Stack>
            <Buttons onPress={() => setActiveStep(5)} title={'Next'} fillBtn={true} style={{ width: "100%" }} />
            <Button w={"full"} h={12} variant="outline">
              Cancel
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
