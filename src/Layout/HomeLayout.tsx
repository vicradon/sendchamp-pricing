import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

function HomeLayout(props: Props) {
  const { children } = props;

  return (
    <Box position={"relative"}>
      <Meta />

      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}

export default HomeLayout;
