import * as ActionTypes from "./constance";

import { Map } from "immutable";
const defaultState = Map({
  currentType: {
    name: "推荐歌手",
    type: "1",
  },
  currentArea: -1,
  artistList: [],
});

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType);
    case ActionTypes.CHANGE_CURRENT_AREA:
      return state.set("currentArea", action.currentArea);
    case ActionTypes.CHANGE_ARTIST_LIST:
      return state.set("artistList", action.artistList);
    default:
      return state;
  }
}
