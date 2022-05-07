import React, { memo } from "react";
import { HotRedioWrapper } from "./style";
import { hotRadios } from "@/service/local-data";
import { getImageUrl } from "@/utils/format-data";

const XXhotRedio = memo(() => {
  return (
    <HotRedioWrapper>
      <div className="header">
        <h3>热门主播</h3>
      </div>
      <div className="radio-list">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={item.name}>
              <a href="/#">
                <img src={getImageUrl(item.picUrl, 40)} alt="" />
              </a>
              <div className="info">
                <span className="name">{item.name}</span>
                <p className="title text-ellipsis">{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </HotRedioWrapper>
  );
});

export default XXhotRedio;
