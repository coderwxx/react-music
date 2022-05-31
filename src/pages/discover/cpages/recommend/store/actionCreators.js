import {
  getHotRecommend,
  getTopBanners,
  getRankingList,
  getNewAlbum,
} from "@/service/recommend";
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
  newAlbum: res.weekData,
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

export const getRankingListAction = (id) => {
  return (dispatch) => {
    getRankingList(id).then((res) => {
      switch (id) {
        case 19723756:
          dispatch(changeUpRankingAction(res));
          break;
        case 3779629:
          dispatch(changeNewRankingAction(res));
          break;
        case 2884035:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
          break;
      }
    });
  };
};
