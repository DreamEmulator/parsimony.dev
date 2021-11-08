import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Banner } from "../../utils/types/content/home";

export const HeroBanner: React.FC<Banner> = ({ Pitch, Slogan }) => {
  return (
    <Box bg="gray.800" as="section" minH="140px" position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box maxW="xl">
            <Heading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              color={useColorModeValue("brand.50", "brand.50")}
            >
              {Slogan}
            </Heading>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              mt="4"
              maxW="lg"
              fontWeight="light"
              color={useColorModeValue("brand.50", "brand.50")}
            >
              {Pitch}
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              mt="10"
              spacing="4"
            >
              <HStack
                as="a"
                transition="background 0.2s"
                justify={{ base: "center", md: "flex-start" }}
                href="#"
                color="white"
                rounded="full"
                fontWeight="bold"
                px="6"
                py="3"
                _hover={{ bg: "whiteAlpha.300" }}
              >
                <span>Philosophy</span>
                <HiChevronRight />
              </HStack>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Box
            position="absolute"
            w="full"
            h="full"
            bg={useColorModeValue("brand.400", "brand.800")}
          />
          <Img
            src="images/cool-background.svg"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
        </Box>
      </Flex>
    </Box>
  );
};
