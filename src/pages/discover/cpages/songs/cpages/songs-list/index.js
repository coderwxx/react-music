import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { SongListWrapper } from "./style";
import {
  getCategoryListAction,
  changeCurrentPageAction,
} from "../../store/actionCreators";
import SongsCover from "@/components/songs-cover";
import PagePagination from "@/components/page-pagination";

const XXSongsList = memo((props) => {
  // props and state
  const { songsHeaderRef } = props;

  // redux hooks
  const dispatch = useDispatch();
  const { categoryList, currentPage } = useSelector(
    (state) => ({
      categoryList: state.getIn(["songs", "categoryList"]),
      currentPage: state.getIn(["songs", "currentPage"]),
    }),
    shallowEqual
  );

  const playList = categoryList.playlists || [];
  const total = categoryList.total;

  // other functions
  const handlePageChange = (page, pageSize) => {
    window.scrollTo(songsHeaderRef.current.offsetTop, 0);
    dispatch(changeCurrentPageAction(page));
    dispatch(getCategoryListAction(page));
  };

  return (
    <SongListWrapper>
      {playList.map((item, index) => {
        return (
          <div className="item" key={item.id}>
            <SongsCover item={item}></SongsCover>
          </div>
        );
      })}
      <PagePagination
        current={currentPage}
        pageSize={35}
        total={total}
        handlePageChange={handlePageChange}
      />
    </SongListWrapper>
  );
});

export default XXSongsList;
