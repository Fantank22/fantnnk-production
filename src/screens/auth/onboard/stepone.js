import { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Text as NText,
} from "react-native";

import {
  Stack,
  Input,
  Icon,
  FormControl,
  HStack,
  Radio,
  Select,
  Button,
  useToast,
  Text,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { MyKeyboardAvoidingView } from "../../../common";

export const StepOne = ({ navigation, setActiveStep, form }) => {
  const toast = useToast();

  let [service, setService] = useState("");

  const handleSubmit = () => {
    // if (form["name"] === "") {
    //   toast.show({
    //     title: "Name can not be empty.",
    //     placement: "top",
    //     status: "error",
    //   });
    // } else {
    //   setActiveStep(2);
    // }

    setActiveStep(2);
  };

  return (
    <MyKeyboardAvoidingView>
      <ScrollView>
        <View>
          <HStack
            alignItems={"center"}
            justifyContent={"center"}
            style={{
              marginBottom: 30,
              marginTop: Platform === "ios" ? 95 : 30,
              paddingHorizontal: 15,
            }}
          >
            <NText style={styles.screenTitle}>{"Basic Info"}</NText>
          </HStack>

          <Stack
            space={4}
            w="100%"
            alignItems="center"
            style={{ paddingHorizontal: 15, marginBottom: 40 }}
          >
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                w={{
                  base: "100%",
                  md: "100%",
                }}
                h={12}
                variant="Filled"
                bg={"#333333"}
                InputLeftElement={
                  <Icon
                    as={<Ionicons name="person-outline" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Enter name"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Desired user name</FormControl.Label>
              <Input
                w={{
                  base: "100%",
                  md: "100%",
                }}
                h={12}
                variant="Filled"
                bg={"#333333"}
                style={{ color: "#ffffff" }}
                InputRightElement={
                  <Icon
                    as={<Ionicons name="chevron-down-outline" />}
                    size={4}
                    mr="2"
                    color="muted.400"
                  />
                }
                placeholder="mike09_7"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                w={{
                  base: "100%",
                  md: "100%",
                }}
                h={12}
                variant="Filled"
                bg={"#333333"}
                style={{ color: "#ffffff" }}
                InputLeftElement={
                  <Icon
                    as={<Ionicons name="mail-outline" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Enter email"
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Address</FormControl.Label>
              <HStack space={3} justifyContent="space-between" w="100%">
                <Stack flex={1}>
                  <Input
                    h={12}
                    w="auto"
                    variant="Filled"
                    bg={"#333333"}
                    style={{ color: "#ffffff" }}
                    InputLeftElement={
                      <Icon
                        as={<Ionicons name="flag-outline" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                      />
                    }
                    placeholder="USA"
                  />
                </Stack>
                <Stack flex={1}>
                  <Input
                    h={12}
                    w="auto"
                    variant="Filled"
                    bg={"#333333"}
                    style={{ color: "#ffffff" }}
                    placeholder="California"
                  />
                </Stack>
              </HStack>
              <Stack mt={2}>
                <Input
                  h={12}
                  w="auto"
                  variant="Filled"
                  bg={"#333333"}
                  style={{ color: "#ffffff" }}
                  InputLeftElement={
                    <Icon
                      as={<Ionicons name="location-outline" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="1220 mt road, block 2"
                />
              </Stack>
            </FormControl>

            <FormControl>
              <FormControl.Label>Gender</FormControl.Label>
              <Radio.Group
                name="exampleGroup"
                defaultValue="1"
                accessibilityLabel="pick a size"
              >
                <HStack
                  direction={{
                    base: "row",
                    md: "row",
                  }}
                  space={4}
                >
                  <Radio value="1" colorScheme="blue" size="md" my={1}>
                    <Text color="#fff">Male</Text>
                  </Radio>
                  <Radio value="2" colorScheme="blue" size="md" my={1}>
                    <Text color="#fff">Female</Text>
                  </Radio>
                  <Radio value="3" colorScheme="blue" size="md" my={1}>
                    <Text color="#fff">Not to say</Text>
                  </Radio>
                </HStack>
              </Radio.Group>
            </FormControl>

            <FormControl>
              <FormControl.Label>Age</FormControl.Label>
              <HStack space={3} justifyContent="space-between" w="100%">
                <Stack flex={1}>
                  <Input
                    h={12}
                    w="auto"
                    variant="Filled"
                    bg={"#333333"}
                    style={{ color: "#ffffff" }}
                    InputRightElement={
                      <Icon
                        as={<Ionicons name="calendar-outline" />}
                        size={4}
                        mr="2"
                        color="muted.400"
                      />
                    }
                    placeholder="Month"
                  />
                </Stack>
                <Stack flex={1}>
                  <Input
                    h={12}
                    w="auto"
                    variant="Filled"
                    bg={"#333333"}
                    style={{ color: "#ffffff" }}
                    InputRightElement={
                      <Icon
                        as={<Ionicons name="calendar-outline" />}
                        size={4}
                        mr="2"
                        color="muted.400"
                      />
                    }
                    placeholder="Day"
                  />
                </Stack>
                <Stack flex={1}>
                  <Input
                    h={12}
                    w="auto"
                    variant="Filled"
                    bg={"#333333"}
                    style={{ color: "#ffffff" }}
                    InputRightElement={
                      <Icon
                        as={<Ionicons name="calendar-outline" />}
                        size={4}
                        mr="2"
                        color="muted.400"
                      />
                    }
                    placeholder="Year"
                  />
                </Stack>
              </HStack>
            </FormControl>

            <FormControl>
              <FormControl.Label>
                Ethincity{" "}
                <Ionicons
                  name="information-circle"
                  size={18}
                  color={"#9A9FA5"}
                />
              </FormControl.Label>
              <Select
                h={12}
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose one"
                placeholder="Choose one"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <Ionicons name="chevron-down-outline" size={4} />,
                }}
                mt={1}
                variant="Filled"
                bg={"#333333"}
                style={{ color: "#ffffff" }}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item key={1} label="UX Research" value="ux" />
                <Select.Item key={2} label="Web Development" value="web" />
              </Select>
            </FormControl>
            <FormControl>
              <FormControl.Label>
                Education Lavel{" "}
                <Ionicons
                  name="information-circle"
                  size={18}
                  color={"#9A9FA5"}
                />
              </FormControl.Label>
              <Select
                h={12}
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose one"
                placeholder="Choose one"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <Ionicons name="chevron-down-outline" size={4} />,
                }}
                mt={1}
                variant="Filled"
                bg={"#333333"}
                style={{ color: "#ffffff" }}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item key={1} label="UX Research" value="ux" />
                <Select.Item key={2} label="Web Development" value="web" />
              </Select>
            </FormControl>
            <FormControl>
              <FormControl.Label>
                Income Lavel{" "}
                <Ionicons
                  name="information-circle"
                  size={18}
                  color={"#9A9FA5"}
                />
              </FormControl.Label>
              <Select
                h={12}
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose one"
                placeholder="Choose one"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <Ionicons name="chevron-down-outline" size={4} />,
                }}
                mt={1}
                variant="Filled"
                bg={"#333333"}
                style={{ color: "#ffffff" }}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item key={1} label="UX Research" value="ux" />
                <Select.Item key={2} label="Web Development" value="web" />
              </Select>
            </FormControl>
            <Button w={"full"} h={12} onPress={handleSubmit}>
              Next
            </Button>
          </Stack>
        </View>
      </ScrollView>
    </MyKeyboardAvoidingView>
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

  bgImage1: {
    height: 300,
    width: 200,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -1000,
  },

  bgImage2: {
    height: 214,
    width: 281,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: -1000,
  },
});
