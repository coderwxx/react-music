import React, { memo } from "react";
import { AlbumWrapper } from "./style";
import ThemeHeaderNormal from "@/components/theme-header-normal";
import HotAlbum from "../album/cpages/hot-album";
import AlbumList from "../album/cpages/album-list";
export default memo(function XXAlbum() {
  return (
    <div>
      <AlbumWrapper className="wrap-v2">
        <ThemeHeaderNormal title="热门新碟" />
        <HotAlbum />
        <div className="all-title">
          <ThemeHeaderNormal title="全部新碟" />
          <AlbumList />
        </div>
      </AlbumWrapper>
    </div>
  );
});
