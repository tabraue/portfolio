import React from "react";
//import { motion, AnimatePresence } from "framer-motion"

function Technology() {

  return (
    <section className="text-lg m-3 p-9 flex flex-col justify-center border-solid border-green-d border-2 text-defaultTextColor">
      <h1 className="text-4xl pb-3">Tecnologías</h1>
       <div className="grid grid-cols-4 gap-6"> 
        <div className="border-solid border-green-d border-2">tech</div>
        <div className="border-solid border-green-d border-2">tech</div>
        <div className="border-solid border-green-d border-2">tech</div>
        <div className="border-solid border-green-d border-2">tech</div>
        <div className="border-solid border-green-d border-2">tech</div> 
       </div>
    </section>
  );
}

export default Technology;