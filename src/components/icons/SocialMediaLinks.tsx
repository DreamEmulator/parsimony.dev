import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import * as React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="brand.600" {...props}>
    <IconButton
      as="a"
      href="https://nl.linkedin.com/in/sebastiaan-hols"
      aria-label="LinkedIn"
      target="_blank"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://github.com/DreamEmulator"
      aria-label="GitHub"
      target="_blank"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://stackoverflow.com/users/5145356/sebastiaan"
      aria-label="StackOverflow"
      target="_blank"
      icon={<FaStackOverflow fontSize="20px" />}
    />
  </ButtonGroup>
);
