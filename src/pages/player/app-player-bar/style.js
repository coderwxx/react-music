import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-position: 0 0;
  background-repeat: repeat;
  height: 52px;

  .content {
    display: flex;
    align-items: center;
    position: relative;
    top: 7px;
    height: 47px;

    .control {
      display: flex;
      width: 100px;
      justify-content: space-between;
      align-items: center;
      .prev {
        width: 28px;
        height: 28px;
        background-position: 0 -130px;
      }
      .play {
        width: 36px;
        height: 36px;
        background-position: 0
          ${(props) => (props.isPlaying ? "-165px" : "-204px")};
      }
      .next {
        width: 28px;
        height: 28px;
        background-position: -80px -130px;
      }

      .btn {
        cursor: pointer;
      }
    }

    .image {
      width: 35px;
      height: 35px;
      position: relative;
      margin: 0 10px 0 35px;
      img {
        width: 35px;
        height: 35px;
        border-radius: 8px;
        vertical-align: middle;
      }
      .cover {
        position: absolute;
        width: 35px;
        height: 35px;
        top: 0;
        left: 0;
        background-position: 0 -80px;
      }
    }

    .info {
      .song {
        position: relative;
        top: 7px;
        .album {
          padding-right: 15px;
          color: #e8e8e8;
        }
        .artist {
          color: #9b9b9b;
        }
      }
      .ant-slider {
        width: 493px;
        margin-right: 10px;
      }
      .ant-slider-rail {
        background-color: rgba(0, 0, 0.5);
        border-radius: 4px;
        height: 9px;
        color: #333;
        background-position: right 0;
        background-image: url(${require("@/assets/img/progress_bar.png")});
      }

      .ant-slider-track {
        height: 9px;
        background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
      }
      .ant-slider-handle {
        width: 22px;
        height: 24px;
        background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        border: none;
        margin-top: -7px;
      }
    }

    .time {
      padding-top: 20px;
      .total-time {
        color: #a1a1a1;
        text-shadow: 0 1px 0 #121212;
      }
      .current-time {
        color: #797979;
      }
    }

    .operator {
      margin-left: 50px;
      .left {
        display: flex;
        justify-content: space-between;
        padding-right: 15px;
        .btn {
          width: 25px;
          height: 25px;
          cursor: pointer;
        }
        .share {
          background-position: -88px -163px;
        }
        .favor {
          background-position: -114px -163px;
        }
      }
      .right {
        display: flex;
        width: 100px;
        align-items: center;
        justify-content: space-between;
        margin-left: 15px;
        padding-left: 15px;
        background-position: -147px -238px;
      }
      .volumn {
        background-position: -2px -248px;
      }
      .loop {
        background-position: ${(props) => {
          switch (props.sequence) {
            case 1:
              return "-66px -248px";
            case 2:
              return "-66px -344px";
            default:
              return "-3px -344px";
          }
        }};
      }
      .playlist {
        background-position: -42px -98px;
        width: 65px;
        height: 25px;
      }
    }
  }
`;
