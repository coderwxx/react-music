import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getRankingAction } from "../../store/actionCreators";
import { RankingWrapper } from "./style";
import XXTopRanking from "@/components/top-ranking";
import XXThemeHeaderRCM from "../../../../../../components/theme-header-rcm";
export default memo(function XXRecommendRanking() {
  const dispatch = useDispatch();
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  // 发送网络请求，获取数据
  useEffect(() => {
    dispatch(getRankingAction(0));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getRankingAction(2));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getRankingAction(3));
  }, [dispatch]);

  return (
    <div>
      <XXThemeHeaderRCM title="榜单" />
      <RankingWrapper>
        <div className="top">
          <XXTopRanking info={upRanking} />
          <XXTopRanking info={newRanking} />
          <XXTopRanking info={originRanking} />
        </div>
      </RankingWrapper>
    </div>
  );
});
