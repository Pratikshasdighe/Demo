import React, { useState } from "react";
import {
  Modal,
  Button,
  Input,
  FormControl,
  HStack,
  Center,
  NativeBaseProvider,
  CheckIcon,
  Heading,
  Box,
  IconButton,
  Icon,
  Pressable,
  Link,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { Text } from "react-native";

export default function ModelMultipleInput() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Business Account Details </Modal.Header>
          <Modal.Body>
            Provide Business Account Details to get instant Refunds in the case
            of payout failures.
            <FormControl mt="3" mb={3}>
              <FormControl.Label>Account Holder Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3" mb={3}>
              <FormControl.Label>Account Number</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3" mb={3}>
              <FormControl.Label>Confirm Account Number</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3" mb={3}>
              <FormControl.Label>IFSC Code</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>

          <Button
            px="8"
            m="6"
            backgroundColor="#0061e7"
            onPress={() => {
              setModalVisible(false);
            }}
          >
            Save
          </Button>
        </Modal.Content>
      </Modal>
      <HStack space="4" justifyContent="center" alignItems="center">
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Open Modal
        </Button>
      </HStack>
    </>
  );
}
