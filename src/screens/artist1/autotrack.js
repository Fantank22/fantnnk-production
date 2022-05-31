import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Buttons } from "../../common";
import { Button, FormControl, Input, Modal } from "native-base";

export const ArtistToTrack = ({ navigation }) => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../common/assets/images/artistlist/track.png")}
      />

      <View>
        <Text style={styles.title}>Track Confirmation</Text>
        <Text style={styles.detailsText}>
          Do you want to add user{" "}
          <Text style={styles.userNameColor}>missmolly11</Text> to your talent
          tracking list?
        </Text>
        <TouchableOpacity onPress={() => openModal("bottom")}>
          <Buttons title={"Yes, I do"} fillBtn={true} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content style={styles.modal} {...styles[placement]}>
          {/* <Modal.CloseButton /> */}
          <Modal.Body>
            <Text style={styles.modalTitle}>
              Go to Talent Tracking Dashboard now?
            </Text>
            <View style={styles.btns}>
              <TouchableOpacity>
                <Text style={styles.yesBtn}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <Text style={styles.noBtn}>No</Text>
              </TouchableOpacity>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  title: {
    color: "white",
    fontSize: 22,
    alignSelf: "center",
    marginVertical: 20,
  },
  detailsText: {
    color: "white",
    fontSize: 17,
    fontWeight: "100",
    alignSelf: "center",
    marginBottom: 40,
  },
  userNameColor: {
    color: "#378EF0",
    fontSize: 17,
    fontWeight: "100",
    alignSelf: "center",
    marginBottom: 40,
  },
  cancelBtn: {
    color: "#378EF0",
    alignSelf: "center",
    marginVertical: 30,
  },
  modal: {
    backgroundColor: "#252525",
    width: "90%",
    borderRadius: 3,
    position: "absolute",
    bottom: 10,
    paddingTop: 10,
  },
  modalTitle: {
    color: "#ECECEC",
    alignSelf: "center",
  },
  btns: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 20,
  },
  yesBtn: {
    backgroundColor: "#378EF0",
    color: "#ECECEC",
    fontSize: 16,
    borderRadius: 30,
    width: 125,
    paddingVertical: 14,
    textAlign: "center",
    marginRight: 20,
  },
  noBtn: {
    borderColor: "#378EF0",
    borderWidth: 1,
    color: "#ECECEC",
    fontSize: 16,
    borderRadius: 30,
    width: 125,
    paddingVertical: 14,
    textAlign: "center",
  },
});
