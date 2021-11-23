import { getHomeData } from "../lib/pages";
import { NextPageContext } from "next";
import React from "react";
import StepsGroup from "../content/groups/StepsGroup";
import { Home } from "../utils/types/content/home";
import { HeroBanner } from "../components/images/HeroBanner";
import DefinitionTitle from "../components/titles/DefinitionTitle";
import { StatCardsGroup } from "../components/cards/StatCardsGroup";
import { SkillsGroup } from "../groups/SkillsGroup";
import TestimonialsGroup from "../groups/TestimonialsGroup";

type Props = {
  data: Home;
};

const Index: React.FC<Props> = ({
  data: { Banner, Strategy, Definition, Values, Skills, Testimonials },
  data,
}) => {
  console.log(data);
  return (
    <>
      <HeroBanner {...Banner} />
      <DefinitionTitle {...Definition} />
      <StatCardsGroup {...Values} />
      <SkillsGroup {...Skills} />
      <StepsGroup {...Strategy} />
      <TestimonialsGroup {...Testimonials} />
    </>
  );
};

export default Index;

export async function getStaticProps(context: NextPageContext) {
  const data = getHomeData();
  return {
    props: { data },
  };
}
