import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const headingheme = defineStyleConfig({
  baseStyle: {
    fontWeight: "medium",
  },
  defaultProps: {
    size: "lg",
    variant: "h2",
    colorScheme: "brand",
  },
  variants: {
    h1: {
      fontSize: ["2xl", "3xl", "4xl", "5xl"],
      lineHeight: ["shorter", "short", "base", "tall"],
      fontWeight: "medium",
    },
    h2: {
      fontSize: ["xl", "2xl", "3xl", "4xl"],
      lineHeight: ["shorter", "short", "base", "tall"],
      fontWeight: "medium",
    },
  },
});
export default headingheme;
