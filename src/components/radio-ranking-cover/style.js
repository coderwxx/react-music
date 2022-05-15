import styled from "styled-components";

export const RadioRankingWrapper = styled.div`
  width: 50%;
  .item {
    padding: 20px 0;
    display: flex;
    align-items: center;
  }

  .info {
    color: #333;
    padding-left: 20px;
    .name {
      font-size: 18px;
      font-weight: 700;
      padding-bottom: 20px;
    }
    .desc {
      font-size: 12px;
    }

    .info-number {
      padding-top: 10px;
      color: #999;
      .period {
        padding-right: 15px;
      }
    }
  }
  .icon {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 2px;
    background-position: -50px -300px;
  }
`;
