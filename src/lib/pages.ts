import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export interface HomeType {
  title: string;
  subtitle: string;
  steps: StepType[];
}

export interface StepType {
  title: string;
  body: string;
}

export const getHomeData = () => {
  const homeFile = path.join(process.cwd(), "site/content/home.yml");
  const fileContents = fs.readFileSync(homeFile, "utf8");
  return yaml.load(fileContents) as HomeType;
};
