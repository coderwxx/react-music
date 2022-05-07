import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    line-height: 24px;
    height: 24px;
    border-bottom: 1px solid #333;
    margin: 20px;

    h3 {
      font-weight: 700;
      font-size: 12px;
    }
  }
  .singer-list {
    .item {
      display: flex;
      align-items: center;
      height: 62px;
      width: 210px;
      text-decoration: none;
      margin-left: 20px;
      margin-bottom: 15px;
    }
    .image {
      width: 62px;
      height: 62px;
    }
    .info {
      flex: 1;
      height: 60px;
      padding-left: 14px;
      background-color: rgb(244, 244, 244);
      border: 1px solid #e9e9e9;
      .alias {
        font-size: 14px;
        color: #333;
        font-weight: 700;
        line-height: 35px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .name {
        font-size: 12px;
        color: #666;
      }
    }
  }
  .button {
    display: block;
    color: #333;
    line-height: 31px;
    width: 210px;
    height: 31px;
    text-align: center;
    margin-left: 20px;
    border-radius: 4px;
    background-color: #fafafa;
    border: 1px solid #c3c3c3;
    text-decoration: none;
    font-weight: 700;
    padding: 0 5px 0 0;
  }
`;
