import {
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputRightElement,
  Square,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import * as React from "react";

export const SearchField = (props: InputGroupProps) => {
  return (
    <InputGroup size="sm" {...props}>
      <InputLeftElement pointerEvents="none">
        <BsSearch opacity={0.5} />
      </InputLeftElement>
      <InputRightElement>
        <Square
          rounded="base"
          fontSize="xs"
          borderWidth="1px"
          size="5"
          bg={mode("brand.100", "brand.800")}
          color="brand.500"
        >
          /
        </Square>
      </InputRightElement>
      <Input
        rounded="md"
        placeholder="Search"
        bg={mode("white", "brand.900")}
        _placeholder={{
          opacity: 1,
          color: mode("brand.400", "brand.500"),
        }}
      />
    </InputGroup>
  );
};
