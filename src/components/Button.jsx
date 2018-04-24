import React, { Component } from "react";

import ClassRenderer from "./classRenderer.js";
import { uiCaption } from "../styles/fonts.js";

// Normally background + color transitions are not performant enough,
// but this is just for fun.
const buttonRules = theme => {
  return {
    padding: "12px 40px",
    background: theme.color.button.fill,
    border: `2px solid ${theme.color.button.fill}`,
    color: theme.color.button.text,
    transition: "background 200ms, color 200ms, transform 200ms",
    flex: "0 0 auto",
    ":hover": {
      background: "rgba(0, 0, 0, 0)",
      border: `2px solid ${theme.color.button.hover}`,
      color: theme.color.button.hover,
      cursor: "pointer",
    },
    ":active": {
      transform: "translateY(1px)",
    },
  };
};
/**
 * Generic button class.
 *
 * If we were buliding this out with a router,
 * buttons with onClick events would get the normal button template, but
 * buttons with a href should be swapped for an anchor with the same styles
 */
export default class Button extends Component {
  render() {
    const { children, extraRules } = this.props;
    return (
      <ClassRenderer>
        {(style, theme) => (
          <button className={style([buttonRules, uiCaption, extraRules])}>
            {children}
          </button>
        )}
      </ClassRenderer>
    );
  }
}
