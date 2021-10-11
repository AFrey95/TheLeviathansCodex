import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as H4RProvider } from "hooks-for-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers";

import "./index.scss";
import "materialize-css/dist/js/materialize.min.js";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <H4RProvider>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </H4RProvider>,
  document.getElementById("root")
);
