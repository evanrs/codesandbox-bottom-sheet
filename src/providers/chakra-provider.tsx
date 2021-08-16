import React from "react";
import {
  extendTheme,
  theme as chakra,
  ChakraProvider as Chakra,
  withDefaultColorScheme,
} from "@chakra-ui/react";

export const theme = extendTheme(
  {
    fonts: {
      heading: `Poppins, ${chakra.fonts.heading}`,
      body: `Poppins, ${chakra.fonts.body}`,
    },
    config: { useSystemColorMode: true },

    components: {
      Accordian: {
        baseStyle: {
          container: {
            borderTopWidth: "0px",
            borderColor: "inherit",
            _last: {
              borderBottomWidth: "0px",
            },
          },
        },
        defaultProps: {
          tabIndex: 0,
        },
      },

      Button: {
        baseStyle: {
          outerWidth: "100%",
          innerWidth: "100%",
          maxWidth: "20rem",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "messenger" }),
  chakra,
);

export const ChakraProvider: React.FC = ({ children }) => {
  return <Chakra theme={theme}>{children}</Chakra>;
};
