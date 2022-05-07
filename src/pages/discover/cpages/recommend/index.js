import React, { memo } from "react";
import HotRecommends from "./c-cpns/hot-recommends";
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";
import UserLogin from "./c-cpns/user-login";
import TopBanners from "./c-cpns/top-banners";
import SettleSinger from "./c-cpns/settle-singer";
import HotRadio from "./c-cpns/hot-radio";
import {
  RecommendLeftWrapper,
  RecommendWrapper,
  RecommendRightWrapper,
  Content,
} from "./style";

export default memo(function XXRecommend() {
  return (
    <RecommendWrapper>
      <TopBanners />
      <Content className="wrap-v2">
        <RecommendLeftWrapper>
          <HotRecommends />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeftWrapper>
        <RecommendRightWrapper>
          <UserLogin />
          <SettleSinger />
          <HotRadio />
        </RecommendRightWrapper>
      </Content>
    </RecommendWrapper>
  );
});
