import React from "react";
import { Button, Center, NativeBaseProvider } from "native-base";

export const ButtonComponent = () => {
  return (
    <Button shadow={2} onPress={() => console.log("hello world")}>
      Click me
    </Button>
  );
};
