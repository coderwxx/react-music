import * as actionTypes from "./constance";
import { Map } from "immutable";

const defaultState = Map({
  categoryList: [],
  currentId: 0,
  recommend: [],
  ranking: {},
  currentPage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY_LIST:
      return state.set("categoryList", action.categoryList);
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set("currentId", action.currentId);
    case actionTypes.CHANGE_RECOMMEND:
      return state.set("recommend", action.recommend);
    case actionTypes.CHANGE_RANKING:
      return state.set("ranking", action.ranking);
    case actionTypes.CHANGE_PAGE:
      return state.set("currentPage", action.currentPage);
    default:
      return state;
  }
};
