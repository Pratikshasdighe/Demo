import React from "react";
import {
  Select,
  VStack,
  CheckIcon,
  HStack,
  Center,
  NativeBaseProvider,
  Text,
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
          <CheckIcon size="5" mt="0.5" color="emerald.500" />
          <Select.Item
            color="emerald.500"
            fontSize="md"
            label="UI research"
            value="ux"
          ></Select.Item>
        </HStack>

        <Select.Item shadow={2} p="4" label="UI research" value="ux" />
        <Select.Item shadow={2} p="4" label="Web Development" value="web" />
        <Select.Item
          shadow={2}
          label="Cross Platform Development"
          value="cross"
        />
        <Select.Item shadow={2} mb={4} label="UI Designing" value="ui" />
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
