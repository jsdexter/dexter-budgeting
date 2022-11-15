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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log("Service worker registered"))
      .catch((err) => console.error(`Service Worker Error: ${err}`));
  });
} else {
  console.log("Service Worker is not supported by browser.");
}
