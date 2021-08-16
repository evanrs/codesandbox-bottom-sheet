import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  Flex,
} from "@chakra-ui/react";

export const Expandable = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Accordion tabIndex={0} allowMultiple mb={5} bg="whiteAlpha.100">
    <AccordionItem sx={{ borderWidth: 0 }} _last={{ borderBottomWidth: 0 }}>
      <Text fontWeight="bold" textAlign="left">
        <AccordionButton>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="md">{title}</Text>
            <AccordionIcon />
          </Flex>
        </AccordionButton>
      </Text>
      <AccordionPanel pb={4} paddingInline={5}>
        <Text fontSize="sm">{children}</Text>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);
