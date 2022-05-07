import styled from "styled-components";

export const SongsCoverWrapper = styled.li`
  .song-cover {
    position: relative;
  }

  .mask {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: 0 0;
  }

  .cover {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .bottom {
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;
    bottom: 0;
    width: 140px;
    height: 27px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .player {
    background-position: 0 -24px;
    width: 14px;
    height: 11px;
    margin: 9px 5px 9px 10px;
  }

  .count {
    color: #ccc;
    font-size: 12px;
  }

  .playcontrol {
    position: absolute;
    right: 10px;
    width: 16px;
    height: 17px;
    background-position: 0 0;
  }

  .content {
    width: 140px;
    padding-top: 5px;
    padding-bottom: 30px;

    .title {
      color: #000;
      font-size: 14px;
    }
  }
`;
