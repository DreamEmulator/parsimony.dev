import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

export interface Home {
  title: string;
  body: string;
  steps: Step[];
}

export interface Step {
  title: string;
  body: string;
}
export const getHomeData = () => {
  const homeFile = path.join(process.cwd(), "site/content/home.yml");
  const fileContents = fs.readFileSync(homeFile, "utf8");
  return yaml.load(fileContents) as Home;
};
