import React, { Component } from "react";

import ClassRenderer from "./classRenderer.js";
import Button from "./Button";
import Card from "./Card";

import { zIndex } from "../styles/zIndex.js";
import {
  h2,
  uiBody,
  uiCaption,
  uiCaps,
  accentJumbo,
  accentColorRule,
} from "../styles/fonts.js";
import { container, flexStretch, flexEnd } from "../styles/util.js";

const headerRule = {
  textAlign: "center",
  marginBottom: "50px",
};
const containerRule = {
  padding: "60px",
};
export default class Products extends Component {
  render() {
    return (
      <ClassRenderer>
        {(style, theme) => (
          <div className={style([container, containerRule])}>
            <h2 className={style([h2, headerRule, accentColorRule])}>
              Our Products
            </h2>
            <div className={style(flexStretch)}>
              <Card>
                <div className={style(uiCaps)}>Flagship</div>
              </Card>
              <Card>
                <div className={style(uiCaps)}>New</div>
              </Card>
            </div>
          </div>
        )}
      </ClassRenderer>
    );
  }
}
