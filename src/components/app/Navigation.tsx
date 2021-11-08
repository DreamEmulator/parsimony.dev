import React from "react";
import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import { Navbar } from "../navigation/Navbar";
import Logo from "../icons/Logo";
import { NavTabLink } from "../navigation/NavTabLink";
import { UserProfile } from "../images/UserProfile";
import ColorModeButton from "../buttons/ColorModeButton";

interface Props {}

const Navigation: React.FC<Props> = ({}) => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.700")}>
      <Navbar>
        <Navbar.Brand>
          <Center marginEnd={6}>
            <Logo />
          </Center>
        </Navbar.Brand>
        <Navbar.Links>
          <NavTabLink>Features</NavTabLink>
          <NavTabLink>Documentation</NavTabLink>
          <NavTabLink>Pricing</NavTabLink>
          <NavTabLink>Team</NavTabLink>
        </Navbar.Links>
        <Navbar.UserProfile>
          <UserProfile
            name="Sebastiaan Hols"
            image="https://media-exp1.licdn.com/dms/image/C5603AQFBkup1Vmpgdw/profile-displayphoto-shrink_400_400/0/1584641650431?e=1639612800&v=beta&t=fpsXE-yero-QY2nepLFnI1QWAAkRuJ_TFkT6DpoHkrY"
            email="s.hols@icloud.com"
          />
        </Navbar.UserProfile>
      </Navbar>
    </Box>
  );
};

export default Navigation;
