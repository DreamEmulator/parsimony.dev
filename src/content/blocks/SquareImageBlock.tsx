import React, { useState } from "react";
import {
  Heading,
  Box,
  VStack,
  Img,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { ContentBlock } from "../../utils/types/content";

const SquareImageBlock: React.FC<ContentBlock> = (
  { title, subtitle, src, body, order, SIZE },
  children
) => {
  const { colorMode } = useColorMode();
  const [hovering, setHovering] = useState(false);
  return (
    <VStack justifyContent="center">
      <Box pos="relative" mb="2">
        {title && src && (
          <Img
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            top={hovering ? "-0.5" : "0"}
            left={hovering ? "-0.5" : "0"}
            transition="all 0.3s"
            pos="relative"
            alt={title}
            w="32"
            h="32"
            rounded="lg"
            objectFit="cover"
            src={src}
            zIndex="1"
          />
        )}
        <Box
          zIndex="0"
          pos="absolute"
          w="32"
          transition="all 0.3s"
          bottom={hovering ? "-2" : "-1"}
          left={hovering ? "2" : "1"}
          h="100%"
          bgGradient={
            colorMode === "dark"
              ? "linear(-55deg, brand.700, brand.400)"
              : "linear(-55deg, brand.700, brand.600)"
          }
          rounded="lg"
        />
      </Box>
      <Heading
        as="h3"
        size="lg"
        transition="all 0.3s"
        color={useColorModeValue("brand.600", "brand.100")}
        fontWeight="500"
      >
        {title}
      </Heading>
      {/*<HStack mt="5" spacing="3">*/}
      {/*  {title && body && (*/}
      {/*    <Link*/}
      {/*      isExternal*/}
      {/*      color={useColorModeValue("brand.600", "brand.300")}*/}
      {/*      href={body}*/}
      {/*    >*/}
      {/*      <VisuallyHidden>{`${title}'s explaination page`}</VisuallyHidden>*/}
      {/*      <FaInfoCircle aria-hidden />*/}
      {/*    </Link>*/}
      {/*  )}*/}
      {/*  <Link*/}
      {/*    isExternal*/}
      {/*    color={useColorModeValue("brand.600", "brand.300")}*/}
      {/*    href="/get-in-touch"*/}
      {/*  >*/}
      {/*    <VisuallyHidden>{`${title}'s get in touch page`}</VisuallyHidden>*/}
      {/*    <FaQuestionCircle aria-hidden />*/}
      {/*  </Link>*/}
      {/*</HStack>*/}
    </VStack>
  );
};

export default SquareImageBlock;
