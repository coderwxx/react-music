import request from "./request";

export function getRankingList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

export function getTopList() {
  return request({
    url: "/toplist",
  });
}
