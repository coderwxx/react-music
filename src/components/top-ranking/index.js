import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { getCurrentSongAction } from "@/pages/player/store/actionCreators";

import { getImageUrl } from "../../utils/format-data";
import { TopRankingWrapper } from "./style";

const XXTopRanking = memo(function XXTopRanking(props) {
  // props and state
  const { info } = props;

  // rudux hooks
  const dispatch = useDispatch();

  // other handles
  const playMusic = (id) => {
    dispatch(getCurrentSongAction(id));
  };
  return (
    <TopRankingWrapper>
      <div className="top">
        <img className="image" src={getImageUrl(info.coverImgUrl, 80)} alt="" />
        <a href="todo" className="image-cover cover">
          新歌榜
        </a>
        <div className="tit">
          <a href="todo" className="title">
            {info.name}
          </a>
          <i className="play btn sprite_02"></i>
          <i className="favor btn sprite_02"></i>
        </div>
      </div>
      <ul className="content">
        {info.tracks &&
          info.tracks.slice(0, 10).map((item, index) => {
            return (
              <li className="item" key={item.id}>
                <span className="number">{index + 1}</span>
                <div className="info">
                  <a href="todo" className="name-content text-nowrap">
                    {item.name}
                  </a>

                  <span className="icons">
                    <i
                      className="play sprite_02 btn"
                      onClick={(e) => {
                        playMusic(item.id);
                      }}
                    ></i>
                    <i className="add sprite_icon2 btn"></i>
                    <i className="favor sprite_02 btn"></i>
                  </span>
                </div>
              </li>
            );
          })}
        <li className="search-more">
          <a href="todo">查看全部&gt;</a>
        </li>
      </ul>
    </TopRankingWrapper>
  );
});

XXTopRanking.defaultProps = {
  info: [],
};

export default XXTopRanking;
