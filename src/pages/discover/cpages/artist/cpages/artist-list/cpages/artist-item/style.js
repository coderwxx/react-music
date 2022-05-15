import styled from "styled-components";

export const ArtistItem = styled.li`
  &:nth-child(-n + 5) {
    padding-top: 20px;
  }
  padding-bottom: 20px;
  width: 130px;
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 30px;
    .icon {
      display: inline-block;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
    }
  }
`;
