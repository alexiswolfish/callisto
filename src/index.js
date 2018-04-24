import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createRenderer } from "fela";
import StyleProvider from "./providers/styleProvider.js";

/**
 * Our Basic React app.
 *
 * Passes Fela through the context, renders to the root el
 */
const init = () => {
  const container = document.getElementById("root");
  const styleRenderer = createRenderer();

  ReactDOM.render(
    <StyleProvider renderer={styleRenderer}>
      <App />
    </StyleProvider>,
    container,
  );
};

init();
