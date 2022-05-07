import styled from "styled-components";
export const AlbumCoverWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.size + "px"};
  top: -15px;

  .image {
    width: ${(props) => props.size + "px"};
    height: ${(props) => props.size + "px"};
  }

  .cover {
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    background-position: 0 ${(props) => props.bgp};
  }
  .name {
    width: ${(props) => props.size + "px"};
    display: inline-block;
    color: #000;
    font-size: 12px;
    padding: 8px 0 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .singer {
    position: relative;
    top: -12px;
    display: inline-block;
    font-size: 12px;
    color: #666;
  }
`;
