import { extendTheme } from "@chakra-ui/react";
import Heading from "./Heading";

export const theme = extendTheme({
  colors: {
    brand: {
      500: "#197eef",
    },
  },
  components: { Heading },
});
