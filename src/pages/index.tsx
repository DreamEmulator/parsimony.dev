import { getHomeData } from "../lib/pages";
import { NextPageContext } from "next";
import React from "react";
import StepsGroup from "../content/groups/StepsGroup";
import { Home } from "../utils/types/content/home";
import { HeroBanner } from "../components/images/HeroBanner";
import DefinitionTitle from "../components/titles/DefinitionTitle";
import { StatCardsGroup } from "../components/cards/StatCardsGroup";
import { SkillsGroup } from "../groups/SkillsGroup";

type Props = {
  data: Home;
};

const Index: React.FC<Props> = ({
  data: {
    Banner: { Pitch, Slogan },
    Strategy: { Title: StrategyTitle, Steps },
    Definition: { Word, Definition },
    Values,
    Skills,
  },
  data,
}) => {
  console.log(data);
  return (
    <>
      {Slogan && Pitch && <HeroBanner Pitch={Pitch} Slogan={Slogan} />}
      {Word && Definition && (
        <DefinitionTitle Word={Word} Definition={Definition} />
      )}
      {Values && <StatCardsGroup {...Values} />}
      <SkillsGroup {...Skills} />
      {Steps && StrategyTitle && (
        <StepsGroup Title={StrategyTitle} Steps={Steps} />
      )}
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
