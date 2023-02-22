import { Box, Button, Container, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <Box
      bgColor={"#edf5fe"}
      position={"sticky"}
      width={"100%"}
      top={0}
      zIndex={999}
    >
      <Container maxW={"container.xl"}>
        <Flex
          padding={"2rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image
            src={"/images/sendchamp-logo-blue.svg"}
            alt={"senchamp-logo"}
            width={150}
            height={20}
          />

          <Flex
            display={{ base: "none", lg: "flex" }}
            columnGap={"2rem"}
            alignItems={"center"}
          >
            <Button fontWeight={"medium"} variant={"unstyled"}>
              Products
            </Button>
            <Button fontWeight={"medium"} variant={"unstyled"}>
              Developers
            </Button>
            <Button fontWeight={"medium"} variant={"unstyled"}>
              Company
            </Button>
            <Button fontWeight={"medium"} variant={"unstyled"}>
              Use Cases
            </Button>
            <Link as={NextLink} alignSelf={"center"} href={"#"}>
              Pricing
            </Link>
          </Flex>

          <Flex display={{ base: "none", lg: "flex" }} columnGap={"1rem"}>
            <Link alignSelf={"center"} as={NextLink} href={"/login"}>
              Login
            </Link>
            <Button colorScheme={"brand"}>Get Started</Button>
          </Flex>

          <Button
            display={{
              base: "block",
              lg: "none",
            }}
            bgColor="transparent"
            _hover={{
              bgColor: "transparent",
            }}
          >
            <Image
              src={"/icons/Bars.svg"}
              alt={"menu"}
              width={20}
              height={20}
            />
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
