import React, { Component } from "react";

import ThemeProvider from "../providers/themeProvider.js";
import ClassRenderer from "./classRenderer.js";

import { LightTheme } from "../styles/theme.js";

const bgRule = theme => {
  return {
    background: theme.color.background,
    color: theme.color.text.normal,
    padding: "30px 40px",
    maxWidth: "460px",
    width: "100%",
    boxSizing: "border-box",
    margin: "15px",
    textAlign: "center",
    top: "-40px",
    bottom: "initial",
    left: "-40px",
    "@media (max-width: 1024px)": {
      padding: "15px 20px",
    },
  };
};
export default class Card extends Component {
  render() {
    return (
      // Cards are always displayed on a white background
      <ThemeProvider theme={LightTheme}>
        <ClassRenderer>
          {(style, theme) => (
            <article className={style(bgRule)}>{this.props.children}</article>
          )}
        </ClassRenderer>
      </ThemeProvider>
    );
  }
}
