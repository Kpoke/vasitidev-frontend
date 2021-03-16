import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./store/reducers/product";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(reducer, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
