import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Definition as DefinitionProps } from "../../utils/types/content/home";

const DefinitionTitle: React.FC<DefinitionProps> = ({ Word, Definition }) => {
  return (
    <VStack
      textAlign="center"
      mx="auto"
      justifyContent="center"
      py={{ base: 8, md: 16 }}
      background={useColorModeValue("brand.50", "brand.900")}
    >
      <Heading
        fontSize={{ base: "3xl", sm: "5xl" }}
        fontWeight="thin"
        fontStyle="italic"
      >
        {Word}
      </Heading>
      <Text
        color={useColorModeValue("gray.600", "whiteAlpha.700")}
        fontWeight="medium"
        mt="4"
        fontFamily="mono"
        fontSize="lg"
        maxWidth="xl"
      >
        {Definition}
      </Text>
    </VStack>
  );
};

export default DefinitionTitle;
