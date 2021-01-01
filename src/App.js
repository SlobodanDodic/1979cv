import React from "react";
import { HashRouter, Route } from "react-router-dom";

import AboutMe from "./Components/AboutMe";
import FooterPage from "./Components/FooterPage";
import NavbarTop from "./Components/NavbarTop";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
import History from "./Components/History";

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <NavbarTop />
        <Route path="/" exact component={HomePage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/history" component={History} />
        <FooterPage />
      </div>
    </HashRouter>
  );
};

export default App;
