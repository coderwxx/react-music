import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";

import XXThemeHeaderRCM from "../../../../../../components/theme-header-rcm";
import { getNewAlbumAction } from "../../store/actionCreators";
import XXAlbumCover from "@/components/album-cover";
import { AlbumCarouselWrapper } from "./style";

export default memo(function XXNewAlbum() {
  const dispatch = useDispatch();
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.getIn(["recommend", "newAlbum"]),
    }),
    shallowEqual
  );
  const carouselRef = useRef();

  useEffect(() => {
    let isUnmount = false;
    !isUnmount && dispatch(getNewAlbumAction(10));
    return () => (isUnmount = true);
  }, [dispatch]);

  return (
    <div>
      <XXThemeHeaderRCM title="新碟上架" />
      <AlbumCarouselWrapper>
        <Carousel dots={false} className="carousel" ref={carouselRef}>
          {[0, 1].map((item) => {
            return (
              <div key={item} className="item">
                {newAlbum.splice(item * 1, (item + 1) * 5).map((iten) => {
                  return (
                    <XXAlbumCover
                      key={iten.picId}
                      info={iten}
                      size={100}
                      width={118}
                      bgp={-570 + "px"}
                    ></XXAlbumCover>
                  );
                })}
              </div>
            );
          })}
        </Carousel>
        <button
          className="btn btn-left sprite_02"
          onClick={(e) => {
            carouselRef.current.prev();
          }}
        ></button>
        <button
          className="btn btn-right 
        sprite_02"
          onClick={(e) => {
            carouselRef.current.next();
          }}
        ></button>
      </AlbumCarouselWrapper>
    </div>
  );
});
