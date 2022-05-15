import { Map } from "immutable";
import * as actionTypes from "./constanse";
const defaultState = Map({
  categorySong: [],
  categoryList: {},
  currentPage: 1,
  currentCat: "全部",
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY_SONG:
      return state.set("categorySong", action.categorySong);
    case actionTypes.CHANGE_CATEGORY_LIST:
      return state.set("categoryList", action.categoryList);
    case actionTypes.CHANGE_CURRENT_PAGE:
      return state.set("currentPage", action.currentPage);
    case actionTypes.CHANGE_CAT:
      return state.set("currentCat", action.currentCat);
    default:
      return state;
  }
};
