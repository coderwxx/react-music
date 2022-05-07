import React, { memo } from "react";
import { PlayPannelWrapper } from "./style";
import PlayerHeader from "./c-pages/player-header";
import PlayerList from "./c-pages/player-list";
import LyricList from "./c-pages/lyric-list";

const XXAppPlayerPannel = memo(() => {
  return (
    <PlayPannelWrapper>
      <PlayerHeader />
      <div className="content-wrapper">
        <PlayerList />
        <LyricList />
      </div>
    </PlayPannelWrapper>
  );
});

export default XXAppPlayerPannel;
