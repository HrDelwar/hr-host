import React, { useState } from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = ({isOpenChatbot, setIsOpenChatbot}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header id="home"
      className="bg-top-banner  bg-no-repeat bg-cover relative before:empty-content before:bg-gradient-banner  before:absolute before:inset-0 before:opacity-90  before:bg-secondary"
      style={{ height: 850 }}
    >
      <TopHeader toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} isOpenChatbot={isOpenChatbot} setIsOpenChatbot={setIsOpenChatbot}/>
      <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}  />
    </header>
  );
};

export default Header;
