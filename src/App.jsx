import React, { Component } from "react";
import "./App.css";

import Section from "./components/Section";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";

import { DarkTheme, LightTheme } from "./styles/theme.js";
import { flexColumn } from "./styles/util.js";

// might need to be updated to point at the public folder
const imgUrl = fileName => {
  return fileName;
};

/**
 * The main component for our app
 *
 * The page is chopped into sections, each receiving a theme
 * that sets the text/bg/ui colors. Content is implemented as
 * individual components for organization vs. reusability
 */
class App extends Component {
  render() {
    return (
      <main>
        <Section
          theme={DarkTheme}
          bgImgUrl={imgUrl("faces-background.png")}
          extraRules={flexColumn}
        >
          <Nav startIndex={0} />
          <Hero />
        </Section>
        <Section theme={LightTheme}>
          <About />
        </Section>
        <Section theme={DarkTheme}>
          <Products />
        </Section>
      </main>
    );
  }
}

export default App;
