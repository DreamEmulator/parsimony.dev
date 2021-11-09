import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

interface FeatureProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}

export const Feature = (props: FeatureProps) => {
  const { title, children, icon } = props;
  return (
    <Box>
      <Box color="blue.300" fontSize="2.5rem">
        {icon}
      </Box>
      <Stack mt="6">
        <Text
          as="h3"
          fontSize="lg"
          fontWeight="bold"
          color={useColorModeValue("brand.800", "brand.200")}
        >
          {title}
        </Text>
        <Text
          pr="6"
          lineHeight="tall"
          color={useColorModeValue("brand.800", "brand.200")}
          fontWeight="regular"
          fontFamily="mono"
        >
          {children}
        </Text>
      </Stack>
    </Box>
  );
};
