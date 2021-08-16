import { Flex, VStack } from "@chakra-ui/react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { BottomSheetProps as Props } from "./bottom-sheet-props";

export const ReactSpringBottomSheet = (props: Props) => {
  return (
    <>
      <BottomSheet {...props} snapPoints={({ minHeight }) => minHeight}>
        <VStack>
          <p>Why don't I see anything?</p>
        </VStack>
      </BottomSheet>
    </>
  );
};

const SheetContent = () => {
  return <div style={{ padding: "1vh 3vh 3vh", gap: "2vh" }}></div>;
};
