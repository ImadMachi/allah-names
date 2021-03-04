import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./features/store";
import App from "./App";
import "normalize.css/normalize.css";

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
ReactDOM.render(jsx, document.getElementById("root"));
