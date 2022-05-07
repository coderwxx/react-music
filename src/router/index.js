import { Redirect } from "react-router-dom";
import React from "react";
import XXDiscover from "../pages/discover";
import XXMine from "../pages/mine";
import XXFocus from "../pages/focus";

import XXAlbum from "../pages/discover/cpages/album";
import XXArtist from "../pages/discover/cpages/artist";
import XXDJRadio from "../pages/discover/cpages/djradio";
import XXRanking from "../pages/discover/cpages/ranking";
import XXRecommend from "../pages/discover/cpages/recommend";
import XXSongs from "../pages/discover/cpages/songs";
export default [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/discover"} />,
  },
  {
    path: "/discover",
    component: XXDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to={"/discover/recommend"} />,
      },
      { path: "/discover/album", component: XXAlbum },
      { path: "/discover/artist", component: XXArtist },
      { path: "/discover/djradio", component: XXDJRadio },
      { path: "/discover/ranking", component: XXRanking },
      { path: "/discover/songs", component: XXSongs },
      { path: "/discover/recommend", component: XXRecommend },
    ],
  },
  {
    path: "/mine",
    component: XXMine,
  },
  {
    path: "/focus",
    component: XXFocus,
  },
];
