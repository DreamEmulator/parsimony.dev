import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import * as React from "react";
import { BiDirections, BiHappyBeaming } from "react-icons/bi";
import { FaGraduationCap, FaRegLifeRing } from "react-icons/fa";
import { Feature } from "../components/cards/Feature";
import { Testimonial } from "../components/cards/Testimonial";
import TitleWithButton from "../components/titles/TitleWithButton";

type Props = {
  title: {
    title: string;
    link: string;
    url: string;
  };
  skills: {
    first: { title: string; body: string };
    second: { title: string; body: string };
    third: { title: string; body: string };
    fourth: { title: string; body: string };
  };
  testimonials: {
    image: string;
    name: string;
    role: string;
    text: string;
  }[];
};
export const Skills: React.FC<Props> = ({ title, skills, testimonials }) => {
  return (
    <Box as="section" pb="24">
      <Box bg="gray.800" color="white" pt="24" pb="12rem">
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <TitleWithButton
            title={title.title}
            link={title.link}
            href={title.url}
          />
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: "12", md: "8", lg: "2" }}
            mt={{ base: "12", md: "20" }}
          >
            <Feature icon={<BiDirections />} title={skills.first.title}>
              {skills.first.body}
            </Feature>
            <Feature icon={<BiHappyBeaming />} title={skills.second.title}>
              {skills.second.body}
            </Feature>
            <Feature icon={<FaGraduationCap />} title={skills.third.title}>
              {skills.third.body}
            </Feature>
            <Feature icon={<FaRegLifeRing />} title={skills.fourth.title}>
              {skills.fourth.body}
            </Feature>
          </SimpleGrid>
        </Box>
      </Box>
      <Box mt="-24">
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <SimpleGrid spacing="14" columns={{ base: 1, lg: 2 }}>
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.name}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
              >
                {testimonial.text}
              </Testimonial>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};
