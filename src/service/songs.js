import request from "./request";

export function getCategorySong() {
  return request({
    url: "/playlist/catlist",
  });
}

export function getCategoryList(offset = 0, cat = "全部", limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset,
    },
  });
}
