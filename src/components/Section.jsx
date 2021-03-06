import React, { Component } from "react";

import ThemeProvider from "../providers/themeProvider.js";
import ClassRenderer from "./classRenderer.js";

const bgRule = (theme, bgImgUrl) => {
  return {
    position: "relative",
    height: "100vh",
    maxHeight: "900px",
    minHeight: "620px",
    width: "100%",
    backgroundColor: theme.color.background,
    color: theme.color.text.normal,
    backgroundImage: bgImgUrl ? `url(${bgImgUrl})` : "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "@media (max-width: 1024px)": {
      maxHeight: "initial",
      height: "initial",
      minHeight: "initial",
    },
  };
};

export default class Section extends Component {
  render() {
    const { children, bgImgUrl, extraRules } = this.props;

    return (
      <ThemeProvider theme={this.props.theme}>
        <ClassRenderer>
          {(style, theme) => (
            <section className={style([bgRule(theme, bgImgUrl), extraRules])}>
              {children}
            </section>
          )}
        </ClassRenderer>
      </ThemeProvider>
    );
  }
}
