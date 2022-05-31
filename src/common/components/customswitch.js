import { StyleSheet } from "react-native";

import { Box, Button, HStack, Text } from "native-base";

export const CustomSwitch = ({ activeTab, setActiveTab }) => {
  return (
    <Box style={styles.switch}>
      <HStack space={4}>
        <Button
          onPress={() => setActiveTab(1)}
          style={{ borderRadius: 100, height: 44 }}
          flex={1}
          variant={activeTab === 1 ? "solid" : "unstyled"}
        >
          <Text color="#fff">Digital Talent Scouts</Text>
        </Button>

        <Button
          onPress={() => setActiveTab(2)}
          style={{ borderRadius: 100, height: 44 }}
          flex={1}
          variant={activeTab === 2 ? "solid" : "unstyled"}
        >
          <Text color="#fff">Artrepreneur Level</Text>
        </Button>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  switch: {
    backgroundColor: "#2F2F2F",
    borderRadius: 100,
    height: 56,
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: "100%",
  },
});
