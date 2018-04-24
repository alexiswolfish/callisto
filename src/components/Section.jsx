import React, { Component } from "react";

import ThemeProvider from "../providers/themeProvider.js";
import ClassRenderer from "./classRenderer.js";

const bgRule = (theme, bgImgUrl) => {
  return {
    height: "100vh",
    maxHeight: "850px",
    width: "100%",
    backgroundColor: theme.color.background,
    color: theme.color.text.normal,
    backgroundImage: bgImgUrl ? `url(${bgImgUrl})` : "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
};

export default class Section extends Component {
  render() {
    const { children, bgImgUrl } = this.props;

    return (
      <ThemeProvider theme={this.props.theme}>
        <ClassRenderer>
          {(style, theme) => (
            <section className={style(bgRule(theme, bgImgUrl))}>
              {this.props.children}
            </section>
          )}
        </ClassRenderer>
      </ThemeProvider>
    );
  }
}
