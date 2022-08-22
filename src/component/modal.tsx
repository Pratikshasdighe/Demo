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
} from "native-base";
import { Entypo } from "@expo/vector-icons";

import { Text } from "native-base";
import { View } from "react-native";
import { color } from "native-base/lib/typescript/theme/styled-system";
import dummyData from "../dummyData/modal";

export default function Model(props: any) {
  console.log(props.data);
  const data = props.data;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  // const [value, setValue] = React.useState([]);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  // const handleOnPress = () => {
  //   setValue([selected]);
  // };
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
              const [selected, setSelected] = useState(false);
              const [value, setValue] = React.useState("");
              return (
                <Pressable
                  key={data.id}
                  onPress={(nextValue: any) => {
                    setSelected(!selected);
                    setValue(nextValue);
                  }}
                >
                  {({ isHovered, isPressed }) => {
                    return (
                      <HStack
                        borderWidth="1"
                        // borderColor="#e7eff5"
                        mt="2"
                        key={data.heading}
                        borderColor={
                          isPressed || selected ? "#7098d5" : "#f1f0f1"
                        }
                        // bg={isPressed ? "cyan.500" : null}

                        // _icon={isPressed ? "blue" : "grey"}
                      >
                        <Box p="5">
                          <Heading size="sm">{data.heading}</Heading>

                          <Text>{data.content}</Text>
                        </Box>
                        <Box p="5">
                          <CheckIcon
                            size="10"
                            // color="#e7eff5"
                            color={
                              isPressed || selected ? "#7098d5" : "#e7eff5"
                            }
                          />
                          {/* <IconButton
                      onPress={() => alert("Add payment")}
                      icon={
                        <Icon
                          as={Entypo}
                          name="check"
                          size={10}
                          color="#e7eff5"
                        />
                      }
                      _pressed={{
                        bgColor: "red",
                      }}
                    /> */}
                        </Box>
                      </HStack>
                    );
                  }}
                </Pressable>
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
