import React from "react";
import Nav from "../../components/Nav/Nav";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Mouse from "../../components/Mouse/Mouse";
import Technology from "../../components/Technology/Technology";

function Portfolio() {
  return (
    <main>
      <Nav />
      <Mouse/>
      <About />
      <Projects />
      <Technology/>
    </main>
  );
}

export default Portfolio;
