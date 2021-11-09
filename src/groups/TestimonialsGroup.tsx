import React from "react";
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { Testimonial } from "../components/cards/Testimonial";
import { Testimonial as TestimonialProps } from "../utils/types/content/home";

type Props = {
  Testimonials: TestimonialProps[];
};
const TestimonialsGroup: React.FC<Props> = ({ Testimonials }) => {
  return (
    <Box py="24" mt="-24" bg={useColorModeValue("brand.100", "brand.800")}>
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <SimpleGrid spacing="14" columns={{ base: 1, lg: 2 }}>
          {Testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.Name}
              image={testimonial.Image}
              name={testimonial.Name}
              role={testimonial.Role}
            >
              {testimonial.Text}
            </Testimonial>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default TestimonialsGroup;
