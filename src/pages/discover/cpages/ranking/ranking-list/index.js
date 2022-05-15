import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { RankingListWrapper } from "./style";
import usePlayList from "../hooks/usePlayList";
import ThemeSongHeader from "@/components/theme-song-header";
import { getImageUrl, formatMinuteSecond } from "@/utils/format-data";
import { getCurrentSongAction } from "@/pages/player/store/actionCreators";

const XXRankingList = memo(() => {
  // props and state
  const playList = usePlayList();
  const tracks = (playList && playList.tracks) || [];
  // redux state
  const dispatch = useDispatch();
  const playMusic = (id) => {
    dispatch(getCurrentSongAction(id));
  };

  let image;
  const showImage = (index, item) => {
    if (index < 3) {
      image = (
        <img className="image" src={getImageUrl(item.al.picUrl, 50)} alt="" />
      );
    } else {
      image = "";
    }
  };
  return (
    <RankingListWrapper>
      <ThemeSongHeader playList={playList}></ThemeSongHeader>
      <table className="table">
        <thead>
          <tr>
            <th className="wp"></th>
            <th className="title">标题</th>
            <th className="duration">时长</th>
            <th className="singer">歌手</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>
                  <span className="index">{index + 1}</span>
                  <i className="new sprite_icon2"></i>
                </td>
                <td>
                  <div className="second">
                    {showImage(index, item)}
                    {image}
                    <i
                      className="sprite_table play"
                      onClick={(e) => {
                        playMusic(item.id);
                      }}
                    ></i>
                    <span className="name">
                      {item.name}
                      <span className="alia">
                        {item.alia.length > 0 ? ` - (${item.alia})` : ""}
                      </span>
                    </span>
                  </div>
                </td>
                <td className="duration-time">{formatMinuteSecond(item.dt)}</td>
                <td className="artist">{item.ar[0].name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </RankingListWrapper>
  );
});

export default XXRankingList;
