import React, { memo } from "react";
import { ThemeHeader } from "./style";

export default memo(function XXThemeHeaderNormal(props) {
  const { title } = props;
  return (
    <ThemeHeader>
      <h2>{title}</h2>
    </ThemeHeader>
  );
});
