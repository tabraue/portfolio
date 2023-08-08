import React from "react";

function Nav() {
  return (
    <nav className="bg-orange-700 dark:bg-gray-900 flex flex-row gap-4 justify-between p-3">
      <h1 className="justify-self-start ml-3">DTR</h1>
      <div className="flex flex-row gap-4 mr-3">
        <h5 className="">About Me</h5>
        <h5 className="">Projects</h5>
      </div>
    </nav>
  );
}

export default Nav;
