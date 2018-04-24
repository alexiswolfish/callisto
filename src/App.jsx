import React, { Component } from "react";
import "./App.css";

import Section from "./components/Section";
import Nav from "./components/Nav";
import { DarkTheme, LightTheme } from "./styles/theme.js";

const h1 = theme => {
  return {
    color: "pink",
  };
};

//TODO[wolfe]: figure out where the public folder points to
const imgUrl = fileName => {
  return fileName;
};

class App extends Component {
  render() {
    return (
      <main>
        <Section theme={DarkTheme} bgImgUrl={imgUrl("faces-background.png")}>
          <Nav startIndex={0} />
          {/* <Overview /> */}
        </Section>
        <Section theme={LightTheme}>
          <h1>Who we are</h1>
        </Section>
        <Section theme={DarkTheme}>
          <h1>Our Products</h1>
        </Section>
      </main>
    );
  }
}

export default App;
