import React from "react";
import {
  Box,
  HStack,
  Icon,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiTriangle } from "react-icons/fi";
import useLogoColors from "../../utils/hooks/useLogo";

interface Props {
  title: string;
  subtitle: string;
  icon?: IconType;
  center?: boolean;
}

const PageTitle: React.FC<Props> = ({ title, subtitle, icon, center }) => {
  const { textColor, iconColor } = useLogoColors();
  return (
    <Box as="section">
      <Box
        mx="auto"
        px={{ base: "6", lg: "8" }}
        py={{ base: "2", md: "6" }}
        textAlign={center ? "center" : "initial"}
      >
        <HStack justifyContent={center ? "center" : "flex-start"}>
          {icon && <Icon color={iconColor} as={icon} fontSize="7xl" />}
          <Text
            bgGradient={textColor}
            bgClip="text"
            fontSize={{ base: "4xl", md: "7xl" }}
            fontWeight="light"
          >
            {title}
          </Text>
        </HStack>
        {subtitle && (
          <HStack justifyContent={center ? "center" : "flex-start"}>
            <Icon color={iconColor} as={FiTriangle} />
            <Text
              bgGradient={textColor}
              bgClip="text"
              mt="2"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="regular"
            >
              {subtitle}
            </Text>
          </HStack>
        )}
      </Box>
      <Divider />
    </Box>
  );
};

export default PageTitle;
