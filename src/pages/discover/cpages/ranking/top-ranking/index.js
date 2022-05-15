import React, { memo, useEffect, useState } from "react";
import classNames from "classnames";
import { TopRankingPageWrapper } from "./style";
import { getTopList, getRankingList } from "../../../../../service/ranking";
import { getImageUrl } from "@/utils/format-data";
import { eventBus } from "../../../../../utils/event-bus";


const XXtopRanking = memo(() => {
  // props and state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topList, setTopList] = useState([]);

  // other hooks
  useEffect(() => {
    const fetchData = async () => {
      // 先获取topList数据
      const topListResult = await getTopList();
      // 获取到topList数据
      const topList = topListResult.list;
      setTopList(topList);
      const rankingListResult = await getRankingList(topList[0].id);
      const playList = rankingListResult.playlist;

      // 发出事件总线
      eventBus.emit("getPlayList", playList);
    };
    fetchData();
  }, []);

  const handleItemClick = (id, index) => {
    setCurrentIndex(index);
    getRankingList(id).then((res) => {
      const playList = res.playlist;

      // 发出事件总线
      eventBus.emit("changePlayList", playList);
    });
  };

  return (
    <TopRankingPageWrapper>
      <ul>
        {topList.map((item, index) => {
          let header;
          if (index === 0 || index === 4) {
            header = (
              <h3 className="header">
                {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
              </h3>
            );
          }
          return (
            <li
              key={item.id}
              onClick={(e) => {
                handleItemClick(item.id, index);
              }}
            >
              {header}
              <div
                className={classNames("item", {
                  active: currentIndex === index,
                })}
              >
                <img src={getImageUrl(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <span className="title">{item.name}</span>
                  <span className="update">{item.updateFrequency}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </TopRankingPageWrapper>
  );
});

export default XXtopRanking;
