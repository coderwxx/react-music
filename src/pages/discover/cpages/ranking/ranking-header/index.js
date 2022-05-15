import React, { memo } from "react";

import { RankingHeaderWrapper } from "./style";
import usePlayList from "../hooks/usePlayList";
import { getImageUrl, formatMonthDay } from "@/utils/format-data";
import XXSongOperatorBar from "@/components/song-operator-bar";
const XXRankingHeader = memo(() => {
  const playList = usePlayList();

  return (
    <RankingHeaderWrapper>
      <div className="header">
        <div className="bg">
          <img src={getImageUrl(playList.coverImgUrl, 150)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="right">
          <div className="info">
            <h2 className="title">{playList.name}</h2>
            <div className="text">
              <i className="icon sprite_icon2"></i>
              <span className="update">{`最近更新：${formatMonthDay(
                playList.updateTime
              )}`}</span>
              <span className="day">（每日更新：TODO）</span>
            </div>
            <div className="operator">
              <XXSongOperatorBar
                favorNumber={playList.subscribedCount}
                shareNumber={playList.shareCount}
                downloadTitle="下载"
                commentNumber={playList.commentCount}
              ></XXSongOperatorBar>
            </div>
          </div>
        </div>
      </div>
    </RankingHeaderWrapper>
  );
});

export default XXRankingHeader;
