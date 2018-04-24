import { Component, Children } from "react";
import { render } from "fela-dom";
import PropTypes from "prop-types";

/**
 * Provider for exposing the fela renderer
 */
export default class StyleProvider extends Component {
  static propTypes = { renderer: PropTypes.object.isRequired };
  static childContextTypes = { renderer: PropTypes.object };

  getChildContext() {
    return { renderer: this.props.renderer };
  }

  componentDidMount() {
    render(this.props.renderer);
  }

  render() {
    // Passes the renderer through context to styleProvider's children
    return Children.only(this.props.children);
  }
}
