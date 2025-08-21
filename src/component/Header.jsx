import React, { useEffect, useState } from "react";
import logo from "../assets/logo/chat.svg";
import { FaUser } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { RiContactsBookFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import dp from "../assets/profile/profile.jpg";
import Profile from "../component/Profile";
import Chats from "../component/Chats";
import Settings from "../component/Settings";
import Groups from "../component/Groups";
import Contact from "../component/Contact";
function Header() {
  const [showLogout, setShowLogout] = useState(false);


 const [showChat, setShowChat] = useState(false);
  const [chatbox, setChatbox] = useState("chats");

  const renderComponent = () => {
    switch (chatbox) {
      case "profile":
        return <Profile />;
      case "chats":
        return <Chats setShowChat={setShowChat} />;
      case "settings":
        return <Settings />;
      case "groups":
        return <Groups />;
      case "contacts":
        return <Contact />;
      //    case "about":
      //     return <About />;
      default:
        return <Chats />;
    }
  };

  // 3. Handler toggles the boolean
  return (
    <>
      <div className=" dark:border-0 dark:bg-primary-bg dark:text-primary-text  text-neutral-600 w-full flex fixed lg:relative py-2 lg:top-0 top-[93%] md:top-[90%] z-[999]   lg:block items-center lg:max-w-[80px] lg:h-full lg:border-r-2">
        <div className="logo_div hidden lg:block mt-3 lg:h-[20%]  lg:w-[60%] m-auto">
          <img className="w-full" src={logo} alt="" />
        </div>
        <div className="nevigation_div flex items-center   w-[90%] lg:block lg:w-full  lg:h-[60%]">
          <div className="profile_div  w-full lg:mb-9 text-center text-[18px] sm:text-[22px] ">
            <button onClick={() => setChatbox("profile")}>
              <FaUser />
            </button>
          </div>
          <div className="profile_div  w-full lg:mb-9 text-center text-[18px] sm:text-[22px] ">
            <button onClick={() => setChatbox("chats")}>
              <FaFacebookMessenger />
            </button>
          </div>
          <div className="profile_div  w-full lg:mb-9 text-center text-[18px] sm:text-[22px] ">
            <button onClick={() => setChatbox("groups")}>
              <HiUserGroup />
            </button>
          </div>
          <div className="profile_div  w-full lg:mb-9 text-center text-[18px] sm:text-[22px] ">
            <button onClick={() => setChatbox("contacts")}>
              <RiContactsBookFill />
            </button>
          </div>
          <div className="profile_div  w-full lg:mb-9 text-center  sm:text-[22px] ">
            <button onClick={() => setChatbox("settings")}>
              <IoMdSettings className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="nevigation_div lg:w-full  lg:h-fit">
          
          <div className="relative">
            <div
              onClick={() => {
                setShowLogout((prev) => !prev);
              }}
              className="profile_div cursor-pointer rounded-[50%] bg-white min-w-[30px] md:min-w-[50px]  lg:w-[50%] m-auto  "
            >
              <img
                className=" w-[30px] user_dp bg-slate-200 h-[30px] md:w-[50px] md:h-[50px] rounded-[50%]"
                src={dp}
                alt=""
              />
            </div>
            <div
              className={`${
                showLogout ? "block" : "hidden"
              } w-[150px] dark:bg-primary-bg rounded-[10px] absolute  bg-slate-200 px-3 py-3 z-[9999999] right-[10%] lg:left-[30%] top-[-200%] lg:top-[-100%] bg-slate`}
            >
              <div
                onclick="logout()"
                className="flex justify-between hover:cursor-pointer  items-center"
              >
                <h2>Logout</h2>
                <FaPowerOff />
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderComponent()}
    </>
  );
}

export default Header;
