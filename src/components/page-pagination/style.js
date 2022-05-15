import styled from "styled-components";

export const PaginationWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  .ant-pagination {
    text-align: center;

    .control {
      position: relative;
      top: 2px;
      height: 22px;
      width: 70px;
      border: 1px solid #ccc;
      border-radius: 2px;
      line-height: 22px;
      &:disabled {
        color: #999;
      }
    }
    .ant-pagination-item {
      width: 22px;
      height: 22px;
      background-color: #fff;
      line-height: 22px;
      display: inline-block;
      min-width: 30px;
      border-radius: 2px;
      vertical-align: middle;
    }

    .ant-pagination-item {
      border: 1px solid #ccc;
      &:hover {
        border: 1px solid #000;
      }
    }

    .ant-pagination-item-active {
      background: rgb(194, 12, 12);
      a {
        color: #fff;
      }
    }
  }
`;
