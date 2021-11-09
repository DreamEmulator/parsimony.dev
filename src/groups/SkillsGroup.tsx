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
import { SkillCard } from "../components/cards/SkillCard";
import TitleWithButton from "../components/titles/TitleWithButton";
import { HomeSkills } from "../utils/types/content/home";

export const SkillsGroup: React.FC<HomeSkills> = ({ CTA, Skills }) => {
  return (
    <Box as="section" pb="24" bg={useColorModeValue("brand.100", "brand.800")}>
      <Box color="white" pt="24">
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
            <SkillCard icon={<BiDirections />} title={Skills.First.Title}>
              {Skills.First.Body}
            </SkillCard>
            <SkillCard icon={<BiHappyBeaming />} title={Skills.Second.Title}>
              {Skills.Second.Body}
            </SkillCard>
            <SkillCard icon={<FaGraduationCap />} title={Skills.Third.Title}>
              {Skills.Third.Body}
            </SkillCard>
            <SkillCard icon={<FaRegLifeRing />} title={Skills.Fourth.Title}>
              {Skills.Fourth.Body}
            </SkillCard>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};
