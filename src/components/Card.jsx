import React, { Component } from "react";

import ThemeProvider from "../providers/themeProvider.js";
import ClassRenderer from "./classRenderer.js";

import { LightTheme } from "../styles/theme.js";

const bgRule = theme => {
  return {
    background: theme.color.background,
    padding: "20px 50px",
    maxWidth: "460px",
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
