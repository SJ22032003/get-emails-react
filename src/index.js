import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={createStore(rootReducer)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
