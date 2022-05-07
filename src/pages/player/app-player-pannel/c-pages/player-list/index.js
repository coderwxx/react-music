import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { formatMinuteSecond } from "@/utils/format-data";
import { PlayerListWrapper } from "./style";
import { getCurrentSongAction } from "../../../store/actionCreators";

const XXPlayerList = memo(() => {
  let content = "";
  // redux state
  const { playList, currentSongIndex } = useSelector((state) => ({
    playList: state.getIn(["player", "playList"]),
    currentSongIndex: state.getIn(["player", "currentSongIndex"]),
  }));

  // other functions
  const dispatch = useDispatch();
  const playMusic = (id) => {
    dispatch(getCurrentSongAction(id));
  };

  // 判断playList的值是否为0，渲染不同的content
  if (playList.length === 0) {
    content = (
      <div className="no-content">
        <div className="top">
          <i className="icon sprite_playlist"></i>
          <span className="text">你还没有添加任何歌曲</span>
        </div>

        <div className="bottom">
          去首页 <a href="/#">发现音乐</a>，或在
          <a href="/#">我的音乐</a>收听自己收藏的歌单。
        </div>
      </div>
    );
  } else {
    content = (
      <ul className="play-list">
        {playList.map((item, index) => {
          return (
            <li
              key={item.id}
              className={classNames("list-item", {
                active: currentSongIndex === index,
              })}
              onClick={(e) => {
                playMusic(item.id);
              }}
            >
              <div className="name">{item.name}</div>
              <div className="artist">{item.ar[0].name}</div>
              <div className="time">{formatMinuteSecond(item.dt)}</div>
              <i className="sprite_playlist icon"></i>
            </li>
          );
        })}
      </ul>
    );
  }

  return <PlayerListWrapper>{content}</PlayerListWrapper>;
});

export default XXPlayerList;
