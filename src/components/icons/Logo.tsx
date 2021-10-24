import React from "react";
import { Flex, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { GiMoebiusTriangle } from "react-icons/gi";
import { useRouter } from "next/router";
import { useMobileMenuState } from "../../utils/hooks/useMobileMenuState";
import useLogoColors from "../../utils/hooks/useLogo";

interface Props {
  size?: "large" | "medium" | "small";
}

const Logo: React.FC<Props> = ({ size = "medium" }) => {
  const router = useRouter();
  const { textColor, iconColor } = useLogoColors();
  const { isOpen, onClose, onOpen } = useMobileMenuState();
  const handleClick = () => {
    isOpen && onClose();
    router.push("/");
  };
  return (
    <HStack onClick={handleClick} cursor="pointer">
      <Icon color={iconColor} as={GiMoebiusTriangle} height={8} width={8} />
      <Text
        bgGradient={textColor}
        bgClip="text"
        fontSize={size === "large" ? "6xl" : size === "medium" ? "2xl" : "xl"}
        fontWeight="400"
      >
        Parsimony.dev
      </Text>
    </HStack>
  );
};

export default Logo;
