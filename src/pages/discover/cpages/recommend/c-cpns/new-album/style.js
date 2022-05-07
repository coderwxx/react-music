import styled from "styled-components";

export const AlbumCarouselWrapper = styled.div`
  position: relative;
  height: 184px;
  margin-top: 15px;
  margin-bottom: 30px;
  background: #f5f5f5;
  border: 1px solid #fff;

  .item {
    display: flex !important;
    height: 184px !important;
    align-items: center;
    padding-left: 5px;
    justify-content: space-evenly;
  }

  .btn {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .btn-left {
    left: 0;
    background-position: -260px -75px;
  }
  .btn-right {
    background-position: -300px -75px;
    right: 0px;
  }
`;
