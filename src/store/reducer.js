import { combineReducers } from "redux-immutable";
import { reducer as recommendsReducer } from "../pages/discover/cpages/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";
export default combineReducers({
  recommend: recommendsReducer,
  player: playerReducer,
});
