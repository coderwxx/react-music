import React, { memo } from "react";
import TopRanking from "./top-ranking";
import RankingList from "./ranking-list";
import RankingHeader from "./ranking-header";
import {
  RankingWrapper,
  LeftRankingWrapper,
  RightRankingWrapper,
} from "./style";

export default memo(function XXRanking() {
  return (
    <RankingWrapper className="wrap-v2">
      <LeftRankingWrapper>
        <TopRanking></TopRanking>
      </LeftRankingWrapper>
      <RightRankingWrapper>
        <RankingHeader></RankingHeader>
        <RankingList></RankingList>
      </RightRankingWrapper>
    </RankingWrapper>
  );
});
