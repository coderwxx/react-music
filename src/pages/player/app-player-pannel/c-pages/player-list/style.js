import styled from "styled-components";

export const PlayerListWrapper = styled.div`
  position: relative;
  left: 2px;
  height: 260px;
  width: 553px;
  background-color: rgb(28, 33, 34);
  color: #aaa;

  .no-content {
    height: 120px;
    width: 553px;
    text-align: center;
    padding: 80px 0;
    .top {
      width: 553px;
      .icon {
        position: relative;
        top: 10px;
        display: inline-block;
        width: 36px;
        height: 29px;
        margin-right: 3px;
        background-position: -138px 0;
      }
      .text {
        line-height: 43px;
        padding-bottom: 10px;
      }
    }
    .bottom a {
      color: #aaa;
    }
  }

  .play-list {
    .list-item {
      position: relative;
      display: flex;
      width: 100%;
      line-height: 28px;
      height: 28px;
      padding-left: 25px;
      cursor: pointer;
      color: #ccc;

      &:hover {
        background-color: rgb(0, 0, 0, 0.9);
      }

      .name {
        width: 300px;
      }
      .artist {
        width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .time {
        width: 45px;
      }
      .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-position: -80px 0px;
        margin: 7px 0 0 20px;
      }
    }
    .active {
      &::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        top: 7px;
        background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
      }
    }
  }
`;
