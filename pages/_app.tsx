import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { theme } from "../src/theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
