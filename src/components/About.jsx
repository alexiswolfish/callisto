import React, { Component } from "react";

import ClassRenderer from "./classRenderer.js";
import Button from "./Button";

import { zIndex } from "../styles/zIndex.js";
import { h2, uiBody, uiCaption, accentJumbo } from "../styles/fonts.js";
import { container, flexStretch, flexEnd } from "../styles/util.js";

const flexContainerRules = {
  height: "100%",
  justifyContent: "space-around",
};
const halfSizeContainer = {
  width: "50%",
  padding: "100px 0",
  maxWidth: "540px",
  position: "relative",
};
const sectionPositionRules = {
  position: "relative",
  minHeight: "340px",
  paddingRight: "64px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "60px",
};
const headerRule = {
  paddingBottom: "30px",
  paddingLeft: "24px",
  zIndex: zIndex.overlay,
};
const descRule = index => {
  return {
    paddingBottom: "20px",
    paddingLeft: index == 2 ? "120px" : "60px",
    boxSizing: "border-box",
    flex: "1 1 auto",
  };
};
const accentRule = {
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: zIndex.background,
};
const accentLineRule = theme => {
  return {
    height: "50%",
    borderRight: `1px solid ${theme.color.border.accent}`,
    position: "absolute",
    top: "-15%",
    right: 0,
    zIndex: zIndex.floating,
  };
};
const accentLineInsetRule = theme => {
  return {
    height: "70%",
    borderRight: `1px solid ${theme.color.border.accent}`,
    position: "absolute",
    bottom: 0,
    left: "60px",
    zIndex: zIndex.floating,
  };
};

export default class About extends Component {
  section(style, header, desc, index) {
    return (
      <div className={style([sectionPositionRules])}>
        <h2 className={style([h2, headerRule])}>{header}</h2>
        <p className={style([uiBody, descRule(index)])}>{desc}</p>
        <Button extraRules={{ alignSelf: "flex-end" }}>Learn more</Button>
        <div className={style([accentRule, accentJumbo])}>
          {index.toString().length < 2 ? "0" + index : index}
        </div>
      </div>
    );
  }
  render() {
    return (
      <ClassRenderer>
        {(style, theme) => (
          <div className={style([container, flexStretch, flexContainerRules])}>
            <section className={style([halfSizeContainer])}>
              {this.section(style, "Who we are", p1, 1)}
              <div className={style([accentLineRule])} />
            </section>
            <section className={style([halfSizeContainer, flexEnd])}>
              {this.section(style, "What we do", p2, 2)}
              <div className={style([accentLineInsetRule])} />
            </section>
          </div>
        )}
      </ClassRenderer>
    );
  }
}

const p1 =
  "Callisto is a non-profit organization that creates technology to combat sexual assault and harassment. Our technology is designed to empower survivors with options to seek support and identify repeat perpetrators. Callisto Campus is our flagship online system, which enables student survivors to document and report sexual assault and help identify repeat perpetrators.";
const p2 =
  "Callisto's platform provides victims with trauma-sensitive options for reporting sexual assault and harassment. Currently in place across 13 partner campuses, Callisto is expanding in 2018 to serve professional industries.";
