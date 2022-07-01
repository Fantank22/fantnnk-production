import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Stack, HStack, Button, VStack, useToast } from "native-base";

import { Ionicons } from "@expo/vector-icons";
import { Buttons, CustomCheckBox } from "../../../common";

export const StepTwo = ({ setActiveStep, form, setForm }) => {
  const toast = useToast();

  const artForms = ["Acting", "Art", "Dance", "Musicanship", "Directing (film)", "Fashion  Design", "Modeling,", "Music", "Music Production", "Musicianship1", "Writers", "Musicianship"];

  const checkBoxes = [];
  for (let i = 0; i < artForms.length; i += 2) {
    if (i + 1 !== artForms.length) {
      checkBoxes.push(
        <HStack w={"100%"} space={4} key={i}>
          <CustomCheckBox
            lable={artForms[i]}
            value={artForms[i]}
            form={form}
            setForm={setForm}
            name="artForm"
          />

          <CustomCheckBox
            lable={artForms[i + 1]}
            value={artForms[i + 1]}
            form={form}
            setForm={setForm}
            name="artForm"
          />
        </HStack>
      );
    } else {
      checkBoxes.push(
        <HStack w={"100%"} space={4} key={i}>
          <CustomCheckBox
            lable={artForms[i]}
            value={artForms[i]}
            form={form}
            setForm={setForm}
            name="artForm"
          />
          <CustomCheckBox
            lable={artForms[i]}
            value={artForms[i]}
            form={form}
            setForm={setForm}
            name="artForm"
          />
        </HStack>
      );
    }
  }

  const handleSubmit = () => {
    if (form["artForm"] === "") {
      toast.show({
        title: "Art form can not be empty.",
        placement: "top",
        status: "error",
        description: "Please check at least one art forms.",
      });
    } else {
      setActiveStep(3);
    }
  };

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
              onPress={() => setActiveStep(1)}
              variant={"outline"}
              colorScheme="gray"
              rounded={"full"}
            >
              <Ionicons name="chevron-back-outline" style={{ color: "#fff" }} />
            </Button>



            <VStack>
              <Text style={styles.screenTitle}>Art Forms</Text>
              <Text style={styles.screenSubTitle}>(Music Only - 2023)</Text>
            </VStack>

            <TouchableOpacity onPress={() => setActiveStep(3)}>
              <Text style={{ color:"#A19A9A",fontSize:16 }} >Skip</Text>
            </TouchableOpacity> 
          </HStack>

          <Stack
            space={4}
            w="100%"
            alignItems="center"
            style={{ paddingHorizontal: 15, marginBottom: 40 }}
          >
            {checkBoxes}
            <Buttons onPress={handleSubmit} title={'Next'} fillBtn={true} style={{ width: "100%" }} />
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
