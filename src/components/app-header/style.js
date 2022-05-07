import styled from "styled-components";
export const AppHeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  .logo {
    background-position: 0 0;
    width: 157px;
    height: 70px;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
  .content {
    display: flex;
    align-items: center;
  }
  .select-list {
    display: flex;
  }
  .logo a {
    font-size: 0;
  }
  .item {
    display: inline-block;
    line-height: 70px;
    color: #ccc;
    padding: 0 19px;
  }
  .item:hover {
    background-color: #000;
    color: #fff;
  }
  .list:last-child {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 28px;
      height: 19px;
      background-image: url(${require("@/assets/img/sprite_01.png")});
      background-position: -190px 0;
      top: 20px;
      right: -15px;
    }
  }

  .select-list .item {
    text-decoration: none;
  }
  .active {
    position: relative;
  }
  .active .icon {
    position: absolute;
    display: inline-block;
    width: 12px;
    height: 7px;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%, 0);
    background-position: -226px 0;
  }
  .search {
    height: 32px;
    width: 158px;
    border-radius: 16px;
    margin-left: 80px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .center {
    display: inline-block;
    width: 110px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #4f4f4f;
    margin: 0 25px 0 15px;
    text-align: center;
    color: #ccc;
    border-radius: 20px;
    text-decoration: none;
  }
  .center:hover {
    border: 1px solid #fff;
    color: #fff;
  }
  .login {
    color: #787878;
  }
  .login:hover {
    color: #666;
    text-decoration: underline;
  }
`;
