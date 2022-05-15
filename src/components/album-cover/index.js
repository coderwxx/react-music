import React, { memo } from "react";
import { getImageUrl } from "@/utils/format-data";
import { AlbumCoverWrapper } from "./style";

export default memo(function XXAlbumCover(props) {
  const { size, info, width, bgp } = props;
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <img
        className="image"
        src={getImageUrl(info.picUrl, size)}
        alt={info.name}
      />
      <a className="cover image_cover" href="todo">
        cover
      </a>
      <a href="todo" className="name">
        {info.name}
      </a>
      <a href="todo" className="singer">
        {info.artist.name}
      </a>
    </AlbumCoverWrapper>
  );
});
