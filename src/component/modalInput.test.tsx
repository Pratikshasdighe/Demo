import React from "react";
import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";

import ModelInput from "./modalInput";

it("expect to render ModalInput", () => {
  const modalInputSnap = renderer
    .create(
      <NativeBaseProvider>
        <ModelInput />
      </NativeBaseProvider>
    )
    .toJSON();
  expect(modalInputSnap).toMatchSnapshot();
});
