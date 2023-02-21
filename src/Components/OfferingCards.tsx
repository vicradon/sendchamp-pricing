import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {}

function OfferingCards(props: Props) {
  const {} = props;

  const offerings = [
    {
      name: "SMS",
      icon: "/icons/SMS.svg",
      leftSection: {
        text: "To Send SMS",
        pricing: "NGN 2.4255/sms",
      },
      rightSection: {
        text: "To Receive SMS",
        pricing: "",
      },
      moreDetails: true,
    },
    {
      name: "Voice",
      icon: "/icons/Voice.svg",
      leftSection: {
        text: "To make Calls",
        pricing: "NGN 66.0000/sec",
      },
      rightSection: {
        text: "To Receive Calls",
        pricing: "",
      },
      moreDetails: false,
    },
    {
      name: "Email",
      icon: "/icons/Email.svg",
      leftSection: {
        text: "Price Per Mail",
        pricing: "NGN 0.5500/email",
      },
      moreDetails: false,
    },
    {
      name: "Whatsapp",
      icon: "/icons/WhatsappPlain.svg",
      leftSection: {
        text: "To Send Message",
        pricing: "NGN 2.7500/msg",
      },
      rightSection: {
        text: "To Receive Message",
        pricing: "NGN 0.0000/msg",
      },
      moreDetails: true,
    },
    {
      name: "Verification",
      icon: "/icons/CheckCircle.svg",
      leftSection: {
        text: "To Send OTP",
        pricing: "NGN 0.0000/OTP",
      },
      rightSection: {
        text: "To Confirm OTP",
        pricing: "NGN 0.5500/OTP",
      },
      moreDetails: false,
    },
  ];

  return (
    // <Container
    //   maxW={{
    //     base: "container.sm",
    //     // lg: "container.md",
    //     // xl: "container.sm",
    //   }}
    // >
    <Flex flexWrap={"wrap"} rowGap={"2rem"} columnGap={"2rem"}>
      {offerings.map((offering) => {
        let comingSoon = false;

        if (offering.rightSection) {
          comingSoon = offering.rightSection.pricing === "";
        }

        return (
          <Box
            key={offering.name}
            border={"1px solid #197eef66"}
            rounded={"lg"}
            minWidth={"300px"}
          >
            <Box padding={"2rem 1rem"}>
              <Box
                width={"64px"}
                height={"64px"}
                bgColor={"brand.500"}
                rounded={"lg"}
                padding={"5px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mb={"2rem"}
              >
                <Image
                  src={offering.icon}
                  width={32}
                  height={32}
                  alt={offering.name}
                />
              </Box>

              <Box>
                <Text fontSize={"lg"} fontWeight={"bold"} mb={"2rem"}>
                  {offering.name}
                </Text>
                <Flex justifyContent={"space-between"}>
                  <Box>
                    <Text mb={"0.5rem"}>{offering.leftSection.text}</Text>
                    <Text>{offering.leftSection.pricing}</Text>
                  </Box>
                  <Box fontSize={"sm"}>
                    <Text mb={"0.5rem"}>{offering?.rightSection?.text}</Text>
                    <Text>
                      {comingSoon ? (
                        <Box
                          padding={"5px 10px"}
                          color={"#197eef"}
                          bgColor={"#197eef14"}
                          rounded={"full"}
                          fontSize={"xs"}
                          display={"inline-flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          Coming soon
                        </Box>
                      ) : (
                        offering?.rightSection?.pricing
                      )}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            {offering.moreDetails && (
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                borderTop={"1px solid #197eef66"}
                padding={"2rem"}
              >
                <Button
                  textDecor={"underline"}
                  textAlign={"center"}
                  variant={"link"}
                  colorScheme={"brand"}
                  fontSize={"lg"}
                >
                  More details
                </Button>
              </Flex>
            )}
          </Box>
        );
      })}
    </Flex>
    // </Container>
  );
}

export default OfferingCards;
