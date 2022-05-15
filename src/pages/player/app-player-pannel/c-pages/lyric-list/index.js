import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import classNames from "classnames";

import { LyricListWrapper } from "./style";
const XXLyricList = memo(() => {
  // redux state
  const { lyricList, lyricIndex, translateY } = useSelector(
    (state) => ({
      lyricList: state.getIn(["player", "lyricList"]),
      lyricIndex: state.getIn(["player", "lyricIndex"]),
      translateY: state.getIn(["player", "translateY"]),
    }),
    shallowEqual
  );

  // other handle

  let content = "";
  if (lyricList.length === 0) {
    content = <div className="no-content"></div>;
  } else {
    content = (
      <ul className="lyric-list">
        <ul className="lyric-wrap">
          {lyricList.map((item, index) => {
            return (
              <li
                key={index}
                className={classNames("list-item", {
                  active: lyricIndex === index,
                })}
              >
                {item.content}
              </li>
            );
          })}
        </ul>
      </ul>
    );
  }

  return (
    <LyricListWrapper translateY={translateY}>
      <div className="divider"></div>
      {content}
    </LyricListWrapper>
  );
});

export default XXLyricList;
