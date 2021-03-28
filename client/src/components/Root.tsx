import React from "react";
import { Provider } from "react-redux";
// import { store, persistor } from "../redux/store";
import { BrowserRouter, Route } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "../redux/store";
import { App } from "./app/App";
import { ErrorBoundary } from "./errorBoundary/ErrorBoundary";

export const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Route component={App} />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};
