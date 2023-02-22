import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";

interface Props {}

const FooterLink = ({ title, href }) => {
  return (
    <Link href={href} as={NextLink}>
      {title}
    </Link>
  );
};

function Footer(props: Props) {
  const {} = props;

  const footerLinks = {
    products: [
      {
        title: "Channels / Router",
        href: "https://www.sendchamp.com/#routerChannels",
      },
      {
        title: "Verification",
        href: "",
      },
      {
        title: "No-Code Tools",
        href: "",
      },
    ],
    solutions: [
      {
        title: "Onboard",
        href: "",
      },
      {
        title: "Engage",
        href: "",
      },
      {
        title: "Support",
        href: "",
      },
      {
        title: "Retain",
        href: "",
      },
    ],
    resources: [
      {
        title: "Developers",
        href: "",
      },
      {
        title: "API Reference",
        href: "",
      },
      {
        title: "Guides",
        href: "",
      },
      {
        title: "SDKs/Libraries",
        href: "",
      },
      {
        title: "Community",
        href: "",
      },
      {
        title: "Status Page",
        href: "",
        tooltip: {
          message: "All systems operational",
          iconcolor: "green",
        },
      },
      {
        title: "Pricing",
        href: "",
      },
    ],
    company: [
      { title: "About Us", href: "" },
      { title: "Our Stories", href: "" },
      { title: "Careers", href: "" },
      { title: "Contact", href: "" },
      { title: "Terms Of Use", href: "" },
      { title: "Privacy", href: "" },
    ],
    "Follow Us": [
      { title: "Twitter", href: "" },
      { title: "LinkedIn", href: "" },
      { title: "Facebook", href: "" },
      { title: "Instagram", href: "" },
    ],
    "Contact Us": [
      { title: "+234(0)18880261", href: "" },
      { title: "sales@sendchamp.com", href: "" },
      { title: "help@sendchamp.com", href: "" },
    ],
  };

  return (
    <Box backgroundColor={"#0d253f"} color={"#ffffff"} paddingBottom={"2rem"}>
      <Container maxW={"container.xl"}>
        <Grid
          padding={"4rem 2rem"}
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          columnGap={"2rem"}
          rowGap={"2rem"}
        >
          {Object.keys(footerLinks).map((footerLink) => {
            return (
              <Box key={footerLink}>
                <Heading
                  opacity={"0.5"}
                  color={"gray.50"}
                  as={"h3"}
                  fontWeight={"medium"}
                  fontSize={"sm"}
                  mb={"1rem"}
                >
                  {footerLink}
                </Heading>
                <Flex flexDirection={"column"} rowGap={"0.5rem"}>
                  {footerLinks[footerLink].map(({ title, href }) => (
                    <FooterLink key={title} title={title} href={href} />
                  ))}
                </Flex>
              </Box>
            );
          })}
        </Grid>

        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          rowGap={"2rem"}
          columnGap={"2rem"}
          mb={"2rem"}
          borderY={"1px solid gray"}
          padding={"3rem"}
        >
          <Image
            src="/images/sendchamp-logo-white.svg"
            alt="Sendchamp Logo"
            width={200}
            height={40}
          />

          <Flex columnGap={"1rem"} alignItems="center">
            <Box
              display={{
                base: "none",
                md: "block",
              }}
            >
              <Image
                src="/images/nigeria-flag.svg"
                alt="Nigeria Flag"
                width={40}
                height={40}
              />
            </Box>

            <Text>142, Ahmadu Bello Way, Victoria Island, Lagos, Nigeria</Text>
          </Flex>
          <Flex columnGap={"1rem"} alignItems="center">
            <Box
              display={{
                base: "none",
                md: "block",
              }}
            >
              <Image
                src="/images/us-flag.svg"
                alt="Nigeria Flag"
                width={40}
                height={40}
              />
            </Box>
            <Text>2055 Limestone Rd STE 200-C Wilmington, DE 19808</Text>
          </Flex>
        </Grid>

        <Text opacity={"0.5"} color={"gray.50"} textAlign={"center"}>
          Built with ❤️ at Sendchamp Inc. - &copy; {new Date().getFullYear()} |
          All rights reserved
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
