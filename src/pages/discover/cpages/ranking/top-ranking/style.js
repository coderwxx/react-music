import styled from "styled-components";

export const TopRankingPageWrapper = styled.div`
  margin-top: 40px;

  .header {
    padding: 0 10px 12px 15px;
    font-family: simsun;
    font-size: 14px;
    font-weight: 700;
  }

  .item {
    display: flex;
    height: 42px;
    padding: 10px 0 10px 20px;
    box-sizing: content-box;
    cursor: pointer;

    &.active {
      background-color: #e6e6e6;
    }
    &:hover {
      background-color: #f4f2f2;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 10px;
      .title {
        color: #000;
      }
      .update {
        color: #999;
      }
    }
  }
`;
