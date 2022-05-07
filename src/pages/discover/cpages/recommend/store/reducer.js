import * as actionTypes from "./constants";
import { Map } from "immutable";
const defaultState = Map({
  hotRecommends: [],
  topBanners: [],
  newAlbum: [],
  upRanking: [],
  newRanking: [],
  originRanking: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.recommends);
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.banners);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbum", action.newAlbum);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    default:
      return state;
  }
};
