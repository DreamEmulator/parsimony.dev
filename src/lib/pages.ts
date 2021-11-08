import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { Home } from "../utils/types/content/home";

export const getHomeData = () => {
  const homeFile = path.join(process.cwd(), "site/content/home.yml");
  const fileContents = fs.readFileSync(homeFile, "utf8");
  return yaml.load(fileContents) as Home;
};
