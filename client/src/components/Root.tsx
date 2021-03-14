import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
// import { store, persistor } from "../redux/store";
import { BrowserRouter, Route } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "../redux/store";
import { App } from "./app/App";

export const Root: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>
  );
};
