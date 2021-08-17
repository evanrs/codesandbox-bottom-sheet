import { useState } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

import { ChakraProvider } from "./providers";
import { Viewport } from "./elements";
import { Option, OptionSwitch } from "./components";

export const App = () => {
  const [open, setOpen] = useState(false);

  const [option, setOption] = useState<Option>(Option.ReactSpringBottomSheet);

  const onReady = () => setOpen(true);

  const onDismiss = () => setOpen(false);

  return (
    <ChakraProvider>
      <Viewport>
        <Flex alignItems="center" justifyContent="center" gridGap={4}>
          <Text fontSize="3rem">Bottom Sheet</Text>
          <Button onClick={() => (open ? onDismiss : onReady)()}>{open ? "Close" : "Open"}</Button>
          <OptionSwitch option={option} open={open} onReady={onReady} onDismiss={onDismiss} />
        </Flex>
      </Viewport>
    </ChakraProvider>
  );
};
