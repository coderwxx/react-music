import React, { memo } from "react";

import { SongOperatorBar } from "./style";
const XXSongOperatorBar = memo((props) => {
  const { favorNumber, shareNumber, downloadTitle, commentNumber } = props;

  return (
    <SongOperatorBar>
      <button className="play-button">
        <a href="/#" className="sprite_button play">
          <i className="play-icon sprite_button"></i>
          <span>播放</span>
        </a>
        <a href="/#" className="sprite_button addto_icon">
          <span>+</span>
        </a>
      </button>
      <a href="/#" className="sprite_button item">
        <i className="favor-icon sprite_button icon">{`(${favorNumber})`}</i>
      </a>
      <a href="/#" className="sprite_button item">
        <i className="share-icon sprite_button icon">{`(${shareNumber})`}</i>
      </a>
      <a href="/#" className="sprite_button item">
        <i className="download-icon sprite_button icon download"> {downloadTitle}</i>
      </a>
      <a href="/#" className="sprite_button item">
        <i className="comment-icon sprite_button icon">
          {`(${commentNumber})`}
        </i>
      </a>
    </SongOperatorBar>
  );
});

export default XXSongOperatorBar;
