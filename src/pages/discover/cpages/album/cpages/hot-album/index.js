import React, { memo, useEffect, useState } from "react";
import { getHotAlbums } from "@/service/album";
import XXAlbumCover from "@/components/album-cover";
import { HotAlbumWrapper } from "./style";
const XXHotAlbum = memo(() => {
  const [hotAlbums, setHotAlbums] = useState([]);
  useEffect(() => {
    getHotAlbums().then((res) => {
      setHotAlbums(res.albums);
    });
  }, []);

  return (
    <HotAlbumWrapper>
      {hotAlbums.slice(0, 10).map((item, index) => {
        return (
          <li className="item" key={item.id}>
            <XXAlbumCover
              size={130}
              width={153}
              info={item}
              bgp={-845 + "px"}
            />
          </li>
        );
      })}
    </HotAlbumWrapper>
  );
});

export default XXHotAlbum;
