import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./app/App";
import { Cursor } from "./cursor/Cursor";

export const Root: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
