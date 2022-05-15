import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { formatCount, getImageUrl } from "../../utils/format-data";
import { getCurrentSongAction } from "@/pages/player/store/actionCreators";
import { SongsCoverWrapper } from "./style";

export default memo(function XXSongsCover(props) {
  const { item } = props;
  const dispatch = useDispatch();
  console.log(item);

  return (
    <SongsCoverWrapper>
      <div className="song-cover">
        <img
          src={getImageUrl(item.picUrl || item.coverImgUrl, 140)}
          alt={item.name}
        />
        <div className="mask sprite_covor">
          <a href="todo" className="cover">
            {""}
          </a>
        </div>
        <div className="bottom">
          <i className="player sprite_icon"></i>
          <span className="count">{formatCount(item.playCount)}</span>
          <a
            href="todo"
            onClick={(e) => {
              e.preventDefault();
              dispatch(getCurrentSongAction(item.id));
            }}
            className="playcontrol sprite_icon"
          >
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
