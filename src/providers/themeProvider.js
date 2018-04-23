import { Component } from "react";
import PropTypes from "prop-types";

export default class ThemeProvider extends Component {
  static propTypes = { theme: PropTypes.object.isRequired };
  static childContextTypes = { theme: PropTypes.object };

  getChildContext() {
    return { theme: this.props.theme };
  }

  render() {
    return this.props.children;
  }
}
