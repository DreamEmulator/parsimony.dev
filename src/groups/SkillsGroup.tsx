import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { BiDirections, BiHappyBeaming } from "react-icons/bi";
import { FaGraduationCap, FaRegLifeRing } from "react-icons/fa";
import { Feature } from "../components/cards/Feature";
import { Testimonial } from "../components/cards/Testimonial";
import TitleWithButton from "../components/titles/TitleWithButton";
import { HomeSkills } from "../utils/types/content/home";

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
export const SkillsGroup: React.FC<HomeSkills> = ({
  CTA,
  Skills,
  Testimonials,
}) => {
  return (
    <Box as="section" pb="24" bg={useColorModeValue("brand.100", "brand.800")}>
      <Box color="white" pt="24" pb="12rem">
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <TitleWithButton title={CTA.Title} link={CTA.Link} href={CTA.URL} />
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: "12", md: "8", lg: "2" }}
            mt={{ base: "12", md: "20" }}
          >
            <Feature icon={<BiDirections />} title={Skills.First.Title}>
              {Skills.First.Body}
            </Feature>
            <Feature icon={<BiHappyBeaming />} title={Skills.Second.Title}>
              {Skills.Second.Body}
            </Feature>
            <Feature icon={<FaGraduationCap />} title={Skills.Third.Title}>
              {Skills.Third.Body}
            </Feature>
            <Feature icon={<FaRegLifeRing />} title={Skills.Fourth.Title}>
              {Skills.Fourth.Body}
            </Feature>
          </SimpleGrid>
        </Box>
      </Box>
      <Box mt="-24" bg={useColorModeValue("brand.100", "brand.800")}>
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
    </Box>
  );
};
