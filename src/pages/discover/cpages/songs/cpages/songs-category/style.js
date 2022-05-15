import styled from "styled-components";
export const SongCategoryWrapper = styled.div`
  position: relative;
  padding-top: 10px;
  .arrow {
    position: absolute;
    top: -11px;
    left: 132px;
    display: inline-block;
    background-color: #fefefe;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
    vertical-align: middle;
  }
  .wrapper {
    position: absolute;
    z-index: 9;
    left: -35px;
    width: 700px;
    border: 1px solid rgb(206, 206, 206);
    box-shadow: 0px 0px 8px 2px #d3d3d3;
    background-color: #fefefe;
    border-radius: 5px;

    .all {
      height: 60px;
      padding: 20px 0 0 30px;
      border-bottom: 1px solid rgb(230, 230, 230);

      .style {
        display: block;
        width: 75px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        background-color: rgb(249, 249, 249);
        border-radius: 2px;
        border: 1px solid rgb(220, 220, 220);
      }
    }

    .content {
      padding-bottom: 40px;
      dl {
        display: flex;
        dt {
          padding-top: 15px;
          padding-left: 30px;
          display: flex;
          align-items: center;
          width: 100px;
          border-right: 1px solid rgb(230, 230, 230);

          .icon {
            display: inline-block;
            width: 24px;
            height: 24px;

            background-position: -20px -735px;
            margin-right: 8px;
          }

          .item1 {
            background-position: 0 -60px;
          }

          .item2 {
            background-position: 0 -88px;
          }

          .item3 {
            background-position: 0 -117px;
          }

          .item4 {
            background-position: 0 -141px;
          }
          span {
            font-weight: 700;
          }
        }
        dd {
          display: flex;
          flex-wrap: wrap;
          flex: 1;
          padding: 16px 15px 0;

          div {
            display: flex;
            align-items: center;
            a {
              display: inline-block;
              padding: 2px 11px;
            }
            .divider {
              display: inline-block;
              width: 0px;
              height: 10px;
              border-right: 1px solid #d8d8d8;
            }
          }
        }
      }
    }
  }
`;
