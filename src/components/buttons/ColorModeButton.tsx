import React from "react";
import { Button, Icon } from "@chakra-ui/react";
import { ImSun } from "react-icons/im";
import { IoMdMoon } from "react-icons/io";
import { useColorMode } from "@chakra-ui/color-mode";

interface Props {}

const ColorModeButton: React.FC<Props> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      size="sm"
      colorScheme="brand"
      my={4}
      mx={2}
    >
      <Icon as={colorMode === "dark" ? ImSun : IoMdMoon} />
    </Button>
  );
};

export default ColorModeButton;
