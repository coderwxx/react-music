import React, { memo } from "react";
import { ArtistListWrapper } from "./style";
import ThemeHeaderNormal from "@/components/theme-header-normal";
import XXAlphaList from "../artist-list/cpages/alpha-list";
import XXArtistItem from "../artist-list/cpages/artist-item";
import { useSelector } from "react-redux";
const XXArtistList = memo(() => {
  const { currentType, artistList } = useSelector((state) => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"]),
  }));

  return (
    <ArtistListWrapper>
      <ThemeHeaderNormal title={currentType.name} />
      <XXAlphaList />
      <div className="content">
        {artistList.map((item, index) => {
          return (
            <XXArtistItem
              key={item.id}
              index={index}
              imageUrl={item.picUrl}
              name={item.name}
            />
          );
        })}
      </div>
    </ArtistListWrapper>
  );
});

export default XXArtistList;
