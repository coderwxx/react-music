import styled from "styled-components";
export const PlayerHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #e2e2e2;
  width: 986px;
  height: 41px;
  padding: 0 5px;
  background: url(${require("@/assets/img/playpanel_bg.png")});
  .play-list {
    padding-left: 30px;
    font-size: 14px;
    font-weight: 700;
  }
  .control {
    padding-left: 280px;
    .btn {
      position: relative;
      top: 5px;
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 6px;
      cursor: pointer;
    }
    .favor {
      background-position: -24px 0;
    }
    .delete {
      background-position: -51px 0;
    }
    a {
      color: #ccc;
    }
    .addto {
      padding-right: 20px;
    }
  }
  .title {
    padding-left: 40px;
    font-size: 14px;
    width: 420px;
    overflow: hidden;
    text-align: center;
    span {
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .close {
    position: absolute;
    right: 15px;
    width: 30px;
    height: 30px;
    background-position: -195px 9px;
    cursor: pointer;
  }
`;
