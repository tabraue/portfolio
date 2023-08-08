import React from "react";
import Nav from "../../components/Nav/Nav";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Mouse from "../../components/Mouse/Mouse";

function Portfolio() {
  return (
    <main>
      <Nav />
      <Mouse/>
      <About />
      <Projects />
    </main>
  );
}

export default Portfolio;
