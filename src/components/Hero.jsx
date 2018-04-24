import React, { Component } from "react";

import ClassRenderer from "./classRenderer.js";
import Button from "./Button";

import { uiCaps, accentItalic, h1, h3 } from "../styles/fonts.js";
import { zIndex } from "../styles/zIndex.js";
import {
  container,
  flexStretch,
  flexColumnEnd,
  flexColumnCenter,
} from "../styles/util.js";

const flexContainerRule = {
  display: "flex",
  flex: "1 1 auto",
  alignItems: "flex-end",
  justifyContent: "space-between",
  padding: "40px",
};
const halfContainerRule = {
  width: "50%",
  paddingBottom: "80px",
  zIndex: zIndex.foreground,
};
const ctaRule = {
  alignItems: "flex-start",
  maxWidth: "500px",
};
const asideRule = {
  alignItems: "flex-end",
  position: "relative",
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
};

/**
 * The top hero section on the homepage. Coordinates the nav,
 * pullquotes and hero images
 */
export default class Hero extends Component {
  mainCta(style, theme) {
    return (
      <div className={style([halfContainerRule, ctaRule, flexColumnEnd])}>
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
      <aside
        className={style([halfContainerRule, flexColumnCenter, asideRule])}
      >
        <div className={style({ position: "relative", height: "50%" })}>
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
            <img className={style(heroImageRule)} src={"hero-image.png"} />
          </div>
        )}
      </ClassRenderer>
    );
  }
}
