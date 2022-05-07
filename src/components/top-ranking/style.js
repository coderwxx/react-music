import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  flex: 1;
  .top {
    height: 120px;

    .image {
      height: 80px;
      width: 80px;
      margin: 20px 10px 0 20px;
    }

    .cover {
      font-size: 0;
    }
    .tit {
      position: relative;

      .title {
        position: relative;
        font-weight: 700;
        color: #000;
        font-size: 14px;
        top: 28px;
        left: 8px;
      }
      .btn {
        position: absolute;
        width: 22px;
        height: 22px;
        cursor: pointer;
        color: #333;
      }

      .play {
        background-position: -267px -205px;
        top: 50%;
        left: 8px;
      }

      .favor {
        background-position: -300px -205px;
        top: 50%;
        left: 40px;
      }
    }
  }

  .content {
    margin-left: 20px;
    .item {
      display: flex;
      height: 32px;
      line-height: 32px;
      &:hover .icons {
        display: block;
      }
    }
    .number {
      display: inline-block;
      text-align: center;
      font-size: 16px;
      width: 35px;
      height: 32px;
      color: #666;
    }
    & :nth-child(-n + 3) .number {
      color: #c10d0c;
    }
    .info {
      width: 170px;
      display: flex;
      justify-content: space-between;

      .name-content {
        color: #000;
        flex: 1;
      }
      .icons {
        width: 82px;
        display: flex;
        align-items: center;
        display: none;
        .btn {
          display: inline-block;
          width: 17px;
          height: 17px;
          color: #ccc;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }
        .favor {
          background-position: -297px -268px;
        }

        .add {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }
      }
    }

    .search-more a {
      margin-left: 120px;
      line-height: 32px;
      color: #000;
    }
  }
`;
