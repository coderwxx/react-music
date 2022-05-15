import styled from "styled-components";

export const RankingHeaderWrapper = styled.div`
  padding: 40px;
  .header {
    display: flex;
    align-items: center;
    .bg {
      position: relative;
      width: 158px;
      height: 158px;
      border: 1px solid #ccc;
      padding: 3px;

      .cover {
        width: 150px;
        height: 150px;
        top: 3px;
        left: 3px;
        background-position: -230px -380px;
      }
    }
  }
  .info {
    margin-left: 30px;
    .title {
      line-height: 40px;
      font-size: 20px;
    }
    .text {
      .icon {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        margin-right: 3px;
      }
      .update {
        color: #666;
      }
      .day {
        color: #999;
      }
    }
  }
  .operator {
    padding-top: 40px;
  }
`;
