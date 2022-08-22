import React from "react";
import { Center, Modal, NativeBaseProvider } from "native-base";
import { ButtonComponent } from "./src/component/button";
import Model from "./src/component/modal";
import dummyData from "./src/dummyData/modal";
import { Example } from "./src/component/dropDown";
import ModelInput from "./src/component/modalInput";

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        {/* <ButtonComponent /> */}
        <Example />
        <br />
        <br />
        <Model data={dummyData} />
        <br />
        <ModelInput />
      </Center>
    </NativeBaseProvider>
  );
};
