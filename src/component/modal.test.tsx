import React from "react";
import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import Model from "./modal";
import dummyData from "../dummyData/modal";

it("expect to render Modal", () => {
  const modalSnap = renderer
    .create(
      <NativeBaseProvider>
        <Model data={dummyData} />
      </NativeBaseProvider>
    )
    .toJSON();
  expect(modalSnap).toMatchSnapshot();
});
