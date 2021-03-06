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
    mx="auto"
    px={{ base: "4", sm: "6" }}
    pb={{ base: "4", sm: "20" }}
    bg={useColorModeValue("brand.50", "brand.900")}
  >
    <Box maxW={{ base: "4xl", lg: "7xl" }} mx="auto">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
        <StatCard title={What.Body} value={What.Title} icon={<DiAppstore />} />
        <StatCard title={Why.Body} value={Why.Title} icon={<AiFillFire />} />
        <StatCard title={How.Body} value={How.Title} icon={<DiGitBranch />} />
      </SimpleGrid>
    </Box>
  </Box>
);
