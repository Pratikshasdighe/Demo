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

export default function ModelInput() {
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
          <Modal.Header>Business Name </Modal.Header>
          <Modal.Body>
            <FormControl mt="3" mb={3}>
              <FormControl.Label>Business Name</FormControl.Label>
              <Input />
            </FormControl>
            <Text>
              By contuning you agree to{" "}
              <Link
                _text={{
                  _light: {
                    color: "#0061e7",
                  },
                  color: "#0061e7",
                }}
                href="https://nativebase.io"
              >
                Terms & conditions
              </Link>
            </Text>
          </Modal.Body>
          {/* <Modal.Footer> */}
          <Button.Group space={3} alignSelf="center" mb="4">
            <Button
              _hover={{
                _text: { color: "red" },
              }}
              px="10"
              variant="outline"
              colorScheme="blueGray"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Cancel
            </Button>
            <Button
              _hover={{
                bg: "red",
              }}
              _pressed={{
                bg: "green.500",
              }}
              px="10"
              backgroundColor="#0061e7"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Save
            </Button>
          </Button.Group>
          {/* </Modal.Footer> */}
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
