import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/css/index.css";
import { Provider } from "react-redux";

import App from "../src/components/App";

import store from "./store/store";
import reportWebVitals from "./reportWebVitals";

// library.add(fab, faCheckSquare, faCoffee)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();