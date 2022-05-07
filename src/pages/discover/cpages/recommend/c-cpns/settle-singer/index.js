import React, { memo } from "react";
import { SettleSingerWrapper } from "./style";
import { NavLink } from "react-router-dom";
import { getArtistList } from "@/service/recommend";
import { useEffect, useState } from "react";
import { getImageUrl } from "@/utils/format-data";

const SettleSinger = memo(() => {
  // props and state
  const [artist, setArtist] = useState([]);
  // other hooks
  useEffect(() => {
    getArtistList(1, -1).then((res) => {
      setArtist(res.artists);
    });
  }, []);

  return (
    <SettleSingerWrapper>
      <div className="header">
        <h3>入驻歌手</h3>
        <NavLink to="/singer/discover/artist">查看全部&gt;</NavLink>
      </div>
      <div className="singer-list">
        {artist.slice(0, 5).map((item, index) => {
          return (
            <a className="item" key={item.id} href="/#">
              <img
                className="image"
                src={getImageUrl(item.picUrl, 62)}
                alt=""
              />
              <div className="info">
                <span className="alias">
                  {item.alias.join("") || item.name}
                </span>
                <p className="name">{item.name}</p>
              </div>
            </a>
          );
        })}
      </div>
      <NavLink to="/singer/discover/artist" className="sprite_02 button ">
        欢迎成为网易音乐人
      </NavLink>
    </SettleSingerWrapper>
  );
});

export default SettleSinger;
