import React, { memo } from "react";
import { UserLoginWrapper } from "./style";

const XXUserLogin = memo(() => {
  return (
    <UserLoginWrapper className="sprite_02">
      <p className="note">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <a href="/#" className="login sprite_02">
        用户登录
      </a>
    </UserLoginWrapper>
  );
});

export default XXUserLogin;
