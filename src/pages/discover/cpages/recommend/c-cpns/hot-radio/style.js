import styled from "styled-components";

export const HotRedioWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    line-height: 24px;
    height: 24px;
    border-bottom: 1px solid #333;
    margin: 30px 20px 20px 20px;

    h3 {
      font-weight: 700;
      font-size: 12px;
    }
  }
  .item {
    display: block;
    display: flex;
    width: 210px;
    margin: 0 auto;
    height: 50px;
    .info {
      margin-left: 8px;
      overflow: hidden;
      .name {
        color: #333;
        font-weight: 700;
      }
      .title {
        color: #666;
      }
    }
  }
`;
