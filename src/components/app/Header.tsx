import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import ColorModeButton from "../buttons/ColorModeButton";
import Logo from "../icons/Logo";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  return (
    <Flex mx="auto" maxW="7xl" py="4" px={{ base: "4", md: "8" }}>
      <Logo />
      <Spacer />
      <Box pt="4">
        <ColorModeButton />
      </Box>
    </Flex>
  );
};

export default Header;
