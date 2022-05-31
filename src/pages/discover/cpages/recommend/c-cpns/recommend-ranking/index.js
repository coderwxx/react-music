import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getRankingListAction } from "../../store/actionCreators";
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
    dispatch(getRankingListAction(19723756));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getRankingListAction(2884035));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getRankingListAction(3779629));
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
