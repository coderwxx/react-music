import React, { memo, useEffect, useState } from "react";
import PagePagination from "@/components/page-pagination";
import AlbumCover from "@/components/album-cover";
import { getTopAlbums } from "@/service/album";
import { AlbumListWrapper } from "./style";
const XXAlbumList = memo(() => {
  // props and state
  const [TopAlbums, setTopAlbums] = useState([]);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // other hooks

  useEffect(() => {
    getTopAlbums(30, (currentPage - 1) * 30).then((res) => {
      setTopAlbums(res.albums);
      setTotal(res.total);
    });
  }, [currentPage]);

  // other functions
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  return (
    <AlbumListWrapper>
      <ul className="album-list">
        {TopAlbums.map((item, index) => {
          return (
            <li className="item" key={item.id}>
              <AlbumCover
                info={item}
                size={130}
                width={153}
                bgp={-845 + "px"}
              />
            </li>
          );
        })}
      </ul>
      <PagePagination
        total={total}
        pageSize={30}
        current={currentPage}
        handlePageChange={(page, pageSize) => handlePageChange(page, pageSize)}
      />
    </AlbumListWrapper>
  );
});

export default XXAlbumList;
