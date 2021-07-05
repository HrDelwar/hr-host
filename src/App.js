import "./App.css";
import Header from "./components/Header/Header";
import "animate.css/animate.css";
import ChatBot from "./components/Chatbot/ChatBot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  const [isOpenChatbot, setIsOpenChatbot] = useState(false);

  return (
    <>
      <Header
        isOpenChatbot={isOpenChatbot}
        setIsOpenChatbot={setIsOpenChatbot}
      />
      <main>
        <div className="z-full fixed bottom-1 md:bottom-6 right-1 md:right-6">
          <div className="relative bottom-0 right-0">
            {isOpenChatbot && (
              <ChatBot className="absolute bottom-18 right-0 md:right-full overflow-auto lg:overflow-none" />
            )}
            <div
              className=" cursor-pointer z-full -ml-4 bg-chat shadow-chatbot text-3xl justify-center items-center text-white leading-7 w-18 h-18 flex rounded-full animate__animated animate__fadeIn "
              onClick={() => setIsOpenChatbot(!isOpenChatbot)}
            >
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
