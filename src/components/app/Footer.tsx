import { Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { SocialMediaLinks } from "../icons/SocialMediaLinks";
import { FiTriangle } from "react-icons/fi";

interface Props {}

const Footer: React.FC<Props> = ({}) => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Stack>
      <Stack
        direction={{ base: "column-reverse", sm: "row" }}
        spacing="4"
        align="center"
        justify="space-between"
      >
        <HStack>
          <Icon as={FiTriangle} />
          <Text fontSize="medium">Parsimony.dev</Text>
        </HStack>
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
