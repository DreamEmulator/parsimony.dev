import React from "react";
import { Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { ImSun } from "react-icons/im";
import { IoMdMoon } from "react-icons/io";
import { useColorMode } from "@chakra-ui/color-mode";

interface Props {}

const ColorModeButton: React.FC<Props> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Icon
      borderWidth={1}
      p={2}
      borderRadius={100}
      onClick={toggleColorMode}
      fontSize="2em"
      as={colorMode === "dark" ? ImSun : IoMdMoon}
      fill={useColorModeValue("teal.400", "blue.200")}
    />
  );
};

export default ColorModeButton;
