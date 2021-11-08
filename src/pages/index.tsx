import { getHomeData } from "../lib/pages";
import { NextPageContext } from "next";
import React from "react";
import StepsGroup from "../content/groups/StepsGroup";
import { Home } from "../utils/types/content/home";
import { HeroBanner } from "../components/images/HeroBanner";
import DefinitionTitle from "../components/titles/DefinitionTitle";

type Props = {
  data: Home;
};

const Index: React.FC<Props> = ({
  data: {
    Banner: { Pitch, Slogan },
    Steps,
    Definition: { Word, Definition },
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
      {Steps && <StepsGroup steps={Steps} />}
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
