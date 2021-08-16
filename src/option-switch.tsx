import { BottomSheetProps, ReactSpringBottomSheet } from "./bottom-sheet";

export enum Option {
  ReactSpringBottomSheet
}

type OptionSwitchProps = BottomSheetProps & {
  option: Option;
};

export const OptionSwitch = ({ option, ...props }: OptionSwitchProps) => {
  switch (option) {
    case Option.ReactSpringBottomSheet:
      return <ReactSpringBottomSheet {...props} />;
  }
};
