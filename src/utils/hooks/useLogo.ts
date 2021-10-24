import { useColorModeValue } from "@chakra-ui/react";

const useLogoColors = () => ({
  textColor: useColorModeValue(
    "linear(110deg, brand.500, brand.400)",
    "linear(160deg, brand.500, brand.200)"
  ),
  iconColor: useColorModeValue("brand.400", "brand.500"),
});

export default useLogoColors;
