import { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import {
  Stack,
  HStack,
  Button,
  Box,
  Text,
  Badge,
  Icon,
  Divider,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { CustomSwitch } from "../../../common";

export const StepFive = ({ navigation, setActiveStep }) => {
  const [activeTab, setActiveTab] = useState(1);

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
              onPress={() => setActiveStep(4)}
              variant={"outline"}
              colorScheme="gray"
              rounded={"full"}
            >
              <Ionicons name="chevron-back-outline" style={{ color: "#fff" }} />
            </Button>

            <VStack>
              <Text style={styles.screenTitle}>Scouting Type</Text>
              <Text style={styles.screenTitle}>& Services</Text>
            </VStack>

            <Button variant={"unstyled"}>{/* Skip */}</Button>
          </HStack>

          <Stack
            space={4}
            w="100%"
            alignItems="center"
            style={{ paddingHorizontal: 15, marginBottom: 40 }}
          >
            <CustomSwitch activeTab={activeTab} setActiveTab={setActiveTab} />
          </Stack>

          <Stack
            space={4}
            w="100%"
            alignItems="center"
            style={{ paddingHorizontal: 15, marginBottom: 40 }}
          >
            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>
                FanBit Tokens{" "}
                <Badge colorScheme="gray" rounded={"full"}>
                  <Text>Free / Montly</Text>
                </Badge>
              </Text>
              <Icon
                as={<Ionicons name="chevron-down-outline" />}
                size={5}
                color="#6F767E"
              />
            </HStack>
            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>
                FanBit Tokens{" "}
                <Badge colorScheme="gray" rounded={"full"}>
                  <Text>Purchase</Text>
                </Badge>
              </Text>
              <Icon
                as={<Ionicons name="chevron-down-outline" />}
                size={5}
                color="#6F767E"
              />
            </HStack>

            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>
                Curated Events{" "}
                <Badge colorScheme="gray" rounded={"full"}>
                  <Text>Per Event</Text>
                </Badge>
              </Text>
              <Icon
                as={<Ionicons name="chevron-down-outline" />}
                size={5}
                color="#6F767E"
              />
            </HStack>
            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>Information Technology </Text>
              <Icon
                as={<Ionicons name="chevron-down-outline" />}
                size={5}
                color="#6F767E"
              />
            </HStack>

            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>
                Financial Services{" "}
                <Badge colorScheme="gray" rounded={"full"}>
                  <Text>Per Project</Text>
                </Badge>
              </Text>
              <Icon
                as={<Ionicons name="chevron-down-outline" />}
                size={5}
                color="#6F767E"
              />
            </HStack>

            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>Scouting </Text>
              <Icon
                as={<Ionicons name="chevron-down-outline" />}
                size={5}
                color="#6F767E"
              />
            </HStack>

            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>
                Perks{" "}
                <Badge colorScheme="gray" rounded={"full"}>
                  <Text>Limited</Text>
                </Badge>
              </Text>
              <Icon
                as={<Ionicons name="chevron-down-outline" />}
                size={5}
                color="#6F767E"
              />
            </HStack>

            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>Apparel </Text>
              <Badge colorScheme="gray" rounded={"full"}>
                <Text>top 5 badges</Text>
              </Badge>
            </HStack>

            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>Tesla Lease </Text>
              <Badge colorScheme="gray" rounded={"full"}>
                <Text>top 2 badges</Text>
              </Badge>
            </HStack>

            <HStack w={"100%"} justifyContent="space-between">
              <Text color={"#fff"}>Event VIP Status </Text>
              <Badge colorScheme="gray" rounded={"full"}>
                <Text>top 3 badges</Text>
              </Badge>
            </HStack>
          </Stack>

          <Stack
            space={4}
            w="100%"
            alignItems="center"
            style={{
              paddingHorizontal: 15,
              marginBottom: 40,
            }}
          >
            <Stack
              space={4}
              flex={1}
              w={"full"}
              style={{
                paddingHorizontal: 17,
                paddingVertical: 26,
                borderWidth: 1,
                borderColor: "#646262",
                borderStyle: "dashed",
              }}
            >
              <HStack w={"100%"} justifyContent="space-between">
                <Text color={"#fff"} fontSize={18}>
                  Digital Talent Scouts Level
                </Text>
                <Icon
                  as={<Ionicons name="chevron-down-outline" />}
                  size={6}
                  color="#6F767E"
                />
              </HStack>
              <Stack w={"100%"} justifyContent="space-between">
                <Text color={"#fff"} mb={2}>
                  Payment
                </Text>
                <Divider color={"#fff"} />
              </Stack>

              <Stack w={"100%"} justifyContent="space-between">
                <HStack
                  w={"100%"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Text style={{ color: "#fff" }}>Commissions</Text>
                  <Box
                    style={{
                      borderTopWidth: 1,
                      borderTopColor: "#B7B7B7",
                      borderStyle: "dotted",
                      borderRadius: 1,
                      flex: 2,
                      marginHorizontal: 43,
                    }}
                  ></Box>
                  <Badge colorScheme="gray" rounded={"sm"}>
                    <Text color={"red.500"} fontSize={9}>
                      NO
                    </Text>
                  </Badge>
                </HStack>
                <Divider color={"#fff"} />
              </Stack>

              <Stack w={"100%"} justifyContent="space-between">
                <HStack
                  w={"100%"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Text color={"#fff"}>Sign Up Fee</Text>
                  <Box
                    style={{
                      borderTopWidth: 1,
                      borderTopColor: "#B7B7B7",
                      borderStyle: "dotted",
                      borderRadius: 1,
                      flex: 2,
                      marginHorizontal: 43,
                    }}
                  ></Box>

                  <Text style={{ color: "#fff" }}>$0.00</Text>
                </HStack>
                <Divider color={"#fff"} />
              </Stack>

              <Stack w={"100%"} justifyContent="space-between">
                <HStack
                  w={"100%"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Text color={"#fff"}>Annual Rep Renewal Fee</Text>
                  <Box
                    style={{
                      borderTopWidth: 1,
                      borderTopColor: "#B7B7B7",
                      borderStyle: "dotted",
                      borderRadius: 1,
                      flex: 2,
                      marginHorizontal: 43,
                    }}
                  ></Box>

                  <Text style={{ color: "#fff" }}>$0.00</Text>
                </HStack>
                <Divider color={"#fff"} />
              </Stack>

              <Stack w={"100%"} justifyContent="space-between">
                <HStack
                  w={"100%"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Text style={{ color: "#fff" }}>
                    Monthly Subscription (Services)
                  </Text>
                  <Box
                    style={{
                      borderTopWidth: 1,
                      borderTopColor: "#B7B7B7",
                      borderStyle: "dotted",
                      borderRadius: 1,
                      flex: 2,
                      marginHorizontal: 43,
                    }}
                  ></Box>

                  <Text style={{ color: "#fff" }}>$19.99</Text>
                </HStack>
                <Divider color={"#fff"} />
              </Stack>

              <Stack w={"100%"} justifyContent="space-between">
                <HStack
                  w={"100%"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  mb={2}
                >
                  <Text style={{ color: "#fff" }}>Total)</Text>

                  <Text style={{ color: "#fff" }}>$18.49</Text>
                </HStack>
              </Stack>

              <Button
                w={"full"}
                h={12}
                onPress={() => navigation.navigate("Home")}
              >
                Checkout
              </Button>
            </Stack>
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
    lineHeight: 28,
  },

  switch: {
    backgroundColor: "#2F2F2F",
    borderRadius: 100,
    height: 56,
    padding: 8,
    width: "100%",
  },
});
