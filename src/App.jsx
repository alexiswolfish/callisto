import React, { Component } from "react";
import "./App.css";

import Section from "./components/Section";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

import { DarkTheme, LightTheme } from "./styles/theme.js";

// might need to be updated to point at the public folder
const imgUrl = fileName => {
  return fileName;
};

const extraHeroRules = {
  display: "flex",
  flexDirection: "column",
};

class App extends Component {
  render() {
    return (
      <main>
        <Section
          theme={DarkTheme}
          bgImgUrl={imgUrl("faces-background.png")}
          extraRules={extraHeroRules}
        >
          <Nav startIndex={0} />
          <Hero />
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
