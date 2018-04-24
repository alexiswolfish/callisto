import React, { Component } from "react";

import ClassRenderer from "./classRenderer.js";
import Button from "./Button";

import { zIndex } from "../styles/zIndex.js";
import { h2, uiBody, uiCaption, accentJumbo } from "../styles/fonts.js";
import { container, flexEnd } from "../styles/util.js";

const flexContainerRules = {
  height: "100%",
  justifyContent: "space-around",
  display: "flex",
  alignItems: "stretch",
  "@media (max-width: 1024px)": {
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
  },
  "@media (max-width: 768px)": {
    padding: "20px",
  },
};
const halfSizeContainer = {
  width: "50%",
  padding: "100px 0",
  maxWidth: "540px",
  position: "relative",
  "@media (max-width: 1024px)": {
    padding: "0px",
    width: "100%",
    boxSizing: "border-box",
  },
};
const sectionPositionRules = {
  position: "relative",
  minHeight: "340px",
  minWidth: "470px",
  paddingRight: "64px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "60px",
  "@media (max-width: 1024px)": {
    minWidth: "initial",
    minHeight: "initial",
    width: "100%",
    paddingRight: "20px",
    marginBottom: "30px",
  },
};
const headerRule = {
  paddingBottom: "30px",
  paddingLeft: "24px",
  zIndex: zIndex.overlay,
  "@media (max-width: 1024px)": {
    paddingBottom: "15px",
    paddingLeft: "0px",
  },
};
const descRule = index => {
  return {
    paddingBottom: "20px",
    paddingLeft: index == 2 ? "120px" : "60px",
    boxSizing: "border-box",
    flex: "1 1 auto",
    "@media (max-width: 1024px)": {
      paddingBottom: "20px",
      paddingLeft: "40px",
    },
  };
};
const buttonRule = {
  alignSelf: "flex-end",
  "@media (max-width: 1024px)": {
    alignSelf: "center",
  },
};
const accentRule = {
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: zIndex.background,
  "@media (max-width: 1024px)": {
    top: "-40px",
    bottom: "initial",
    left: "-40px",
  },
  "@media (max-width: 1024px)": {
    top: "-50px",
    bottom: "initial",
    left: "-32px",
  },
};
const accentLineRule = theme => {
  return {
    height: "50%",
    borderRight: `1px solid ${theme.color.border.accent}`,
    position: "absolute",
    top: "-10%",
    right: 0,
    zIndex: zIndex.floating,
    "@media (max-width: 1024px)": { display: "none" },
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
    "@media (max-width: 1024px)": { display: "none" },
  };
};

export default class About extends Component {
  section(style, header, desc, index) {
    return (
      <div className={style([sectionPositionRules])}>
        <h2 className={style([h2, headerRule])}>{header}</h2>
        <p className={style([uiBody, descRule(index)])}>{desc}</p>
        <Button extraRules={buttonRule}>Learn more</Button>
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
          <div className={style([container, flexContainerRules])}>
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
