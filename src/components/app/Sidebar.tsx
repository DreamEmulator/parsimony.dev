import {
  Box,
  Divider,
  Flex,
  FlexProps,
  Spacer,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import {
  FaHome,
  FaRegChartBar,
  FaRegClipboard,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { NavLink } from "../links/NavLink";
import { UserProfile } from "../images/UserProfile";
import Logo from "../icons/Logo";
import ColorModeButton from "../buttons/ColorModeButton";
import { SocialMediaLinks } from "../icons/SocialMediaLinks";

export const Sidebar = (props: FlexProps) => {
  return (
    <Flex
      bg={mode("brand.50", "brand.800")}
      direction="column"
      borderRightWidth="1px"
      width="64"
      {...props}
    >
      <Flex direction="column" flex="1" pt="5" pb="4" overflowY="auto" px="4">
        <Box mb="6">
          <Logo />
        </Box>

        {/*<Box mb="6">*/}
        {/*  <SearchField />*/}
        {/*</Box>*/}

        <Stack spacing="6" as="nav" aria-label="Sidebar Navigation">
          <Stack spacing="1">
            <NavLink label={"PAGES.HOME"} icon={FaHome} />
            <NavLink label={"PAGES.SKILLS"} icon={FaRegClipboard} />
            {/*<NavLink label={PAGES.STRATEGY} icon={FaRegChartBar} />*/}
            {/*<NavLink label={PAGES.DELIVERABLES} icon={FaRegImages} />*/}
            {/*<NavLink label={PAGE.TESTIMONIALS} icon={FaRegHeart} />*/}
          </Stack>

          <Divider />

          <SocialMediaLinks />

          <Divider />

          <Stack spacing="1">
            {/*<NavLink label={PAGE.NEWS} icon={FaRegBell} />*/}
            {/*<NavLink label={PAGES.HELP} icon={FaRegQuestionCircle} />*/}
          </Stack>
        </Stack>
        <Spacer />
      </Flex>

      <ColorModeButton />

      <Box px="4" borderTopWidth="1px">
        <UserProfile
          name="Sebastiaan Hols"
          image="https://media-exp1.licdn.com/dms/image/C5603AQFBkup1Vmpgdw/profile-displayphoto-shrink_400_400/0/1584641650431?e=1639612800&v=beta&t=fpsXE-yero-QY2nepLFnI1QWAAkRuJ_TFkT6DpoHkrY"
          email="s.hols@icloud.com"
        />
      </Box>
    </Flex>
  );
};
