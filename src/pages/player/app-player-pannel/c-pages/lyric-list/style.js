import styled from "styled-components";

export const LyricListWrapper = styled.div`
  display: flex;
  height: 260px;
  .divider {
    width: 6px;
    height: 260px;
    background-color: #000;
  }

  .no-content {
    width: 425px;
    height: 100%;
    background-color: rgb(25, 25, 24);
  }

  .lyric-list {
    width: 425px;
    height: 100%;
    padding: 20px 0;
    background-color: rgb(28, 33, 34);
    text-align: center;
    color: #aaa;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .lyric-wrap {
      transform: translateY(${(props) => props.translateY + "px"});
      transition: all 0.3s linear;
      .list-item {
        line-height: 32px;
      }
    }

    .active {
      color: #ffff;
      font-size: 16px;
    }
  }
`;
