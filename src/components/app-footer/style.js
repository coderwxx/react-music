import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  height: 172px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;

  .content {
    display: flex;
  }

  .link {
    padding-top: 15px;
    display: flex;
  }

  .link a {
    display: inline-block;
    color: #999;
    padding: 0 5px;
  }

  .link .line {
    color: #999;
  }

  .link :last-child span {
    display: none;
  }
  .copy-right {
    padding-top: 5px;
    color: #666;
  }
  .copy-right :first-child {
    margin-right: 20px;
  }
  .info {
    padding-top: 5px;
    color: #666;
  }
  .police-icon {
    position: relative;
    top: 3px;
    display: inline-block;
    margin: 0 5px 0 10px;
    background: url(${require("../../assets/img/police.png")});
    background-size: cover;
    height: 14px;
    width: 14px;
  }

  .right {
    display: flex;
    margin-left: 20px;

    .image-item {
      margin: 20px 0px 0 30px;
      display: inline-block;
      width: 50px;
      height: 45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 450px;
    }
    .image-link {
      display: inline-block;
      width: 50px;
      height: 45px;
    }

    .image-item:nth-child(1) {
      background-position: -60px -101px;
    }
    .image-item:nth-child(2) {
      background-position: 0 0;
    }
    .image-item:nth-child(3) {
      background-position: -60px -50px;
    }
    .image-item:nth-child(4) {
      background-position: 0 -101px;
    }
    .title {
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 180px 100px;
    }

    & :nth-child(1) .title {
      background-position: -1px -90px;
    }
    & :nth-child(2) .title {
      background-position: 0 0;
    }
    & :nth-child(3) .title {
      background-position: 0 -54px;
    }

    & :nth-child(4) .title {
      background-position: -1px -72px;
    }
  }
`;
