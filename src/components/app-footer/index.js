import React, { memo } from "react";
import { footerImages } from "../../service/local-data";
import { footerLinks } from "../../service/local-data";
import { AppFooterWrapper } from "./style";
export default memo(function XXAppFooter() {
  return (
    <AppFooterWrapper>
      <div className="content wrap-v2">
        <div className="left">
          <ul className="link">
            {footerLinks.map((item, index) => {
              return (
                <li key={index}>
                  <a href="item.link" target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <span className="line">|</span>
                </li>
              );
            })}
          </ul>
          <p className="copy-right">
            <span>网易公司版权所有©1997-2020</span>
            <span>
              杭州乐读科技有限公司运营：
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                rel="noopener noreferrer"
                target="_blank"
              >
                浙网文[2018]3506-263号
              </a>
            </span>
          </p>
          <p className="info">
            <a
              href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
              rel="noopener noreferrer"
              target="_blank"
            >
              粤B2-20090191-18 &nbsp;&nbsp; 工业和信息化部备案管理系统网站
            </a>
            <span className="police-icon"></span>
            <a className="police-text" href="javascript;">
              浙公网安备 33010902002564号
            </a>
          </p>
        </div>
        <div className="right">
          {footerImages.map((item, index) => {
            return (
              <li className="image-item" key={item.link}>
                <a
                  className="image-link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                </a>
                <span className="title"></span>
              </li>
            );
          })}
        </div>
      </div>
    </AppFooterWrapper>
  );
});
