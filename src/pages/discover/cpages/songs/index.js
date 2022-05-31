import React, { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  changeCatAction,
  getCategorySongAction,
  getCategoryListAction,
} from "./store/actionCreators";
import { SongsWrapper } from "./style";
import SongsHeader from "./cpages/songs-header";
import SongsList from "./cpages/songs-list";
export default memo(function XXSongs() {
  // props and state
  const ref = React.createRef();
  // redux
  const cat = useLocation().cat;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCatAction(cat));
  }, [cat, dispatch]);

  // other hooks
  useEffect(() => {
    dispatch(getCategoryListAction(1));
    dispatch(getCategorySongAction());
  }, [dispatch]);

  return (
    <div className="wrap-v2">
      <SongsWrapper>
        <SongsHeader ref={ref} />
        <SongsList songsHeaderRef={ref} />
      </SongsWrapper>
    </div>
  );
});
