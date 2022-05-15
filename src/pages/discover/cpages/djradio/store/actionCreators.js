import * as actionTypes from "./constance";
import {
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios,
} from "@/service/djradio";

const changeCategoryListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_LIST,
  categoryList: res.categories,
});

export const changeCurrentIdAction = (currentId) => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  currentId,
});

export const changeRecommendAction = (res) => ({
  type: actionTypes.CHANGE_RECOMMEND,
  recommend: res.djRadios,
});

export const changeRankingAction = (res) => ({
  type: actionTypes.CHANGE_RANKING,
  ranking: res,
});

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_PAGE,
  currentPage,
});

export const getCategoryListAction = () => {
  return (dispatch) => {
    getDjRadioCatelist().then((res) => {
      const currentId = res.categories[0].id;
      dispatch(changeCurrentIdAction(currentId));
      dispatch(changeCategoryListAction(res));
    });
  };
};

export const getRecommendAction = (currentId) => {
  return (dispatch) => {
    getDjRadioRecommend(currentId).then((res) => {
      dispatch(changeRecommendAction(res));
    });
  };
};

export const getRankingAction = (currentId, currentPage) => {
  return (dispatch) => {
    getDjRadios(currentId, (currentPage - 1) * 32).then((res) => {
      dispatch(changeRankingAction(res));
    });
  };
};
