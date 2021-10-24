import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Sidebar } from "./Sidebar";
import { useMobileMenuState } from "../../utils/hooks/useMobileMenuState";
import Logo from "../icons/Logo";

export const MobileTopBar = () => {
  const { isOpen, onClose, onOpen } = useMobileMenuState();
  return (
    <Flex
      align="center"
      justify="space-between"
      py="2"
      px="4"
      bg={mode("brand.50", "brand.800")}
      display={{ base: "flex", md: "none" }}
      borderBottomWidth="1px"
    >
      <Logo />
      <IconButton
        onClick={onOpen}
        variant="unstyled"
        display="flex"
        cursor="pointer"
        aria-label="Menu"
        icon={<HiOutlineMenu fontSize="1.5rem" />}
      />
      <Drawer
        size="xs"
        placement="left"
        isOpen={isOpen}
        blockScrollOnMount={false}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={mode("white", "brand.800")}
          shadow="none"
          position="relative"
          maxW="64"
        >
          <Sidebar width="full" height="full" bg="inherit" border="0" />
          <DrawerCloseButton
            bg="brand.500"
            _hover={{ bg: "brand.600" }}
            _active={{ bg: "brand.700" }}
            rounded="0"
            position="absolute"
            color="white"
            right="-8"
            top="0"
          />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
