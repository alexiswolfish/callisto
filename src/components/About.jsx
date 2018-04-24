import React, { Component } from "react";

import ClassRenderer from "./classRenderer.js";
import Button from "./Button";

import { zIndex } from "../styles/zIndex.js";
import {
  h2,
  uiBody,
  uiCaption,
  uiCapsLight,
  accentJumbo,
} from "../styles/fonts.js";
import { container, flexEnd } from "../styles/util.js";

export default class About extends Component {
  /**
   * @param {renderer} style
   * @param {string} header
   * @param {string} desc
   * @param {int} index
   */
  section(style, header, desc, index) {
    return (
      <div className={style([sectionPositionRules])}>
        <h2 className={style([h2, headerRule])}>{header}</h2>
        <p className={style([uiBody, descRule(index)])}>{desc}</p>
        <Button extraRules={buttonRule}>Learn more</Button>
        <div className={style([accentRule(index), accentJumbo])}>
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
            <section
              className={style([halfSizeContainer, accentRuleResponsiveTop])}
            >
              {this.section(style, "Who we are", p1, 1)}
              <div className={style([accentLineRule])}>
                <span className={style([scrollLabel, uiCapsLight])}>
                  Scroll Down
                </span>
              </div>
            </section>

            <section
              className={style([
                halfSizeContainer,
                flexEnd,
                accentRuleResponsiveBottom,
              ])}
            >
              {this.section(style, "What we do", p2, 2)}
              <div className={style([accentLineInsetRule])} />
            </section>
          </div>
        )}
      </ClassRenderer>
    );
  }
}

const flexContainerRules = {
  height: "100%",
  justifyContent: "space-around",
  display: "flex",
  alignItems: "stretch",
  "@media (max-width: 1024px)": {
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 40px",
  },
  "@media (max-width: 768px)": {
    padding: "40px 20px",
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
  "@media (max-width: 768px)": { padding: 0 },
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
  zIndex: zIndex.foreground,
  "@media (max-width: 1024px)": {
    alignSelf: "center",
  },
};
const accentRule = index => {
  const rightResponsiveRules = {
    left: "initial",
    right: "-40px",
  };
  return {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: zIndex.background,
    "@media (max-width: 1024px)": {
      left: "-60px",
    },
    "@media (max-width: 768px)": index == 1 ? rightResponsiveRules : {},
  };
};
const accentRuleResponsiveTop = {
  "@media (max-width: 1024px)": {
    alignSelf: "flex-start",
    paddingLeft: "10px",
    paddingBottom: "20px",
    "@media (max-width: 768px)": { padding: 0 },
  },
};
const accentRuleResponsiveBottom = {
  "@media (max-width: 1024px)": {
    alignSelf: "flex-end",
    paddingRight: "10px",
    "@media (max-width: 768px)": { padding: 0 },
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
    "@media (max-width: 1024px)": {
      height: "450px",
      right: "-40px",
      top: "-150px",
    },
    "@media (max-width: 768px)": {
      height: "75%",
      right: "10px",
      top: "-40px",
    },
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
    "@media (max-width: 1024px)": {
      height: "340px",
      left: "20px",
      bottom: "-60px",
    },
    "@media (max-width: 768px)": { height: "100%" },
  };
};
const scrollLabel = {
  transform: "rotate(270deg)",
  position: "absolute",
  right: "0",
  top: "20px",
  color: "white",
  textAlign: "right",
  "@media (max-width: 768px)": { display: "none" },
};

const p1 =
  "Callisto is a non-profit organization that creates technology to combat sexual assault and harassment. Our technology is designed to empower survivors with options to seek support and identify repeat perpetrators. Callisto Campus is our flagship online system, which enables student survivors to document and report sexual assault and help identify repeat perpetrators.";
const p2 =
  "Callisto's platform provides victims with trauma-sensitive options for reporting sexual assault and harassment. Currently in place across 13 partner campuses, Callisto is expanding in 2018 to serve professional industries.";
