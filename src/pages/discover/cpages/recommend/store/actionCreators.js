import {
  getHotRecommend,
  getTopBanners,
  getTopList,
} from "@/service/recommend";
import { getNewAlbum } from "../../../../../service/recommend";
import * as ActionTypes from "./constants";

const changeHotRecommendAction = (res) => ({
  type: ActionTypes.CHANGE_HOT_RECOMMEND,
  recommends: res.result,
});

const changeTopBannersAction = (res) => ({
  type: ActionTypes.CHANGE_TOP_BANNERS,
  banners: res.banners,
});

const changeNewAlbumAction = (res) => ({
  type: ActionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.albums,
});

const changeUpRankingAction = (res) => ({
  type: ActionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});
const changeNewRankingAction = (res) => ({
  type: ActionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});
const changeOriginRankingAction = (res) => ({
  type: ActionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

export const getHotRecommendAciton = () => {
  return (dispath) => {
    getHotRecommend().then((res) => {
      dispath(changeHotRecommendAction(res));
    });
  };
};

export const getTopBannersAction = () => {
  return (dispath) => {
    getTopBanners().then((res) => {
      dispath(changeTopBannersAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getRankingAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
        case 0:
          dispatch(changeNewRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
          break;
      }
    });
  };
};
