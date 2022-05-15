import styled from "styled-components";

export const CoverWrapper = styled.div`
  width: 150px;
  .name {
    display: block;
    line-height: 14px;
    padding: 10px 0;
    font-size: 14px;
    color: #333;
  }
  .text-wrap {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .desc {
    color: #999;
  }
`;
