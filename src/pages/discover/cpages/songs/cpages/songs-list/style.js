import styled from "styled-components";

export const SongListWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .item {
    padding-right: 35px;
  }

  .item:nth-child(5n) {
    padding-right: 0;
  }
`;
