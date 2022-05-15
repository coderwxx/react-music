import React, { memo, useState } from "react";
import { SongHeader } from "./style";
import SongsCategory from "../songs-category";
import { shallowEqual, useSelector } from "react-redux";

const XXSongsHeader = memo(() => {
  const { currentCat } = useSelector(
    (state) => ({
      currentCat: state.getIn(["songs", "currentCat"]),
    }),
    shallowEqual
  );
  const [showCategory, setCategory] = useState(false);

  const changeShow = (e) => {
    e.preventDefault();
    setCategory(!showCategory);
  };

  return (
    <div>
      <SongHeader>
        <div className="header">
          <h2 className="title">{currentCat || "全部"}</h2>
          <a
            href="/#"
            className="choose"
            onClick={(e) => {
              changeShow(e);
            }}
          >
            选择分类
            <i className="triangle sprite_icon2"></i>
          </a>
          <a href="/#" className="hot">
            热门
          </a>
        </div>
      </SongHeader>
      {showCategory && <SongsCategory />}
    </div>
  );
});

export default XXSongsHeader;
