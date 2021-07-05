import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconButton } from "@material-ui/core";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.png";

const TopHeader = ({
  toggleMenu,
  setToggleMenu,
  isOpenChatbot,
  setIsOpenChatbot,
}) => {
  return (
    <div className="flex container mx-auto px-4 py-2 justify-center items-center">
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="focus:outline-none sm:mr-5  relative z-10 block md:hidden"
      >
        <FontAwesomeIcon className="text-white" icon={faBars} />
      </button>
      <div className="flex items-center justify-center text-white">
        <div className="md:mr-2 lg:mr-16  flex items-center justify-center">
          <Button
            className="focus:outline-none text-green-50 p-0"
            size="small"
            onClick={() => setIsOpenChatbot(!isOpenChatbot)}
          >
            <FontAwesomeIcon
              icon={faCommentDots}
              className="sm:mr-2 md:mr-6 text-xl"
            />
            <span className="hidden sm:block">Live Chat</span>
          </Button>
        </div>
        <div className="md:mr-2 lg:mr-16 flex items-center justify-center">
          <a href="tel:+8801749269594">
            <Button
              className="focus:outline-none text-green-50 p-0"
              size="small"
            >
              <PhoneIcon className="md:mr-6" />
              <span className="hidden md:block">+8801749269594</span>
            </Button>
          </a>
        </div>
        <div className="md:mr-2 lg:mr-0 flex items-center justify-center">
          <a href="mailto:hrdelwar75@gmail.com">
            <Button
              className="focus:outline-none text-green-50 p-0"
              size="small"
            >
              <EmailIcon className=" md:mr-6" />
              <span className="hidden lg:block">hrdelwar75@gmail.com</span>
            </Button>
          </a>
        </div>
        <div className="relative ml-auto z-10 hidden sm:block lg:hidden text-center w-24 lg:mx-0">
          <a href="/" className="text-center">
            {" "}
            <img src={logo} className="w-full" alt="logo" />
          </a>
        </div>
      </div>
      <div className="ml-2 lg:ml-auto flex items-center ">
        <IconButton className="focus:outline-none md:mr-4" size="small">
          <ShoppingCartIcon className="bg-blue-500 rounded-full text-white p-1 md:p-2 text-4xl" />
        </IconButton>
        <IconButton className="focus:outline-none" size="small">
          <PersonIcon className="bg-white rounded-full md:p-2 p-1 text-4xl" />
        </IconButton>
      </div>
    </div>
  );
};

export default TopHeader;
