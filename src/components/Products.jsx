import React, { Component } from "react";

import ClassRenderer from "./classRenderer.js";
import Button from "./Button";
import Card from "./Card";

import { zIndex } from "../styles/zIndex.js";
import {
  h2,
  h4,
  uiBody2,
  uiCaption,
  uiCaps,
  uiLight,
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
const cardContainerRule = {
  justifyContent: "center",
};
const spacerRule = theme => {
  return {
    borderTop: `1px solid ${theme.color.border.neutral}`,
    paddingBottom: "30px",
    width: "100%",
  };
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
            <div className={style([flexStretch, cardContainerRule])}>
              {/* card data is hard coded below for this mock */}
              {cards.map(card => {
                return (
                  <Card>
                    <div className={style([uiCaps, { marginBottom: "30px" }])}>
                      {card.kicker}
                    </div>
                    <h4 className={style([h4, { marginBottom: "15px" }])}>
                      <b>Callisto</b> {card.name}
                    </h4>
                    <p className={style([uiBody2, { marginBottom: "50px" }])}>
                      {card.desc}
                    </p>
                    <div className={style([uiBody2, { marginBottom: "20px" }])}>
                      Features include:
                    </div>
                    <ul className={style([uiLight, { marginBottom: "40px" }])}>
                      {card.features.map(feature => {
                        return (
                          <li className={style({ marginBottom: "20px" })}>
                            {feature}
                          </li>
                        );
                      })}
                    </ul>
                    <div className={style(spacerRule)} />
                    <Button>More about Callisto {card.name}</Button>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </ClassRenderer>
    );
  }
}

const flagship = {
  kicker: "flagship",
  name: "Campus",
  desc:
    "Designed to detect repeat perpetrators and to empower victims to make the reporting decision that feels right for them.",
  features: [
    "Secure encrypted incident records",
    "Option to enroll in Matching system",
    "Direct reporting to your institution",
    "Support services and local resources",
  ],
};
const expansion = {
  kicker: "new",
  name: "Expansion",
  desc:
    "In this version of Callisto, we are adapting our signature matching system to empower victims beyond college campuses:",
  features: [
    "Secure encrypted Matching records",
    "Option to create incident reports",
    "Access to a Callisto Options Counselor (if Matched)",
    "Support services and local resources",
  ],
};
const cards = [flagship, expansion];
