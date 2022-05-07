import React, { memo } from "react";
import { RecommendHeaderWrapper } from "./style";
import propTypes from "prop-types";

const XXThemeHeaderRCM = memo(function XXThemeHeaderRCM(props) {
  const { title, keywords } = props;

  return (
    <RecommendHeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <ul className="keywords">
          {keywords.map((item, index) => {
            return (
              <li key={item} className="item">
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <span className="more">
          <a href="todo">更多</a>
        </span>
        <i className="icon sprite_02"></i>
      </div>
    </RecommendHeaderWrapper>
  );
});

XXThemeHeaderRCM.defaultProps = {
  keywords: [],
};

XXThemeHeaderRCM.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
};
export default XXThemeHeaderRCM;
