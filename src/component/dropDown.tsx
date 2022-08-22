import React from "react";
import {
  Select,
  VStack,
  CheckIcon,
  HStack,
  Center,
  NativeBaseProvider,
  Text,
  Divider,
  Icon,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { ItemClick } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";

interface Idata {
  icon: any;
}

export const Example = () => {
  let [service, setService] = React.useState("");
  const icons: Array<Idata> = [
    {
      icon: <CheckIcon />,
      // iconName: "add"
    },
  ];

  return (
    <VStack alignItems="center" space={4}>
      <Select
        shadow={2}
        selectedValue={service}
        minWidth="300"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        _light={{
          bg: "coolGray.100",
        }}
        _dark={{
          bg: "coolGray.800",
        }}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <HStack space={2}>
          <Select.Item
            color="emerald.500"
            m={2}
            p={5}
            fontSize="md"
            label="UI research"
            value="ux"
          ></Select.Item>
          <CheckIcon size="5" color="#e7eff5" mr={10} />
        </HStack>
        <Divider
          my="2"
          _light={{
            bg: "muted.800",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />

        <Select.Item shadow={2} m={10} p={10} label="UI research" value="ux" />
        <Divider
          my="2"
          _light={{
            bg: "muted.800",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />
        <Select.Item
          shadow={2}
          m={10}
          p={10}
          label="Web Development"
          value="web"
        />
        <Divider
          my="2"
          _light={{
            bg: "muted.800",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />
        <Select.Item
          shadow={2}
          label="Cross Platform Development"
          value="cross"
        />
        <Select.Item
          shadow={2}
          m={10}
          mb={10}
          label="UI Designing"
          value="ui"
        />
        <Divider
          my="2"
          _light={{
            bg: "muted.800",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />
        <Select.Item
          shadow={2}
          mb={4}
          label="Backend Development"
          value="backend"
        />
      </Select>
    </VStack>
  );
};

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         <Example />
//       </Center>
//     </NativeBaseProvider>
//   );
// };
