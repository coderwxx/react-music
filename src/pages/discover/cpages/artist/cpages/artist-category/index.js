import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { ArtistCategoryWrapper } from "./style";
import { artistCategories } from "@/service/local-data";
import {
  changeCurrentTypeAction,
  changeCurrentAreaAction,
} from "../../store/actionCreators";

export default memo(function XXArtistCategory() {
  // redux hooks
  const dispatch = useDispatch();
  const { currentType } = useSelector(
    (state) => ({
      currentType: state.getIn(["artist", "currentType"]),
    }),
    shallowEqual
  );

  // handle function
  const handleItemClick = (e, area, item) => {
    e.preventDefault();
    dispatch(changeCurrentAreaAction(area));
    dispatch(changeCurrentTypeAction(item));
  };
  return (
    <ArtistCategoryWrapper>
      {artistCategories.map((item, index) => {
        return (
          <div className="section" key={item.title}>
            <dl className="category-item">
              <dt className="title">{item.title}</dt>
              {item.artists.map((iten, index) => {
                return (
                  <dd
                    className={classNames("single-item", {
                      active: iten === currentType,
                    })}
                    key={iten.name}
                  >
                    <a
                      className={classNames({ active: iten === currentType })}
                      href={iten.url}
                      onClick={(e) => {
                        handleItemClick(e, item.area, iten);
                      }}
                    >
                      {iten.name}
                    </a>
                  </dd>
                );
              })}
            </dl>
          </div>
        );
      })}
    </ArtistCategoryWrapper>
  );
});
