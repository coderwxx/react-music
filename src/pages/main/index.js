import React, { memo } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import AppFooter from "../../components/app-footer";
import AppHeader from "../../components/app-header";
import AppPlayerBar from "../player/app-player-bar";

import routes from "../../router";

export default memo(function XXMain() {
  return (
    <div>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
        <AppPlayerBar />
      </HashRouter>
    </div>
  );
});
