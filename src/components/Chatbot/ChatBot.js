import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faCircle, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ChatBot = ({ className }) => {
  const [lowZIndex, setLowZIndex] = useState(false);

  setTimeout(() => setLowZIndex(true), 4700);

  return (
    <div
      className={
        " bg-white z-full sm:w-98 text-white w-80 rounded-2xl font-ds-sans h-100 sm:h-101 md:h-105 lg:h-auto " +
        className
      }
    >
      <div className="bg-chat w-full rounded-t-2xl p-12 pt-6 h-68 custom__animated animate__fadeIn animate__delay-6s">
        <div className="text relative animate__animated animate__fadeIn animate__delay-2s z-full">
          <h2 className="uppercase text-white text-3xl my-2 font-bold ">iris</h2>
          <h5 className="text-xl leading-10 inline-block">Hello</h5>
          <span className="ml-4 text-xl leading-10"> 👋</span>
          <p className="text-lg leading-6 w-56">
            I am Iris, a Virtual Assistant How may I help you?
          </p>
          <div className="mt-4 relative z-full -ml-4 bg-chat shadow-chatbot text-3xl justify-center items-center text-white leading-7 w-18 h-18 flex rounded-full">
            <FontAwesomeIcon icon={faRobot} className="-mt-1  text-white" />
          </div>
        </div>
      </div>
      <div
        className={
          "bg-white border text-default relative p-4  overflow-auto border-light-gray mb-8  h-97 mx-2 -mt-16 rounded-lg animate__animated animate__fadeIn animate__delay-4s" +
          (lowZIndex ? " z-50" : " z-full")
        }
      >
        <p className="mt-6 mb-4 text-sm font-bold">
          Frequently Asked Questions
          <span className="ml-1 font-bold text-xl leading-5 text-faq">?</span>
        </p>
        <div className="flex mt-2 items-center border  py-3 p-1  border-light-gray rounded-lg animate__animated animate__fadeIn animate__delay-6s">
          <FontAwesomeIcon icon={faCircle} className="w-2 h-2 text-faq ml-1" />
          <span className="text-xs leading-5 ml-2 ">
            Can I redeem my FB before the original term?
          </span>
        </div>
        <div className="flex mt-2 items-center border  py-3 p-1  border-light-gray rounded-lg animate__animated animate__fadeIn animate__delay-8s">
          <FontAwesomeIcon icon={faCircle} className="w-2 h-2 text-faq ml-1" />
          <span className="text-xs leading-5 ml-2 ">
            How do I pay my Credit card bill?
          </span>
        </div>
        <div className="flex mt-2 items-center border py-3  p-1  border-light-gray rounded-lg animate__animated animate__fadeIn animate__delay-10s">
          <FontAwesomeIcon icon={faCircle} className="w-2 h-2 text-faq ml-1" />
          <span className="text-xs leading-5 ml-2 ">
            How can I get my Account Statement?
          </span>
        </div>
        <div className="flex mt-2 items-center border py-3  p-1  border-light-gray rounded-lg animate__animated animate__fadeIn animate__delay-12s">
          <FontAwesomeIcon icon={faCircle} className="w-2 h-2 text-faq ml-1" />
          <span className="text-xs leading-5 ml-2 ">
            What is the tenure of Fixed Deposit?
          </span>
        </div>
        <button className="focus:outline-none flex mt-10 items-center justify-center shadow-btn mx-auto border py-3 px-8  border-light-gray rounded-3xl animate__animated animate__fadeIn animate__delay-14s">
          <FontAwesomeIcon icon={faComments} />
          <span className="ml-2 text-sm font-bold">
            Start a New Conversation
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
