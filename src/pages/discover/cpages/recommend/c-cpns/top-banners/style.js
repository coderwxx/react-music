import styled from "styled-components";
export const TopBannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center / 6000px;
  height: 270px;
  .banner {
    position: relative;
    display: flex;
  }
`;
export const TopBannerLeft = styled.div`
  width: 730px;
  .banner-item {
    height: 270px;
    overflow: hidden;
    .image {
      width: 100%;
    }
  }
`;

export const TopBannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`;

export const BannerControl = styled.div`
  .btn {
    width: 37px;
    height: 63px;
    position: absolute;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    background-position: 0 -360px;
    left: -68px;
  }

  .right {
    background-position: 0 -508px;
    right: -68px;
  }
`;
