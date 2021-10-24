import React from "react";
import CTACardGroup from "./groups/CTACardGroup";
import StepsGroup from "./groups/StepsGroup";
import SquareImagesGroup from "./groups/SquareImagesGroup";
import { ContentGroup, CONTENTGROUPS } from "../utils/types/content";

interface Props {
  contentGroups?: (ContentGroup | null)[];
}

const ContentParser: React.FC<Props> = ({ contentGroups }) => {
  const renderContentGroups = (groups?: (ContentGroup | null)[]) => {
    // Check
    if (!groups) {
      return null;
    }

    // Filter
    let renderGroups = groups.filter(
      (group) => group !== null
    ) as ContentGroup[];

    // Sort
    renderGroups.sort((a, b) => (a.order > b.order ? -1 : 1));

    //Render
    const render = (group: ContentGroup) => {
      switch (group.GROUP_TYPE) {
        case CONTENTGROUPS.STEPS:
          return <StepsGroup {...group} />;
        case CONTENTGROUPS.CTA_CARDS:
          return <CTACardGroup {...group} />;
        case CONTENTGROUPS.SQUARE_IMAGES:
          return <SquareImagesGroup {...group} />;
        default:
          return null;
      }
    };
    return renderGroups.map((group) => render(group));
  };
  return <>{renderContentGroups(contentGroups)}</>;
};

export default ContentParser;
