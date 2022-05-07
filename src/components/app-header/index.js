import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { AppHeaderWrapper } from "./style";
import { headerLinks } from "../../service/local-data";
export default memo(function XXAppHeader() {
  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink className="item" to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return (
        <a
          href={item.link}
          className="item"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      );
    }
  };

  return (
    <AppHeaderWrapper>
      <div className="content wrap-v1">
        <h1 className="logo sprite_01">
          <a href="#/">网易云音乐</a>
        </h1>
        <div className="select-list">
          {headerLinks.map((item, index) => {
            return (
              <div className="list" key={item.title}>
                {showItem(item, index)}
              </div>
            );
          })}
        </div>
        <Input
          prefix={<SearchOutlined />}
          className="search"
          placeholder="音乐/视频/电台/用户"
        />
        <a href="#/" className="center">
          创作者中心
        </a>
        <a href="#/" className="login">
          登录
        </a>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  );
});
