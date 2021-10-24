import {
  Avatar,
  Flex,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

interface UserProfileProps {
  name: string;
  image: string;
  email: string;
}

export const UserProfile = (props: UserProfileProps) => {
  const { name, image, email } = props;
  return (
    <HStack spacing="4" flexShrink={0} py="4">
      <Avatar size="sm" name={name} src={image} />
      <Flex direction="column" fontWeight="medium">
        <Text fontSize="sm">{name}</Text>
        <Text
          fontSize="xs"
          lineHeight="shorter"
          color={mode("brand.600", "brand.400")}
        >
          {email}
        </Text>
      </Flex>
    </HStack>
  );
};
