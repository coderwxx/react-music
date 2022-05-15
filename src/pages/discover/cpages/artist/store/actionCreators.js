import * as ActionTypes from "./constance";
import { getArtistList } from "@/service/artist";

export const changeCurrentTypeAction = (currentType) => ({
  type: ActionTypes.CHANGE_CURRENT_TYPE,
  currentType,
});

export const changeCurrentAreaAction = (currentArea) => ({
  type: ActionTypes.CHANGE_CURRENT_AREA,
  currentArea,
});

const changeArtistListAction = (res) => ({
  type: ActionTypes.CHANGE_ARTIST_LIST,
  artistList: res.artists,
});

export const getArtistListAction = (area, type, initial) => {
  return (dispatch) => {
    getArtistList(area, type, initial).then((res) => {
      dispatch(changeArtistListAction(res));
    });
  };
};
