import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import {
  BiBarChartSquare,
  BiBriefcaseAlt,
  BiDollarCircle,
} from "react-icons/bi";
import { DiAppstore, DiGitBranch } from "react-icons/di";
import { AiFillFire } from "react-icons/ai";
import { StatCard } from "./StatCard";
import { Values as ValuesProps } from "../../utils/types/content/home";

export const StatCardsGroup: React.FC<ValuesProps> = ({ What, Why, How }) => (
  <Box
    as="section"
    position="relative"
    maxW="7xl"
    mx="auto"
    px={{ base: "4", sm: "6" }}
    py={{ base: "8", lg: "16" }}
    background={useColorModeValue("brand.50", "brand.900")}
  >
    <Box maxW={{ base: "4xl", lg: "unset" }} mx="auto" pl={{ lg: "10" }}>
      <SimpleGrid mt="12" columns={{ base: 1, md: 3 }} spacing="6">
        <StatCard title={What.Body} value={What.Title} icon={<DiAppstore />} />
        <StatCard title={Why.Body} value={Why.Title} icon={<AiFillFire />} />
        <StatCard title={How.Body} value={How.Title} icon={<DiGitBranch />} />
      </SimpleGrid>
    </Box>
  </Box>
);
