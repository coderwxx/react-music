import styled from "styled-components";

export const RecommendHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  line-height: 31px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  .left {
    display: flex;
  }

  .title {
    font-size: 20px;
    font-weight: normal;
    margin-right: 20px;
  }
  .keywords {
    display: flex;
  }
  .item {
    a {
      color: #666;
      font-size: 12px;
    }
    &:last-child .divider {
      font-size: 0;
    }
    .divider {
      padding: 0 15px;
    }
  }

  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    background-position: 0 -240px;
  }
`;
