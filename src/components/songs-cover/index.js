import React, { memo } from "react";
import { formatCount, getImageUrl } from "../../utils/format-data";
import { SongsCoverWrapper } from "./style";

export default memo(function XXSongsCover(props) {
  const { item } = props;

  return (
    <SongsCoverWrapper>
      <div className="song-cover">
        <img src={getImageUrl(item.picUrl, 140)} alt={item.name} />
        <div className="mask sprite_covor">
          <a href="todo" className="cover">
            {""}
          </a>
        </div>
        <div className="bottom">
          <i className="player sprite_icon"></i>
          <span className="count">{formatCount(item.playCount)}</span>
          <a href="todo" className="playcontrol sprite_icon">
            {""}
          </a>
        </div>
      </div>

      <div className="content">
        <a href="todo" className="title">
          {item.name}
        </a>
      </div>
    </SongsCoverWrapper>
  );
});
