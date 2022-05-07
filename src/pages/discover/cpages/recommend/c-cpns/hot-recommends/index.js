import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ThemeHeaderRcm from "../../../../../../components/theme-header-rcm";
import { getHotRecommendAciton } from "../../store/actionCreators";
import { HotRecommendsWrapper, HotRecommendsContent } from "./style";
import XXSongsCover from "@/components/songs-cover";
export default memo(function XXHotRecommends() {
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  // 发送网络请求
  useEffect(() => {
    let isUnmount = false;
    !isUnmount && dispatch(getHotRecommendAciton());
    return () => (isUnmount = true);
  }, [dispatch]);

  return (
    <HotRecommendsWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <HotRecommendsContent>
        {hotRecommends.slice(0, 8).map((item) => {
          return <XXSongsCover item={item} key={item.id} />;
        })}
      </HotRecommendsContent>
    </HotRecommendsWrapper>
  );
});
