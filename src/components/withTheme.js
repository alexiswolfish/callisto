import * as React from "react";
import PropTypes from "prop-types";

export default class WithTheme extends React.Component {
  static contextTypes = { theme: PropTypes.object };

  render() {
    const { theme } = this.context;
    const { children } = this.props;

    console.log("theme from withTheme", theme);
    return <div>{children(theme)}</div>;
  }
}
