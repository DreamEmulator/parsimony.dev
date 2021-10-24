import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Img,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { BsGearWideConnected, BsGlobe } from "react-icons/bs";
import { FaRegQuestionCircle, FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import { useRouter } from "next/router";
import { ContentBlock } from "../../utils/types/content";

const CTACardBlock: React.FC<ContentBlock> = ({
  title,
  subtitle,
  item,
  src,
  link,
  url,
  highlight,
}) => {
  const router = useRouter();
  const accentColor = useColorModeValue("brand.600", "brand.100");
  const getPageIcon = (src: String): IconType => {
    switch (true) {
      case src === "hybrid-icon":
        return FaReact;
      case src === "native-icon":
        return BsGearWideConnected;
      case src === "web-icon":
        return BsGlobe;
      default:
        return FaRegQuestionCircle;
    }
  };

  const handleLink = (url: String) => () => {
    router.push({
      pathname: `/${url}`,
    });
  };
  return (
    <Box
      rounded={{ base: "lg", sm: "xl" }}
      bg={useColorModeValue("white", "brand.700")}
      position="relative"
      px="6"
      pb="6"
      pt="10"
      overflow="hidden"
      shadow="lg"
      maxW="md"
      width="100%"
      transform={highlight ? { lg: "scale(1.05)" } : {}}
      zIndex={highlight ? 1 : 0}
    >
      {highlight && (
        <Flex
          bg={useColorModeValue("brand.500", "brand.200")}
          position="absolute"
          right={-20}
          top={6}
          width="240px"
          transform="rotate(45deg)"
          py={2}
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="xs"
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="wider"
            color={useColorModeValue("white", "brand.800")}
          >
            pro
          </Text>
        </Flex>
      )}
      <VStack spacing={{ base: 3, md: 6 }}>
        {src && (
          <Icon
            aria-hidden
            as={getPageIcon(src)}
            fontSize={highlight ? "8xl" : "5xl"}
            color={accentColor}
          />
        )}
        <Heading
          size="md"
          fontWeight="extrabold"
          color={accentColor}
          textAlign="center"
        >
          {subtitle}
        </Heading>
      </VStack>
      <Flex
        align="flex-end"
        justify="center"
        fontWeight="extrabold"
        color={useColorModeValue("brand.700", "white")}
        my="8"
      >
        <Heading
          size="3xl"
          fontWeight="inherit"
          lineHeight="0.9em"
          textAlign="center"
        >
          {title}
        </Heading>
      </Flex>
      <List spacing="4" mb="8" maxW="28ch" mx="auto">
        {item &&
          item.map((item, index) => (
            <ListItem fontWeight="medium" key={index} color={accentColor}>
              <ListIcon
                fontSize="xl"
                as={HiCheckCircle}
                marginEnd={2}
                color={accentColor}
              />
              {item}
            </ListItem>
          ))}
      </List>
      {url && link && (
        <Button
          onClick={handleLink(url)}
          size="lg"
          color={useColorModeValue("brand.600", "white")}
          w="full"
          fontWeight="extrabold"
          py={{ md: "8" }}
          variant="outline"
          borderWidth="2px"
        >
          {link}
        </Button>
      )}
    </Box>
  );
};

export default CTACardBlock;
