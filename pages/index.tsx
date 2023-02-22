import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import OfferingCards from "Components/OfferingCards";
import HomeLayout from "Layout/HomeLayout";
import Meta from "Layout/Meta";
import { useEffect, useState } from "react";
import { atom } from "recoil";

export default function Home({ countries }) {
  const selectedCountry = atom({
    key: "selectedCountry",
    default: "Nigeria",
  });
  const selectedCurrency = atom({
    key: "selectedCurrency",
    default: "NGN",
  });

  const [loadingPrices, setLoadingPrices] = useState(false);

  const [country, setCountry] = useState("Nigeria");
  const [currency, setCurrency] = useState("NGN");

  useEffect(() => {
    let timeout;
    const fetchPrices = async () => {
      try {
        setLoadingPrices(true);

        timeout = setTimeout(() => {
          setLoadingPrices(false);
        }, 2000);
      } catch (error) {}
    };
    fetchPrices();

    return () => {
      clearTimeout(timeout);
    };
  }, [country, currency]);

  return (
    <HomeLayout>
      <Box
        height={{
          base: "40vh",
          lg: "60vh",
        }}
        margin={"auto"}
        bgColor={"#edf5fe"}
      >
        <Container
          maxW={{
            base: "container.xl",
            lg: "container.md",
            xl: "container.sm",
          }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          flexDirection={"column"}
        >
          <Heading as={"h1"} textAlign={"center"} variant={"h1"}>
            Pricing for every business
          </Heading>
          <Text textAlign={"center"} mb={"2rem"}>
            No hidden fees or charges - simple & flexible pricing that fits with
            your business at any stage.
          </Text>

          <Flex
            flexDirection={{
              base: "column",
              lg: "row",
            }}
            columnGap={"20px"}
            rowGap={"20px"}
          >
            <Select
              value={country}
              size="lg"
              bgColor={"white"}
              width={"70%"}
              margin={"auto"}
              onChange={({ target }) => setCountry(target.value)}
            >
              {countries.map((country) => {
                return (
                  <option key={country.name.common} value={country.name.common}>
                    {country.name.common}
                  </option>
                );
              })}
            </Select>
            <Select
              value={currency}
              size="lg"
              bgColor={"white"}
              width={"70%"}
              margin={"auto"}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {countries.map((country) => {
                const currency =
                  country.currencies && Object?.keys(country.currencies)[0];
                return (
                  <option
                    key={`${country.name.common}-${currency}`}
                    value={currency}
                  >
                    {country.name.common} - {currency}
                  </option>
                );
              })}
            </Select>
          </Flex>
        </Container>
      </Box>

      {!loadingPrices && (
        <Box
          position={"relative"}
          marginTop={{
            base: 0,
            lg: "-4rem",
          }}
          paddingTop={{
            base: "4rem",
            lg: 0,
          }}
          paddingBottom={"4rem"}
        >
          <OfferingCards />
        </Box>
      )}

      <Flex justifyContent={"center"}>
        {loadingPrices && (
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            rowGap={"1rem"}
            padding={"2rem"}
          >
            <Spinner color="brand.500" />
            <Text>Fetching prices...</Text>
          </Flex>
        )}
      </Flex>

      <Box bgColor={"#edf5fe"}>
        <Container
          maxW={{
            base: "container.xl",
            lg: "container.md",
            xl: "container.sm",
          }}
          paddingY={"8rem"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          rowGap={"2rem"}
        >
          <Heading>Sendchamp for Startups</Heading>
          <Text textAlign={"center"}>
            Apply for $1,000 in credits, if you are a startup that is less than
            3 years old with less than $500k in total funding.
          </Text>

          <Button width={"fit-content"} colorScheme={"brand"}>
            Apply now
          </Button>
        </Container>
      </Box>

      <Container
        maxW={{ base: "container.xl", lg: "container.md", xl: "container.sm" }}
        paddingY={"8rem"}
      >
        <Heading textAlign={"center"} mb={"2rem"}>
          Start building better communication experience with Sendchamp
        </Heading>
        <Text textAlign={"center"} mb={"2rem"}>
          Access a platform that is modernizing communications and making it
          possible for your customers to communicate with your business the same
          way they do with their friends and family.
        </Text>

        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          columnGap={"1rem"}
        >
          <Button colorScheme={"brand"}>Start for free</Button>
          <Button variant={"outline"}>Talk To Sales</Button>
        </Flex>
      </Container>
    </HomeLayout>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,currencies"
    );
    const countries = await res.json();

    return {
      props: {
        countries,
      },
    };
  } catch (error) {
    return {
      props: {
        countries: [],
      },
    };
  }
};
