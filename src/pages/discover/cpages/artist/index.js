import React, { memo } from "react";
import XXArtistCategory from "./cpages/artist-category";
import XXArtistList from "./cpages/artist-list";
import { ArtistWrapper } from "./style";
export default memo(function XXArtist() {
  return (
    <ArtistWrapper className="wrap-v2">
      <XXArtistCategory />
      <XXArtistList />
    </ArtistWrapper>
  );
});
