import React, { Component } from "react";

import ClassRenderer from "./classRenderer.js";
import Button from "./Button";

import { accentItalic, h1, h3 } from "../styles/fonts.js";
import { zIndex } from "../styles/zIndex.js";
import { container, flexStretch } from "../styles/util.js";

const flexContainerRule = {
  display: "flex",
  flex: "1 1 auto",
  alignItems: "flex-end",
  justifyContent: "space-between",
  padding: "40px",
  boxSizing: "border-box",
  "@media (max-width: 1024px)": {
    height: "calc(100vh - 100px)",
    minHeight: "500px",
    padding: "20px",
    flexDirection: "column",
    alignItens: "flex-start",
  },
};
const halfContainerRule = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  width: "50%",
  paddingBottom: "80px",
  zIndex: zIndex.foreground,
  "@media (max-width: 1024px)": {
    justifyContent: "flex-start",
  },
  "@media (max-width: 768px)": {
    width: "100%",
    boxSizing: "border-box",
    paddingBottom: 0,
  },
};
const ctaRule = {
  alignItems: "flex-start",
  maxWidth: "500px",
  "@media (max-width: 1024px)": {
    marginTop: "40px",
  },
  "@media (max-width: 768px)": {
    marginTop: "0",
    maxWidth: "100%",
  },
};
const asideRule = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  position: "relative",
  "@media (max-width: 1330px)": {
    justifyContent: "flex-end",
  },
  "@media (max-width: 1024px)": {
    alignSelf: "flex-end",
  },
};
const accentPositioner = {
  position: "relative",
  height: "50%",
  // Accent positioner has a custom breakpoint to avoid the face in the hero image
  "@media (max-width: 1330px)": {
    height: "inherit",
  },
  "@media (max-width: 1024px)": {
    marginBottom: "50px",
  },
  "@media (max-width: 768px)": {
    height: "inherit",
    marginBottom: "0px",
  },
};
const accentRule = {
  maxWidth: "340px",
};
const lineDecorationRule = theme => {
  return {
    width: "100%",
    position: "absolute",
    top: "40px",
    right: "-100%",
    border: `1px solid ${theme.color.border.accent}`,
  };
};
const heroImageRule = {
  height: "110%",
  position: "absolute",
  bottom: "-10px",
  left: "18%",
  zIndex: zIndex.background,
  "@media (max-width: 1024px)": {
    maxHeight: "80%",
    left: 0,
  },
  "@media (max-width: 786px)": {
    maxHeight: "initial",
    height: "initial",
    width: "100%",
    maxWidth: "500px",
    left: 0,
  },
};

/**
 * The top hero section on the homepage. Coordinates the nav,
 * pullquotes and hero images
 */
export default class Hero extends Component {
  mainCta(style, theme) {
    return (
      <div className={style([halfContainerRule, ctaRule])}>
        <h1 className={style([h1, { paddingBottom: "20px" }])}>
          Tech to Combat Sexual Assault
        </h1>
        <h3 className={style([h3, { paddingBottom: "30px" }])}>
          We are stronger. Together.
        </h3>
        <Button>Learn more</Button>
      </div>
    );
  }

  pullQuote(style) {
    return (
      <aside className={style([halfContainerRule, asideRule])}>
        <div className={style(accentPositioner)}>
          <h3 className={style([accentItalic, accentRule])}>
            'why are you questioning the victim here? let's flip it. let's talk
            about what the predator is doing.'
          </h3>
          <div className={style(lineDecorationRule)} />
        </div>
      </aside>
    );
  }

  render() {
    return (
      <ClassRenderer>
        {(style, theme) => (
          <div className={style([flexContainerRule, container, flexStretch])}>
            {this.mainCta(style, theme)}
            {this.pullQuote(style, theme)}
            {/* relative to section container */}
            <img
              className={style(heroImageRule)}
              src={"hero-image.png"}
              alt="woman gazing slightly off into the distance"
            />
          </div>
        )}
      </ClassRenderer>
    );
  }
}
