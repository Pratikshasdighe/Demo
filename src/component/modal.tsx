import React from "react";
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
} from "native-base";
import { Text } from "native-base";
import { View } from "react-native";

export default function Model(props: any) {
  console.log(props.data);
  const data = props.data;
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
          <Modal.Header>Month Calculation </Modal.Header>
          <Modal.Body>
            {data.map((data: any) => {
              return (
                <HStack
                  borderWidth="1"
                  borderColor="#e7eff5"
                  mt="2"
                  key={data.heading}
                >
                  <Box p="5">
                    <Heading size="sm">{data.heading}</Heading>

                    <Text>{data.content}</Text>
                  </Box>
                  <Box p="5">
                    <CheckIcon
                      _hover={{
                        color: "coolGray.50",
                      }}
                      size="10"
                      color="#e7eff5"
                    />
                  </Box>
                </HStack>
              );
            })}
          </Modal.Body>
          {/* <Modal.Footer> */}
          <Button.Group space={3} alignSelf="center" mb="2">
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
