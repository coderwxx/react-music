import request from "./request";
export function getHotRecommend() {
  return request({
    url: "/personalized",
  });
}

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getNewAlbum(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  });
}

export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
}

export function getArtistList(type, area) {
  return request({
    url: "/artist/list",
    params: {
      type,
      area,
    },
  });
}
