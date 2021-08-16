import React, { useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useTheme, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

import { RSBS, Expandable } from "../components";

import { BottomSheetProps } from "./bottom-sheet-props";
import { SheetContent } from "./sheet-content";

export const ReactSpringBottomSheetUsage = React.forwardRef(
  ({ open, onReady, onDismiss, ...props }: BottomSheetProps, ref: RSBS.ForwardedRef) => {
    const theme = useTheme();
    const backgroundColor = useColorModeValue(theme.colors.gray[400], theme.colors.gray[800]);

    // animate out on unmount
    useEffect(() => onDismiss, []);

    return (
      <RSBS.BottomSheet
        {...props}
        ref={ref}
        open={open}
        onDismiss={onDismiss}
        defaultSnap={({ snapPoints, lastSnap }) => lastSnap ?? snapPoints[1]}
        snapPoints={({ height, minHeight, maxHeight }) => [
          maxHeight - maxHeight / 5,
          Math.min(Math.max(height, minHeight), maxHeight * 0.525),
        ]}
        expandOnContentDrag
        header={<Header />}
        footer={<Footer onDone={onDismiss} />}
        style={{
          // @ts-ignore
          "--rsbs-bg": backgroundColor,
          "--rsbs-max-w": useBreakpointValue({ base: "24rem", lg: "48rem" }),
        }}
      >
        <Body />
      </RSBS.BottomSheet>
    );
  },
);

const Header = () => (
  <SheetContent alignItems="center" justifyContent="space-between" mb={2}>
    <Text fontSize="xl" fontWeight="bold" width="fit-content">
      Optional Header
    </Text>
    <InfoOutlineIcon color="GrayText" w={5} h={5} mr={2} />
  </SheetContent>
);

const Footer = ({ onDone }: { onDone: () => void }) => (
  <SheetContent alignItems="center" justifyContent="space-between">
    <Text fontSize="xl" fontWeight="bold">
      Optional Footer
    </Text>
    <Button maxWidth="6rem" onClick={onDone}>
      Done
    </Button>
  </SheetContent>
);

const Body = () => (
  <SheetContent stack py={5}>
    <Box pb={5} px={4}>
      Just as with content, if the header or footer changes their height the sheet will readjust
      accordingly.
    </Box>

    <Expandable title={<>Putting the "Done" button …</>}>
      … in a sticky footer is a nice touch on long bottom sheets with a lot of content. And on
      resize events the sticky elements are always visible, unlike the "Dismiss" button in the first
      example that needs to be animated first.
    </Expandable>

    <Text pb={5} px={4}>
      When you provide a header the draggable area increases, making it easier for users to adjust
      the height of the bottom sheet.
    </Text>

    <Text pb={5} px={4}>
      The same is true for a sticky footer, as it supports drag gestures as well to optimize for
      large phones where the header might be difficult to reach with one hand.
    </Text>

    <Expandable title={<>Additionally, this bottom sheet …</>}>
      … uses stable viewpoints that are equivalent to vh CSS units. Predictable heights like this is
      also handy if there's content loaded async, or you're implementing a virtual list so the sheet
      can't rely on measuring the height of its content.
    </Expandable>
  </SheetContent>
);
