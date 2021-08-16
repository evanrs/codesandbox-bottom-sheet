import {
  Flex,
  Button,
  ButtonProps,
  Grid,
  Heading,
  useColorMode,
  SystemStyleObject,
  useColorModeValue
} from "@chakra-ui/react";

const ButtonElement = (props: ButtonProps) => {
  return <Button mt={4} size="lg" {...props} />;
};

export { ButtonElement as Button };
