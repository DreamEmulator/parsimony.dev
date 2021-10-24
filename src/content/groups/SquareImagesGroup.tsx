import {
  Box,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import SquareImageBlock from "../blocks/SquareImageBlock";
import { ContentGroup } from "../../utils/types/content";

const SquareImagesGroup: React.FC<ContentGroup> = ({ contentBlocks }) => {
  return (
    <Box as="section">
      <Box py={{ base: "12", md: "14" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacingX="6"
          spacingY="16"
        >
          {contentBlocks.map((square, idx) =>
            square !== null ? (
              <SquareImageBlock key={idx} {...square}>
                {square.body}
              </SquareImageBlock>
            ) : null
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SquareImagesGroup;
