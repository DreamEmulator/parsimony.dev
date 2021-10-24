import React from "react";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

interface Props {}

//Palette: https://coolors.co/002d4b-003153-144161-23a7cf-57c4e5-66c9e7-eccbd9-f5e3ce-edf2ef-fffffc
const colors = {
  black: "#1c2121",
  brand: {
    50: "#FFFFFC",
    100: "#EDF2EF",
    200: "#F5E3CE",
    300: "#66C9E7",
    400: "#57C4E5",
    500: "#23A7CF",
    600: "#34768A",
    700: "#144161",
    800: "#003153",
    900: "#002D4B",
  },
};
const fonts = {
  body: "Work Sans, serif",
  heading: "Source Sans Pro, monospace",
  mono: "JetBrains Mono, monospace",
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
export const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Button", "Icon", "Text"],
  }),
  {
    colors,
    fonts,
    config,
  }
);
const StyleProvider: React.FC<Props> = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default StyleProvider;
