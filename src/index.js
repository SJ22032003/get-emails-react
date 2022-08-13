import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>
);
