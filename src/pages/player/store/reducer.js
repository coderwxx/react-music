import * as actionTypes from "./constants";

import { Map } from "immutable";

const defaultState = Map({
  currentSong: {},
  playList: [],

  currentSongIndex: 0,
  sequence: 0, // 0:顺序 1：随机 2：循环
  lyricList: [],
  lyricIndex: 0,
  translateY: 0,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_CURRENT_SEQENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_PLAYLIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_LYRICLIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_LYRIC_INDEX:
      return state.set("lyricIndex", action.lyricIndex);
    case actionTypes.CHANGE_TRANSLATE_Y:
      return state.set("translateY", action.translateY);
    case actionTypes.CLEAR_PLAYLIST:
      return state.set("playList", action.playList);
    default:
      return state;
  }
};
