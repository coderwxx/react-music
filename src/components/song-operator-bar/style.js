import styled from "styled-components";

export const SongOperatorBar = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }
  .play-button {
    display: flex;
    align-items: center;
    .play {
      width: 66px;
      height: 31px;
      line-height: 31px;
      color: #fff;
      text-decoration: none;
      background-position: 0 -387px;

      .play-icon {
        display: inline-block;
        position: relative;
        top: 5px;
        right: 2px;
        width: 20px;
        height: 18px;
        background-position: 0 -1622px;
      }
    }
    .addto_icon {
      width: 31px;
      height: 31px;
      line-height: 31px;
      background-position: 0 -1588px;
      span {
        color: #fff;
      }
    }
  }
  .item {
    height: 31px;
    font-family: simsun;
    padding-right: 5px;
    margin-right: 6px;
    background-position: right -1020px;
  }
  .icon {
    display: inline-block;
    height: 31px;
    min-width: 23px;
    line-height: 31px;
    padding-right: 6px;
    padding-left: 28px;
  }
  .download {
    width: 60px;
  }
  .favor-icon {
    background-position: 0 -977px;
  }

  .share-icon {
    background-position: 0 -1225px;
  }

  .download-icon {
    background-position: 0 -2761px;
  }

  .comment-icon {
    background-position: 0 -1465px;
  }
`;
