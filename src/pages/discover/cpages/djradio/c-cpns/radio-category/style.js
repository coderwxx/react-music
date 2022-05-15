import styled from "styled-components";

export const RadioCategoryWrapper = styled.div`
  position: relative;

  .turn {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 30px;
    transform: translateY(-50%);
    opacity: 0.25;
    background-image: url(${require("@/assets/img/radio_slide.png")});
    cursor: pointer;
  }

  .arrow-left {
    left: -10px;
    background-position: 0 -30px;
  }

  .arrow-right {
    right: 0px;
    background-position: -30px -30px;
  }

  .carousel-page {
    width: 900px;
    height: 214px;
    padding: 0 20px;

    .item {
      position: relative;
      border: 2px solid #fff;
      border-radius: 10px;
      width: 80px;
      height: 80px;
      text-align: center;
      display: inline-block;
      margin: 0 15px 15px 0;

      &.active {
        border: 2px solid #d35757;
        color: #d35757;

        .image {
          background-position: -48px 0;
        }
      }
      &:hover {
        background-color: rgb(247, 247, 247);
      }
    }
    .image {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .name {
      position: relative;
      top: 56px;
    }
  }

  .dots {
    li {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }
    li.slick-active {
      button {
        background-color: #c20c0c;
      }
    }
  }
`;

export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => props.imgUrl});
`;
