import React from "react";
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { Testimonial } from "../components/cards/Testimonial";
import { Testimonial as TestimonialProps } from "../utils/types/content/home";

const TestimonialsGroup: React.FC<TestimonialProps[]> = (Testimonials) => {
  return (
    <Box py="24" mt="-24" bg={useColorModeValue("brand.100", "brand.800")}>
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <SimpleGrid spacing="14" columns={{ base: 1, lg: 2 }}>
          {Object.values(Testimonials).map(
            ({ Show, Text, Name, Image, Role }) =>
              Show && (
                <Testimonial key={Name} name={Name} image={Image} role={Role}>
                  {Text}
                </Testimonial>
              )
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TestimonialsGroup;
