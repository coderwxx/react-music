import styled from "styled-components";

export const SongHeader = styled.div`
  .header {
    position: relative;
    height: 42px;
    display: flex;
    align-items: center;
    padding-bottom: 6px;
    border-bottom: 2px solid #c20c0c;

    .title {
      font-size: 24px;
      color: #333;
      margin-right: 12px;
    }
    .choose {
      width: 91px;
      line-height: 31px;
      height: 31px;
      text-align: center;
      border: 1px solid rgb(211, 211, 211);
      border-radius: 4px;
      background-color: rgb(253, 253, 253);
      color: #0c73c2;
      text-decoration: none;

      .triangle {
        display: inline-block;
        width: 8px;
        height: 5px;
        margin-left: 3px;
        background-position: -70px -543px;
      }
    }

    .hot {
      position: absolute;
      right: 0;
      width: 46px;
      height: 29px;
      line-height: 29px;
      background-color: rgb(201, 12, 13);
      border-radius: 4px;
      text-align: center;
      color: #fff;
    }
  }
`;
