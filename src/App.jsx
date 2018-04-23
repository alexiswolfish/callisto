import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ThemeProvider from "./providers/themeProvider.js";
import ClassRenderer from "./components/classRenderer.js";
import WithTheme from "./components/withTheme.js";
// import { SectionOverview, SectionAbout, SectionProducts } from "./components";
import { DarkTheme, LightTheme } from "./styles/theme.js";

const bgRule = theme => {
  console.log(theme);
  return {
    height: "100vh",
    maxHeight: "850px",
    width: "100%",
    backgroundColor: theme.color.background,
    color: "pink",
  };
};

class App extends Component {
  render() {
    return (
      <main className="App">
        <ThemeProvider theme={DarkTheme}>
          <ClassRenderer>
            {(style, theme) => (
              <section className={style(bgRule)}>
                <h1>heyo</h1>
              </section>
            )}
          </ClassRenderer>
        </ThemeProvider>
        <ThemeProvider theme={LightTheme}>
          <ClassRenderer>
            {(style, theme) => (
              <section className={style(bgRule)}>
                <h1>what is up</h1>
              </section>
            )}
          </ClassRenderer>
        </ThemeProvider>
      </main>
    );
  }
}

export default App;
