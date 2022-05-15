import request from "./request";

export function getHotAlbums() {
  return request({
    url: "/album/newest",
  });
}

export function getTopAlbums(limit, offset = 0) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset,
    },
  });
}
