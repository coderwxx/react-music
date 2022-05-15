import React, { memo } from "react";
import classNames from "classnames";
import { getImageUrl } from "@/utils/format-data";
import { ArtistItem } from "./style";
const XXArtistItem = memo((props) => {
  // props and state
  const { imageUrl, index, name } = props;
  const isActive = index > 4 && index < 10;

  return (
    <ArtistItem className={classNames({ line: isActive })}>
      {index <= 9 && <img src={getImageUrl(imageUrl, 130)} alt="" />}
      <p className="info">
        <span className="name">{name}</span>
        <i className="icon sprite_icon2"></i>
      </p>
    </ArtistItem>
  );
});

export default XXArtistItem;
