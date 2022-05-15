import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classNames from "classnames";
import { singerAlpha } from "@/utils/handle-data";
import { getArtistListAction } from "../../../../store/actionCreators";
import { AlphaListWrapper } from "./style";
const XXAlphaList = memo(() => {
  // state and props
  let [currentAlpha, setCurrentAlpha] = useState("-1");

  // redux hooks
  const dispatch = useDispatch();
  const { currentType, currentArea } = useSelector((state) => ({
    currentType: state.getIn(["artist", "currentType"]),
    currentArea: state.getIn(["artist", "currentArea"]),
  }));

  // other hooks
  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha));
  }, [dispatch, currentArea, currentAlpha, currentType.type]);

  // handle function
  const handleItemClick = (item) => {
    if (item === "热门") item = "-1";
    if (item === "其他") item = "0";
    setCurrentAlpha(item);
  };

  function randerItem(item) {
    switch (item) {
      case "-1":
        return "热门";
      case "0":
        return "其他";
      default:
        return item;
    }
  }

  return (
    <AlphaListWrapper>
      {currentArea !== -1 &&
        singerAlpha.map((item, index) => {
          if (item === "热门") {
            item = "-1";
          }
          if (item === "其他") {
            item = "0";
          }
          return (
            <li
              className={classNames("item")}
              key={item}
              onClick={(e) => handleItemClick(item)}
            >
              <a
                href="/#"
                className={classNames({ active: item === currentAlpha })}
                onClick={(e) => e.preventDefault()}
              >
                {randerItem(item)}
              </a>
            </li>
          );
        })}
    </AlphaListWrapper>
  );
});

export default XXAlphaList;
