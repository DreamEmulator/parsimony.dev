import {
  Box,
  Flex,
  FlexProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import useLogoColors from "../../utils/hooks/useLogo";

interface StatCardProps extends FlexProps {
  title: string;
  icon: React.ReactElement;
  value: string;
}

export const StatCard = (props: StatCardProps) => {
  const { value, title, icon } = props;
  const { textColor } = useLogoColors();
  return (
    <Flex
      bg={useColorModeValue("blue.50", "blue.300")}
      p="6"
      rounded="2xl"
      {...props}
    >
      <Box flex="1" mr="4" color={useColorModeValue("blue.500", "inherit")}>
        <Text fontSize="xl" fontWeight="extrabold" mb="4" lineHeight="1">
          {value}
        </Text>
        <Text fontFamily="mono" color={useColorModeValue("gray.900", "white")}>
          {title}
        </Text>
      </Box>
      <Box fontSize="3rem" color={useColorModeValue("blue.100", "blue.500")}>
        {icon}
      </Box>
    </Flex>
  );
};
