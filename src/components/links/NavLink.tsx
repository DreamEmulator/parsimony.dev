import * as React from "react";
import {
  HStack,
  Icon,
  Link as ChakraLink,
  LinkProps,
  useColorModeValue as mode,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMobileMenuState } from "../../utils/hooks/useMobileMenuState";

interface NavLinkProps extends LinkProps {
  isActive?: boolean;
  label: string;
  icon: React.ElementType;
}

export const NavLink = (props: NavLinkProps) => {
  const { icon, isActive, label, ...rest } = props;
  const { isOpen, onClose, onOpen } = useMobileMenuState();
  const router = useRouter();
  const handleClick = () => {
    isOpen && onClose();
    router.push(label === "PAGES.HOME" ? "/" : label.toLowerCase());
  };
  return (
    <ChakraLink
      display="block"
      py="2"
      px="3"
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      fontSize="sm"
      userSelect="none"
      aria-current={
        router.pathname === `/${label.toLowerCase()}` ? "page" : undefined
      }
      color={mode("brand.600", "brand.400")}
      _hover={{
        bg: mode("brand.100", "brand.700"),
        color: mode("brand.900", "white"),
      }}
      _activeLink={{
        bg: mode("brand.100", "brand.700"),
      }}
      {...rest}
    >
      <HStack onClick={handleClick} spacing="4">
        <Icon as={icon} fontSize="lg" opacity={0.64} />
        <Text as="span">{label}</Text>
      </HStack>
    </ChakraLink>
  );
};
