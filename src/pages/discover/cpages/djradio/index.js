import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RadioCategory from "./c-cpns/radio-category";
import RadioRecommend from "./c-cpns/radio-recommend";
import RadioList from "./c-cpns/radio-list";
import { getRankingAction } from "./store/actionCreators";
import { DJRadioWrapper } from "./style";
export default memo(function XXDJradio() {
  const dispatch = useDispatch();
  const { currentId, currentPage } = useSelector(
    (state) => ({
      currentId: state.getIn(["djRadio", "currentId"]),
      currentPage: state.getIn(["djRadio", "currentPage"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getRankingAction(currentId, currentPage));
  }, [dispatch, currentId, currentPage]);

  return (
    <DJRadioWrapper className="wrap-v2">
      <RadioCategory />
      <RadioRecommend />
      <RadioList />
    </DJRadioWrapper>
  );
});
