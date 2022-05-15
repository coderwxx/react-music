import styled from "styled-components";

export const ArtistCategoryWrapper = styled.div`
  width: 180px;
  padding: 40px 10px 40px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background-color: #fafafa;

  .section {
    padding: 20px 0 5px 0;
    border-bottom: 1px solid #d3d3d3;
    &:nth-last-child(1) {
      border-bottom: none;
    }
    .title {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      font-family: "Microsoft Yahei";
      font-weight: 700;
      margin-bottom: 5px;
    }

    .single-item {
      width: 160px;
      padding-left: 27px;
      color: #333;
      line-height: 29px;
      background: url(${require("@/assets/img/singer_sprite.png")}) no-repeat;
      background-position: 0 -30px;
      &.active {
        background-position: 0 0;
      }
      & .active {
        color: #c20c0c;
      }
    }
  }
`;
