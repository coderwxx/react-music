import styled from "styled-components";

export const ThemeSongHeader = styled.div`
  .header {
    position: relative;
    display: flex;
    align-items: center;
    color: #666;
    width: 670px;
    height: 35px;
    border-bottom: 3px solid #c20c0c;
    .title {
      font-size: 20px;
      color: #333;
    }
    .song {
      margin-left: 20px;
    }
    .play {
      position: absolute;
      right: 0;
      .number {
        color: #c20c0c;
        font-weight: 700;
      }
    }
  }
`;
