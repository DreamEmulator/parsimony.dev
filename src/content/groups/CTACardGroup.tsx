import { Box, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import { useMemo } from "react";
import CTACardBlock from "../blocks/CTACardBlock";
import { ContentGroup } from "../../utils/types/content";

const CTACardGroup: React.FC<ContentGroup> = ({ contentBlocks }) => {
  const sortedLinks = useMemo(() => {
    if (!contentBlocks.length) {
      return [];
    }
    const sortedLinks = [...contentBlocks];
    return sortedLinks.sort((a, b) =>
      a?.order && b?.order ? (a.order > b.order ? 1 : -1) : 0
    );
  }, [contentBlocks]);
  return (
    <Box as="section" px={{ base: "4", md: "8" }} py={{ base: "6", md: "10" }}>
      <SimpleGrid
        columns={{ md: 1, lg: 3 }}
        spacing={{ base: 2, lg: "0" }}
        maxW="7xl"
        mx="auto"
        justifyItems="center"
        alignItems="center"
      >
        {sortedLinks.map(
          (linkCard, index) =>
            linkCard && <CTACardBlock key={index} {...linkCard} />
        )}
      </SimpleGrid>
    </Box>
  );
};

export default CTACardGroup;
