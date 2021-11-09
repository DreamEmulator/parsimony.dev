import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SocialMediaLinks } from "../icons/SocialMediaLinks";
import { FiTriangle } from "react-icons/fi";
import { AiFillFire } from "react-icons/ai";

interface Props {}

const Footer: React.FC<Props> = ({}) => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    py="12"
    px={{ base: "4", md: "8" }}
    background={useColorModeValue("gray.100", "brand.700")}
  >
    <Stack maxW="4xl" mx="auto">
      <Stack
        direction={{ base: "column-reverse", sm: "row" }}
        spacing="4"
        align="center"
        justify="space-between"
      >
        <VStack alignItems="flex-start">
          <HStack>
            <Icon as={FiTriangle} />
            <Heading size="md" fontWeight="thin">
              Parsimony.dev
            </Heading>
          </HStack>
          <Text fontFamily="mono">
            Developed with <Icon as={AiFillFire} /> in Rotterdam
          </Text>
        </VStack>
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
