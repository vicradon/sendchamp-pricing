import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

function ProductsDropdown(props: Props) {
  const {} = props;

  const channels = [
    {
      name: "SMS",
      icon: "",
      description:
        "Send SMS seamlessly at the best rate via the best route to your customers",
    },
    {
      name: "email",
      icon: "",
      description: "Send emails to your customers with high deliverability",
    },
    {
      name: "Whatsapp",
      icon: "",
      description: "Engage your customers via Whatsapp at ease",
    },
    {
      name: "Voice",
      icon: "",
      description: "Add voice capabilities to any app, communication system",
    },
  ];

  return (
    <Box>
      <Grid templateColumns={"1fr 1fr"}>
        <Box>
          <Text textTransform={"uppercase"}>Channels</Text>

          <Flex>
            <Box>
              <Text>SMS</Text>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Text textTransform={"uppercase"}>Services</Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default ProductsDropdown;
