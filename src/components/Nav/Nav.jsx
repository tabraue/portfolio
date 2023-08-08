import React from "react";
import Moon from "../../icons/Moon/Moon";


function Nav() {
  return (
    <nav className="bg-green-d dark:bg-gray-900 flex flex-row gap-4 justify-between p-3 text-blue-black  cursor-pointer text-lg">
      <h1 className="justify-self-start ml-3">DTR</h1>
      <div className="flex flex-row gap-4 mr-3 items-center">
        <h5>About me</h5>
        <h5>Projects</h5>
        <Moon/> 
        <p className="font-emoji">🇬🇧</p>
        <p className="font-emoji">🇪🇸</p>
      </div>
    </nav>
  );
}

export default Nav;
