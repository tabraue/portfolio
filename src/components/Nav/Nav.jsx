import React from "react";
import Moon from "../../icons/Moon/Moon";
import "flowbite";

function Nav() {
  return (
    <nav className="border-solid border-green-d border-2 flex flex-row gap-4 justify-between p-3 m-3 text-defaultTextColor cursor-pointer text-lg ">
      <h1 className="justify-self-start ml-3 hover:text-blue-l">DTR</h1>
      <div className="flex flex-row gap-4 mr-3 items-center">
        <h5 className="hover:text-blue-l">About me</h5>
        <span>|</span>
        <h5 className="hover:text-blue-l">Projects</h5>
        <span>|</span>
        <h5 className="hover:text-blue-l">Contact</h5>
        <Moon />
        <button
          data-tooltip-target="tooltip-english"
          data-tooltip-trigger="hover"
          data-tooltip-placement="bottom"
          className="font-emoji"
        >
          🇬🇧
        </button>
        <div
          id="tooltip-english"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          English
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-spanish"
          data-tooltip-trigger="hover"
          data-tooltip-placement="bottom"
          className="font-emoji"
        >
          🇪🇸
        </button>
        <div
          id="tooltip-spanish"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Español
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
