import { getCategorySong, getCategoryList } from "../../../../../service/songs";
import * as actionTypes from "./constanse";
import { handleSongCategory } from "@/utils/handle-data";

const changeCategorySong = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONG,
  categorySong: res,
});

const changeCategoryList = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_LIST,
  categoryList: res,
});

export const changeCurrentPageAction = (page) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage: page,
});
export const changeCatAction = (cat) => ({
  type: actionTypes.CHANGE_CAT,
  currentCat: cat,
});

export const getCategorySongAction = () => {
  return (dispatch) => {
    getCategorySong().then((res) => {
      const categoryData = handleSongCategory(res);
      dispatch(changeCategorySong(categoryData));
    });
  };
};

export const getCategoryListAction = (page) => {
  return (dispatch, getState) => {
    // 1.获取currentCategory
    const currentCat = getState().getIn(["songs", "currentCat"]);
    getCategoryList((page - 1) * 35, currentCat).then((res) => {
      dispatch(changeCategoryList(res));
    });
  };
};
