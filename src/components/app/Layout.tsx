import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import * as React from "react";
import { MobileTopBar } from "./MobileTopBar";
import { Sidebar } from "./Sidebar";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <Flex h="100vh" flexDirection="column">
      <MobileTopBar />
      <Flex flex="1">
        <Sidebar display={{ base: "none", md: "flex" }} />
        <Flex flex="1">
          <Box
            flexDirection="column"
            h="full"
            w="full"
            bg={useColorModeValue("brand.100", "brand.900")}
          >
            {children}
            <Footer />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
