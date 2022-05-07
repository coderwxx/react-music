import React, { memo } from "react";
import XXMain from "./pages/main";

import store from "./store";
import { Provider } from "react-redux";

export default memo(function App() {
  return (
    <Provider store={store}>
      <div>
        <XXMain />
      </div>
    </Provider>
  );
});
