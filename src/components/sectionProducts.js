import * as React from "react";
import ClassRenderer from "./components/classRenderer.js";

const backgroundRule = theme => {
  background: theme.color.background
}

export default class SectionProducts = () => {
  const {theme} = this.context

  return (
    <ClassRenderer>
      {style => (
        <section className=(style(backgroundRule))/>
      )}
    </ClassRenderer>
  );
};
