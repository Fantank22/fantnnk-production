import { Box, Flex, Text } from "native-base";

export const TabHeader = ({ activeStep, setActiveStep }) => {
  return (
    <Box
      alignItems="center"
      justifyContent={"center"}
      style={{ backgroundColor: "#1A1A1A", height: 76, zIndex: 10000000 }}
    >
      <Flex
        direction="row"
        h="58"
        p="4"
        width={"100%"}
        justifyContent="space-between"
      >
        {activeStep < 3 && (
          <>
            <Box alignItems="center" justifyContent={"center"}>
              <Box
                alignItems="center"
                justifyContent={"center"}
                style={{
                  height: 34,
                  width: 34,
                  backgroundColor: "#fff",
                  borderColor: activeStep === 1 ? "#2A85FF" : "#949597",
                  borderWidth: activeStep === 1 ? 2 : 2,
                  borderRadius: 17,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#1A1D1F",
                    fontWeight: "600",
                  }}
                >
                  1
                </Text>
              </Box>
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "600",
                  marginTop: 6,
                }}
              >
                Basic Info
              </Text>
            </Box>
            <Box
              style={{
                height: 10,
                borderTopWidth: 2,
                borderTopColor: activeStep === 1 ? "#2A85FF" : "#949597",
                flex: 2,
                // borderStyle: "dotted",
                borderRadius: 1,
              }}
            ></Box>
          </>
        )}

        {activeStep < 4 && (
          <>
            <Box alignItems="center" justifyContent={"center"}>
              <Box
                alignItems="center"
                justifyContent={"center"}
                style={{
                  height: 34,
                  width: 34,
                  backgroundColor: "#fff",
                  borderColor: activeStep === 2 ? "#2A85FF" : "#949597",
                  borderWidth: activeStep === 2 ? 2 : 0,
                  borderRadius: 17,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#1A1D1F",
                    fontWeight: "600",
                  }}
                >
                  2
                </Text>
              </Box>
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "600",
                  marginTop: 6,
                }}
              >
                Art Forms
              </Text>
            </Box>
            <Box
              style={{
                height: 10,
                borderTopWidth: 2,
                borderTopColor: activeStep === 3 ? "#2A85FF" : "#949597",
                flex: 2,
                // borderStyle: "dotted",
                borderRadius: 1,
              }}
            ></Box>
          </>
        )}

        <Box alignItems="center" justifyContent={"center"}>
          <Box
            alignItems="center"
            justifyContent={"center"}
            style={{
              height: 34,
              width: 34,
              backgroundColor: "#fff",
              borderColor: activeStep === 3 && "#2A85FF",
              borderWidth: activeStep === 3 ? 2 : 0,
              borderRadius: 17,
            }}
          >
            <Text style={{ fontSize: 16, color: "#1A1D1F", fontWeight: "600" }}>
              3
            </Text>
          </Box>
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "600",
              marginTop: 6,
            }}
          >
            Genres
          </Text>
        </Box>

        {activeStep > 2 && (
          <>
            <Box
              style={{
                height: 10,
                borderTopWidth: 2,
                borderTopColor: activeStep === 4 ? "#2A85FF" : "#949597",
                flex: 2,
                // borderStyle: "dotted",
                borderRadius: 1,
              }}
            ></Box>
            <Box alignItems="center" justifyContent={"center"}>
              <Box
                alignItems="center"
                justifyContent={"center"}
                style={{
                  height: 34,
                  width: 34,
                  backgroundColor: "#fff",
                  borderColor: activeStep === 4 && "#2A85FF",
                  borderWidth: activeStep === 4 ? 2 : 0,
                  borderRadius: 17,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#1A1D1F",
                    fontWeight: "600",
                  }}
                >
                  4
                </Text>
              </Box>
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "600",
                  marginTop: 6,
                }}
              >
                User Type
              </Text>
            </Box>
          </>
        )}

        {activeStep > 3 && (
          <>
            <Box
              style={{
                height: 10,
                borderTopWidth: 2,
                borderTopColor: activeStep === 5 ? "#2A85FF" : "#949597",
                flex: 2,
                // borderStyle: "dotted",
                borderRadius: 1,
              }}
            ></Box>
            <Box alignItems="center" justifyContent={"center"}>
              <Box
                alignItems="center"
                justifyContent={"center"}
                style={{
                  height: 34,
                  width: 34,
                  backgroundColor: "#fff",
                  borderColor: activeStep === 5 && "#2A85FF",
                  borderWidth: activeStep === 5 ? 2 : 0,
                  borderRadius: 17,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#1A1D1F",
                    fontWeight: "600",
                  }}
                >
                  5
                </Text>
              </Box>
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "600",
                  marginTop: 6,
                }}
              >
                Services
              </Text>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};
