import React, { Component } from "react";

import ClassRenderer from "./classRenderer.js";
import logo from "../callisto-logo.svg";

import { uiCaps } from "../styles/fonts.js";
import { zIndex } from "../styles/zIndex.js";

const navRule = {
  display: "flex",
  padding: "20px 50px",
  zIndex: zIndex.foreground,
  "@media (max-width: 1024px)": { padding: "20px" },
};

const ulRule = theme => {
  return {
    display: "flex",
    flex: "1 1 auto",
    justifyContent: "space-evenly",
    position: "relative",
    width: "100%",
    maxWidth: "840px",
    borderBottom: `1px solid ${theme.color.border.normal}`,
    margin: "0 auto",
    "@media (max-width: 786px)": { display: "none" },
  };
};

const liRule = (theme, isSelected) => {
  return {
    padding: "20px",
    color: isSelected ? theme.color.text.dark : theme.color.text.normal,
    ":hover": { color: theme.color.text.dark, cursor: "pointer" },
    "@media (max-width: 1024px)": { padding: "20px 10px" },
  };
};

// Normally we'd want to keep strings somewhere centralized
// so they can be translated, but this is fine for something quick
const items = [
  "Get involved",
  "Who we are",
  "What we do",
  "Work with us",
  "Donate",
  "Contact",
];

export default class Nav extends Component {
  constructor(props) {
    super(props);
    const { startIndex } = props;
    this.state = {
      selectedIndex: startIndex || 0,
    };
  }

  nav(content, index, isSelected, style, theme) {
    return (
      <li
        key={index}
        className={style([liRule(theme, isSelected), uiCaps])}
        onClick={this.onClick.bind(this, index)}
      >
        {content}
      </li>
    );
  }
  logo(style) {
    return (
      <img src={logo} alt="home" className={style({ marginRight: "20px" })} />
    );
  }
  onClick(index) {
    this.setState({
      selectedIndex: index,
    });
  }
  render() {
    return (
      <ClassRenderer>
        {(style, theme) => (
          <nav className={style([navRule])}>
            {this.logo(style)}
            <ul className={style([ulRule])}>
              {items.map((item, i) => {
                return this.nav(
                  item,
                  i,
                  i == this.state.selectedIndex,
                  style,
                  theme,
                );
              })}
            </ul>
          </nav>
        )}
      </ClassRenderer>
    );
  }
}
