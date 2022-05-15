import styled from "styled-components";

export const AlphaListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  .item {
    margin-top: 20px;
    height: 25px;
    line-height: 25px;
    & .active {
      padding: 0 5px;
      display: inline-block;
      background: #c20c0c;
      border-radius: 2px;
      color: #fff;
    }
  }
`;
