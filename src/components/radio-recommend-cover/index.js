import React, { memo } from "react";
import { CoverWrapper } from "./style";
import { getImageUrl } from "@/utils/format-data";
const XXRadioRecommendCover = memo((props) => {
  const { recommend } = props;
  return (
    <CoverWrapper>
      <img className="image" src={getImageUrl(recommend.picUrl, 150)} alt="" />
      <a href="/#" className="name text-wrap">
        {recommend.name}
      </a>
      <p className="desc text-wrap">{recommend.desc}</p>
    </CoverWrapper>
  );
});

export default XXRadioRecommendCover;
