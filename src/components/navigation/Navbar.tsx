import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Stack,
  TabIndicator,
  TabList,
  Tabs,
  useColorModeValue as mode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { isValidElement, ReactElement } from "react";
import { MobileNavContent } from "./MobileNavContent";

export const Template: React.FC = (props) => {
  const children = React.Children.toArray(props.children).filter<ReactElement>(
    isValidElement
  );
  const mobileNav = useDisclosure();
  return (
    <Flex
      py={4}
      px={{ base: 4, md: 6, lg: 8 }}
      bg={mode("white", "gray.800")}
      boxShadow="none"
      borderBottomWidth={mode("0", "1px")}
    >
      {children.find((child) => child.type === Brand)?.props.children}
      <Spacer display={{ base: "none", xl: "flex" }} />
      <HStack display={{ base: "none", md: "flex" }} marginStart={4}>
        <Tabs colorScheme="brand" variant="unstyled" isFitted>
          <TabList>
            {children.find((child) => child.type === Links)?.props.children}
          </TabList>
          <TabIndicator
            mt="13px"
            height={1}
            borderTopRadius="md"
            bg={mode("brand.500", "blue.200")}
          />
        </Tabs>
      </HStack>
      <Spacer />
      <HStack display={{ base: "none", md: "flex" }} spacing={3}>
        {children.find((child) => child.type === UserProfile)?.props.children}
      </HStack>

      <IconButton
        display={{ base: "flex", md: "none" }}
        size="sm"
        aria-label="Open menu"
        fontSize="20px"
        variant="ghost"
        onClick={mobileNav.onOpen}
        icon={<HamburgerIcon />}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
        <Stack spacing={5}>
          <Flex>
            {children.find((child) => child.type === Brand)?.props.children}
          </Flex>
          <Tabs orientation="vertical" variant="unstyled">
            <TabList>
              {children.find((child) => child.type === Links)?.props.children}
            </TabList>
            <TabIndicator
              marginStart="-3"
              width={1}
              borderTopRadius={{ base: "none", md: "md" }}
              bg={mode("brand.500", "brand.200")}
            />
          </Tabs>
          <Divider />

          <Flex alignItems="center">
            {
              children.find((child) => child.type === UserProfile)?.props
                .children
            }
          </Flex>
        </Stack>
      </MobileNavContent>
    </Flex>
  );
};

const Brand: React.FC = () => null;
const Links: React.FC = () => null;
const UserProfile: React.FC = () => null;

export const Navbar = Object.assign(Template, { Brand, Links, UserProfile });
