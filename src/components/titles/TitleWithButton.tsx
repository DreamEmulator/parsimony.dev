import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { CTAButton } from "../buttons/CTAButton";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  href: string;
}

const TitleWithButton: React.FC<Props> = ({ title, link, href }) => {
  return (
    <Stack
      spacing="10"
      direction={{ base: "column", lg: "row" }}
      align={{ base: "flex-start", lg: "center" }}
      justify="space-between"
    >
      <Heading
        size="2xl"
        lineHeight="short"
        fontWeight="extrabold"
        maxW={{ base: "unset", lg: "800px" }}
      >
        {title}
      </Heading>
      <Link href={href}>
        <CTAButton w={{ base: "full", md: "auto" }}>{link}</CTAButton>
      </Link>
    </Stack>
  );
};

export default TitleWithButton;
