import React, { memo } from "react";

import { ThemeSongHeader } from "./style";
const XXThemeSongHeader = memo((props) => {
  const { playList } = props;
  return (
    <ThemeSongHeader>
      <div className="header">
        <h2 className="title">歌曲列表</h2>
        <span className="song">{playList.trackCount}首歌</span>
        <span className="play">
          播放：<span className="number">{playList.playCount}</span>次
        </span>
      </div>
    </ThemeSongHeader>
  );
});

export default XXThemeSongHeader;
