import React, { memo, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Carousel } from "antd";
import {
  getCategoryListAction,
  changeCurrentIdAction,
} from "../../store/actionCreators";
import { RadioCategoryWrapper, CategoryItemImage } from "./style";

export default memo(function XXRadioCategory() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  const PAGE_SIZE = 16;
  const carouselRef = useRef(null);

  // redux hooks
  const dispatch = useDispatch();
  const { categoryList } = useSelector(
    (state) => ({
      categoryList: state.getIn(["djRadio", "categoryList"]),
    }),
    shallowEqual
  );
  // other hooks
  useEffect(() => {
    dispatch(getCategoryListAction());
  }, [dispatch]);

  // other handle
  const page = Math.ceil(categoryList.length / PAGE_SIZE || 1);
  // 0,16 16 32 32 48
  const getSize = (index) => {
    return index * categoryList.length;
  };

  const handleItemClick = (index, currentId) => {
    setCurrentIndex(index);
    dispatch(changeCurrentIdAction(currentId));
  };
  return (
    <div>
      <RadioCategoryWrapper>
        <div
          className="turn arrow-left"
          onClick={(e) => {
            carouselRef.current.prev();
          }}
        ></div>
        <Carousel dots={{ className: "dots" }} ref={carouselRef}>
          {Array(page)
            .fill(0)
            .map((_, index) => {
              return (
                <ul key={index} className="carousel-page">
                  {categoryList
                    .slice(index * PAGE_SIZE, getSize(index + 1))
                    .map((item, index) => {
                      return (
                        <li
                          key={item.id}
                          onClick={(e) => {
                            handleItemClick(index, item.id);
                          }}
                          className={classNames("item", {
                            active: index === currentIndex,
                          })}
                        >
                          <CategoryItemImage
                            className="image"
                            imgUrl={item.picWebUrl}
                          ></CategoryItemImage>
                          <span className="name">{item.name}</span>
                        </li>
                      );
                    })}
                </ul>
              );
            })}
        </Carousel>
        <div
          className="turn arrow-right"
          onClick={(e) => {
            carouselRef.current.next();
          }}
        ></div>
      </RadioCategoryWrapper>
    </div>
  );
});
