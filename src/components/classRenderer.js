import * as React from "react";
import PropTypes from "prop-types";
import { combineRules } from "fela";
import { flattenDeep } from "lodash";

/**
 * Consumer for StyleProvider and ThemeProvider
 *
 * Takes an array of style declarations and runs them
 * through the fela renderer to generate css
 */
export default class ClassRenderer extends React.Component {
  static contextTypes = { renderer: PropTypes.object, theme: PropTypes.object };

  render() {
    const { renderer, theme } = this.context;
    const { children } = this.props;

    const style = rules => {
      const rulesArr = flattenDeep([rules])
        .filter(Boolean)
        .map(rule => (typeof rule === "function" ? rule : () => rule));
      const rule = combineRules(...rulesArr);
      return renderer.renderRule(rule, theme);
    };

    return children(style, theme);
  }
}
