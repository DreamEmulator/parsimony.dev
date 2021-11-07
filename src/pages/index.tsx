import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import PageTitle from "../components/titles/PageTitle";
import { getHomeData, HomeType } from "../lib/pages";
import { NextPageContext } from "next";
import React from "react";
import { Text } from "@chakra-ui/react";
import StepsGroup from "../content/groups/StepsGroup";
import { Home } from "../utils/types/home";

type Props = {
  data: Home;
};

const Index: React.FC<Props> = ({
  data: {
    Banner: { Pitch, Slogan },
  },
}) => {
  return (
    <>
      {Slogan && Pitch && <PageTitle title={Slogan} subtitle={Pitch} />}
      {/*{steps && <StepsGroup steps={steps} />}*/}
    </>
  );
};

export default Index;

export async function getStaticProps(context: NextPageContext) {
  const data = getHomeData();
  console.log(JSON.stringify(data));
  return {
    props: { data },
  };
}
