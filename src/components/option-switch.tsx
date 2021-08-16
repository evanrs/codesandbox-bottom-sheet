import { useEffect } from "react";
import { BottomSheetProps, ReactSpringBottomSheetUsage } from "../usage";

export enum Option {
  ReactSpringBottomSheet,
}

type OptionSwitchProps = BottomSheetProps & {
  option: Option;
};

export const OptionSwitch = ({ option, ...props }: OptionSwitchProps) => {
  useEffect(() => () => props.onDismiss(), []);

  switch (option) {
    case Option.ReactSpringBottomSheet:
      return <ReactSpringBottomSheetUsage {...props} />;
  }
};
