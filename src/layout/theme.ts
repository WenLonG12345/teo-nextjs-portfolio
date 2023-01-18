import { extendTheme } from "@chakra-ui/react";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const theme = extendTheme({ config })
export default theme;
