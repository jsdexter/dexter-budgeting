import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/css/index.css";
import { Provider } from "react-redux";

import App from "../src/components/App";

import store from "./store/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
