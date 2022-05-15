import React, { memo } from "react";
import ThemeHeaderNormal from "@/components/theme-header-normal";
import XXRadioRankingCover from "@/components/radio-ranking-cover";
import XXPagePagination from "@/components/page-pagination";
import { changeCurrentPageAction } from "../../store/actionCreators";
import { RadioListWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const XXRadioList = memo(() => {
  const dispatch = useDispatch();
  const { ranking, currentPage } = useSelector(
    (state) => ({
      ranking: state.getIn(["djRadio", "ranking"]),
      currentPage: state.getIn(["djRadio", "currentPage"]),
    }),
    shallowEqual
  );
  const rankingData = ranking.djRadios || [];
  const total = ranking.count || 1;
  const handlePageChange = (page, pageSize) => {
    console.log(page);
    dispatch(changeCurrentPageAction(page));
  };
  return (
    <RadioListWrapper>
      <ThemeHeaderNormal title="电台排行榜" />
      <div className="content">
        {rankingData.map((item, index) => {
          return <XXRadioRankingCover key={item.id} item={item} />;
        })}
      </div>
      <XXPagePagination
        pageSize={22}
        current={currentPage}
        total={total}
        handlePageChange={(page, pageSize) => {
          handlePageChange(page, pageSize);
        }}
      />
    </RadioListWrapper>
  );
});

export default XXRadioList;
