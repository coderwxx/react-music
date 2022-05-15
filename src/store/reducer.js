import { combineReducers } from "redux-immutable";
import { reducer as recommendsReducer } from "../pages/discover/cpages/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";
import { reducer as songsReducer } from "../pages/discover/cpages/songs/store";
import { reducer as djradioReducer } from "../pages/discover/cpages/djradio/store";
import { reducer as artistReducer } from "../pages/discover/cpages/artist/store";
export default combineReducers({
  recommend: recommendsReducer,
  player: playerReducer,
  songs: songsReducer,
  djRadio: djradioReducer,
  artist: artistReducer,
});
