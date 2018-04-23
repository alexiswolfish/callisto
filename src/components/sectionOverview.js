import * as React from "react";
import ClassRenderer from "./components/classRenderer.js";

const backgroundRule = theme => {
  background: theme.color.background
}

export default class SectionOverview = () => {
  const {theme} = this.context

  render() {
    return (
      <ClassRenderer>
        {style => (
          <section className=(style(backgroundRule))/>
        )}
      </ClassRenderer>
    )
  }
};
