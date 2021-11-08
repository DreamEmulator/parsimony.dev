import PageTitle from "../components/titles/PageTitle";
import { getHomeData } from "../lib/pages";
import { NextPageContext } from "next";
import React from "react";
import { Text, Box } from "@chakra-ui/react";
import StepsGroup from "../content/groups/StepsGroup";
import { Home } from "../utils/types/content/home";
import { HeroBanner } from "../components/images/HeroBanner";

type Props = {
  data: Home;
};

const Index: React.FC<Props> = ({
  data: {
    Banner: { Pitch, Slogan },
    Steps,
    ...rest
  },
  data,
}) => {
  console.log(data);
  return (
    <>
      {Slogan && Pitch && <HeroBanner Pitch={Pitch} Slogan={Slogan} />}
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
