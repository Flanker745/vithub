import { useEffect, useState } from "react";
import logo from "../assets/logo/chat.svg";
import dp from "../assets/profile/profile.jpg";

import About from "../component/About";
import Header from "../component/Header";
import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuClock } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaPaperclip } from "react-icons/fa6";
import { TfiGallery } from "react-icons/tfi";
import { IoSend } from "react-icons/io5";

function Home() {
  const [user_profile, setUserProfile] = useState(false);
   const [showChat, setShowChat] = useState(false);

  return (
    <>
      <div className="main w-[100%] box-content h-screen overflow-hidden relative lg:flex ">
        <Header/>


        <div
          className={`dark:bg-chat-bg  dark:border-r-[4px]  dark:border-primary-bg dark:text-primary-text  duration-[400ms] lg:duration-0 z-[9999]  bg-white absolute top-0 ${showChat ? "right-0 "  : "right-[-100%]"} lg:right-0 lg:relative h-screen border-r-2 w-full  lg:w-[74%]`}
        >
          <div className="w-full h-[10%] dark:border-r-[2px] dark:border-primary-bg border-b flex justify-between items-center">
            <div className="flex ml-3 gap-4">
              <div className="flex gap-3 items-center ">
                <div className="text-[20px] hide_chats lg:hidden">
                  <MdKeyboardArrowLeft className="text-3xl" onClick={()=>{setShowChat(false)}} />
                </div>
                <div className="  rounded-[50%] overflow-hidden ">
                  <img
                    className=" w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%]"
                    src={dp}
                    alt=""
                  />
                </div>
              </div>
              <div
                onClick={() => setUserProfile(true)}
                className="sm:text-[17px] hover:cursor-pointer  dark:text-white text-[15px] font-medium flex items-center"
              >
                <h3 className="texttry">Patrick Hendrick</h3>
              </div>
            </div>
            <div className="flex items-center text-[14px] sm:text-[18px] dark:text-primary-text  text-neutral-600 sm:gap-8 gap-5 mr-5 sm:mr-8">
              <div className="">
                <FaPhoneAlt/>
              </div>
              <div className="">
                <FaVideo />
              </div>
              <div className="">
                <BsThreeDots/>
              </div>
            </div>
          </div>
          <div className="h-[80%] w-[98%]  m-auto chat_users overflow-y-scroll">
            <div className="w-full">
              <div className="sm:min-w-[53%] sm:max-w-[70%] min-w-[75%] max-w-[85%] text-white flex gap-4 mt-4">
                <div className="flex  items-end  ">
                  <div className=" rounded-[50%] overflow-hidden min-w-[30px] md:min-w-[50px] h-fit">
                    <img
                      className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-[50%]"
                      src={dp}
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <div className="w-fit  bg-chat_primary rounded-t-[10px] sm:text-[16px] text-[14px] rounded-br-[10px] py-2 sm:py-3 px-2">
                    <h2>
                      please, save this pictures to your file and give it to me
                      after you have done with editing!
                    </h2>
                    <h3 className="flex w-full justify-end items-center gap-2 dark:text-gray-700 text-neutral-300 text-[10px] md:text-[12px]">
                      {" "}
                      <LuClock/>02:05 pm
                    </h3>
                  </div>
                  <div className="text-black dark:text-primary-text h-[40px] sm:text-[16px] text-[14px] items-center flex">
                    <h3>Patrick Hendricks</h3>
                  </div>
                </div>
                <div className="text-neutral-500 dark:text-primary-text ">
                  <BsThreeDotsVertical/>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="sm:min-w-[53%] sm:max-w-[70%] min-w-[75%] max-w-[85%] text-white flex gap-4 mt-4">
                <div className="flex  items-end order-3 ">
                  <div className=" rounded-[50%] overflow-hidden min-w-[30px] md:min-w-[50px] h-fit">
                    <img
                      src={dp}
                      className=" user_dp w-[30px] h-[30px] bg-slate-200 md:w-[50px] md:h-[50px] rounded-[50%]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="w-fit  text-black dark:text-white dark:bg-[#9f7aea] bg-slate-100 rounded-t-[10px] sm:text-[16px] text-[14px] rounded-bl-[10px] py-2 sm:py-3 px-2">
                    <h2>
                      please, save this pictures to your file and give it to me
                      after you have done with editing!
                    </h2>
                    <h3 className="flex w-full justify-end items-center gap-2 dark:text-gray-700 text-neutral-600 text-[10px] md:text-[12px]">
                      {" "}
                      <LuClock/>02:05 pm
                    </h3>
                  </div>
                  <div className="text-black justify-end dark:text-primary-text h-[40px] sm:text-[16px] text-[14px] items-center flex">
                    <h3 className="user_name"></h3>
                  </div>
                </div>
                <div className="text-neutral-500 order-1">
                  <BsThreeDotsVertical/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[10%] dark:border-t-[2px] dark:border-primary-bg border-t-2 flex">
            <form id="chat_form" className="flex h-full w-full" action="">
              <div className="sm:w-[70%] w-[60%] h-full ml-4 lg:ml-2 flex items-center">
                <input
                  autocomplete="off"
                  className="w-full dark:bg-secondary-bg bg-slate-200 px-2 py-2 rounded-[8px] focus:outline-none"
                  type="text"
                  name=""
                  id="msg"
                  placeholder="Enter Message..."
                />
              </div>
              <div className="sm:w-[30%] w-[40%] dark:text-primary-text flex justify-around items-center text-neutral-700">
                <div>
                  <HiOutlineEmojiHappy className="text-xl"/>
                </div>
                <div>
                  <FaPaperclip className="text-xl"/>
                </div>
                <div>
                  <TfiGallery className="text-xl"/>
                </div>
                <div className="h-[45%] text-[25px]  text-white px-4 flex items-center rounded-[10px] bg-chat_primary">
                  <button>
                    <IoSend className="text-[20px]"/>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {user_profile ? <About setUserProfile={setUserProfile} /> : null}
      </div>
    </>
  );
}

export default Home;
