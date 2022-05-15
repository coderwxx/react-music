import styled from "styled-components";

export const RankingListWrapper = styled.div`
  padding: 0 30px 40px 40px;
  table {
    border: 1px solid #d9d9d9;

    th {
      height: 34px;
      line-height: 34px;
      background-image: url(${require("@/assets/img/sprite_table.png")});
      color: #666;
      border: 1px solid #ddd;
      padding-left: 10px;
      border-width: 0 0 1px 1px;
    }
    .wp {
      width: 78px;
      border-left: none;
    }

    .duration {
      width: 91px;
    }

    .singer {
      width: 174px;
    }
    .title {
      width: 285px;
    }
    tr {
      td {
        padding: 6px 10px;
        overflow: hidden;
        .index {
          color: #999;
        }
        .second {
          width: 320px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .play {
          cursor: pointer;
          position: relative;
          display: inline-block;
          width: 17px;
          height: 17px;
          background-position: 0 -103px;
          margin-left: 10px;
          top: 5px;
        }
        .new {
          display: inline-block;
          margin: 8px 0 0 12px;
          width: 16px;
          height: 17px;
          background-position: -67px -283px;
        }
        .name {
          color: #333;
          margin-left: 5px;
        }
        .alia {
          width: 150px;
          color: #aeaeae;
        }
        .duration-time {
          color: #666;
        }
        .artist {
          color: #333;
        }
      }
    }

    tbody tr:nth-child(2n + 1) {
      background-color: rgb(247, 247, 247);
    }
    tbody tr:nth-child(2n) {
      background-color: rgb(255, 255, 255);
    }
  }
`;
