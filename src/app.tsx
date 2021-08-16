import "./styles.css";

import { useState } from "react";
import { Button } from "./elements";
import { ChakraProvider } from "./providers";
import { Option, OptionSwitch } from "./option-switch";

export const App = () => {
  const [open, setOpen] = useState(true);
  const [option, setOption] = useState<Option>(Option.ReactSpringBottomSheet);

  const onToggle = () => setOpen(!open);
  const onDismiss = () => setOpen(false);

  return (
    <ChakraProvider>
      <div className="root">
        <Button onClick={onToggle}>{open ? "Close" : "Open"}</Button>
        <Button onClick={() => setOption(Option.ReactSpringBottomSheet)}>
          Next
        </Button>
        <OptionSwitch option={option} open={open} onDismiss={onDismiss} />
      </div>
    </ChakraProvider>
  );
};
