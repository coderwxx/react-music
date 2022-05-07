import React, { memo } from "react";
import { PlayerHeaderWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { clearPlayListAction } from "../../../store/actionCreators";

export default memo(function XXPlayerHeader() {
  const dispatch = useDispatch();
  const { playList, currentSong } = useSelector(
    (state) => ({
      playList: state.getIn(["player", "playList"]),
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  // other functions
  // 清空playList数据 / 修改redux数据必须通过reducer
  const clearList = () => {
    dispatch(clearPlayListAction([]));
  };
  return (
    <PlayerHeaderWrapper>
      <span className="play-list">播放列表({playList.length})</span>
      <div className="control">
        <i className="favor btn sprite_playlist"></i>
        <a href="/#" className="addto">
          收藏全部
        </a>
        <i className="delete btn sprite_playlist"></i>
        <a
          href="/#"
          onClick={(e) => {
            clearList(e);
          }}
        >
          清除
        </a>
      </div>
      <div className="title">
        <span>{(currentSong && currentSong.name) || ""}</span>
      </div>
      <span className="close sprite_playlist"></span>
    </PlayerHeaderWrapper>
  );
});
