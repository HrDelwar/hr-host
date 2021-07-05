import React from "react";
import logo from "../../images/logo.png";
const Navbar = ({
  toggleMenu,
  setToggleMenu,
 
}) => {
  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between container mx-auto px-4 py-2 z-10 relative">
      <div
        className={
          "text-center  sm:hidden  lg:block w-24 mb-5 lg:mb-0 mx-auto lg:mx-0" +
          (toggleMenu ? " block" : " hidden")
        }
      >
        <a href="/" className="text-center">
          {" "}
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul
        className={
          " md:flex uppercase text-center " + (toggleMenu ? "block" : "hidden")
        }
      >
        <li
          className="hover:underline   md:mr-16"
          onClick={() => setToggleMenu(false)}
        >
          <a href="#home" className="">
            Home
          </a>
        </li>
        <li
          className="hover:underline   md:mr-16"
          onClick={() => setToggleMenu(false)}
        >
          <a href="#hosting">hosting</a>
        </li>
        <li
          className="hover:underline   md:mr-16"
          onClick={() => setToggleMenu(false)}
        >
          <a href="#services">services</a>
        </li>
        <li
          className="hover:underline   md:mr-16"
          onClick={() => setToggleMenu(false)}
        >
          <a href="#pricing">pricing</a>
        </li>
        <li className="hover:underline  " onClick={() => setToggleMenu(false)}>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
