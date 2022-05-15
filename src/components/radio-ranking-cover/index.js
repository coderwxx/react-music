import React, { memo } from "react";
import { RadioRankingWrapper } from "./style";
import { getImageUrl } from "@/utils/format-data";

const XXRadioRankingCover = memo((props) => {
  const { item } = props;
  return (
    <RadioRankingWrapper>
      <div className="item">
        <img src={getImageUrl(item.picUrl, 120)} alt="" />
        <div className="info">
          <h3 className="name">{item.name}</h3>
          <div>
            <i className="sprite_icon2 icon"></i>
            <span className="desc">{item.dj.nickname}</span>
          </div>
          <p className="info-number">
            <span className="period"> {`共${item.programCount}期 `} </span>
            <span className="discirbe">{`订阅${item.subCount}次`}</span>
          </p>
        </div>
      </div>
    </RadioRankingWrapper>
  );
});

export default XXRadioRankingCover;
