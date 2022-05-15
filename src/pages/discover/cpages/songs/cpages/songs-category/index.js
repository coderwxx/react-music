import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeCatAction,
  getCategoryListAction,
} from "../../store/actionCreators";
import { SongCategoryWrapper } from "./style";
import classNames from "classnames";

export default memo(function XXSongCategory() {
  // redux hooks
  const dispatch = useDispatch();

  const { categorySong } = useSelector(
    (state) => ({
      categorySong: state.getIn(["songs", "categorySong"]),
    }),
    shallowEqual
  );

  // other functions
  const handleBtnClick = (e) => {
    e.preventDefault();
    dispatch(getCategoryListAction(1));
    dispatch(changeCatAction("全部"));
  };

  const handleItemClick = (e, cat) => {
    console.log(cat);
    e.preventDefault();
    dispatch(getCategoryListAction(1));
    dispatch(changeCatAction(cat));
  };
  return (
    <SongCategoryWrapper>
      <div className="wrapper">
        <i className="arrow sprite_icon"></i>
        <div className="all">
          <a
            href="/#"
            className="style"
            onClick={(e) => {
              handleBtnClick(e);
            }}
          >
            全部风格
          </a>
        </div>
        <div className="content">
          {categorySong.map((item, index) => {
            return (
              <dl key={item.name}>
                <dt>
                  <i
                    className={classNames(
                      "item" + index,
                      "sprite_icon2",
                      "icon"
                    )}
                  ></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {item.subs.map((item, index) => {
                    return (
                      <div key={item.name}>
                        <a
                          href="/#"
                          onClick={(e) => {
                            handleItemClick(e, item.name);
                          }}
                        >
                          {item.name}
                        </a>
                        <div className="divider"></div>
                      </div>
                    );
                  })}
                </dd>
              </dl>
            );
          })}
        </div>
      </div>
    </SongCategoryWrapper>
  );
});
