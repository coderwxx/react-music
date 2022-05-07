import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";

import { getTopBannersAction } from "../../store/actionCreators";
import {
  TopBannerLeft,
  TopBannerWrapper,
  TopBannerRight,
  BannerControl,
} from "./style";

export default memo(function XXTopBanners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const { banners } = useSelector(
    (state) => ({
      banners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const bannerRef = useRef();

  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);

  // 面板发生切换的回调
  const bannerchange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  const bgImage =
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <TopBannerWrapper bgImage={bgImage}>
      <div className="wrap-v2 banner">
        <TopBannerLeft>
          <Carousel
            ref={bannerRef}
            effect="fade"
            autoplay
            beforeChange={bannerchange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.targetId}>
                  <img className="image" src={item.imageUrl} alt="" />
                </div>
              );
            })}
          </Carousel>
        </TopBannerLeft>
        <TopBannerRight></TopBannerRight>
        <BannerControl>
          <button
            className="left btn"
            onClick={() => {
              bannerRef.current.prev();
            }}
          ></button>
          <button
            className="right btn"
            onClick={() => {
              bannerRef.current.next();
            }}
          ></button>
        </BannerControl>
      </div>
    </TopBannerWrapper>
  );
});
