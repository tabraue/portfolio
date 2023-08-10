import React from "react";
import '../../index.css'

function About() {
  return (
    <hgroup className="text-lg m-3 p-9 flex flex-col justify-center border-solid border-green-d border-2 text-defaultTextColor select-none">
      <h1 className="text-6xl pb-3">¡Hola!</h1>
      <h2 className="text-5xl pb-3">Me llamo <span className="txt-gradient">Diana</span></h2>
      <h3 className="text-4xl pb-3">Full Stack Developer</h3>
      <p>
        Después de 13 años dedicada al sector turístico, ahora soy Full Stack
        Dev, donde he encontrado una pasión en el desarrollo web: ¡la habilidad
        de{" "}
        <span
          className="text-xl font-bold txt-gradient"
        >
          crear!
        </span>
      </p>
    </hgroup>
  );
}

export default About;
