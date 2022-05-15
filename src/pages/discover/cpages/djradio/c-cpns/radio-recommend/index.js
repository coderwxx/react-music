import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRecommendAction } from "../../store/actionCreators";
import { RadioRecommendWrapper } from "./style";
import ThemeHeaderNormal from "@/components/theme-header-normal";
import RadioRecommendCover from "@/components/radio-recommend-cover";

const XXRadioRecommend = memo(() => {
  // redux state
  const { recommend, currentId } = useSelector((state) => ({
    recommend: state.getIn(["djRadio", "recommend"]),
    currentId: state.getIn(["djRadio", "currentId"]),
  }));

  // redux hooks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommendAction(currentId));
  }, [dispatch, currentId]);

  return (
    <RadioRecommendWrapper>
      <ThemeHeaderNormal title="优秀新电台" />
      <div className="content">
        {recommend.slice(0, 5).map((item, index) => {
          return <RadioRecommendCover key={item.id} recommend={item} />;
        })}
      </div>
    </RadioRecommendWrapper>
  );
});

export default XXRadioRecommend;
