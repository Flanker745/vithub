import React from "react";
import dp from "../assets/profile/profile.jpg";
import { FaSearch } from "react-icons/fa";

function Chats({ setShowChat }) {
  return (
    <>
      <div className="dark:bg-secondary-bg dark:text-primary-text dark:border-0   h-screen     px-6 border-r-2  bg-slate-100 lg:min-w-[400px] ">
        <div className="text-[25px] dark:text-white h-[10%] font-bold flex items-center ">
          <h2>Chats</h2>
        </div>
        <div className=" h-[8%] lg:h-[6%] pl-6  rounded-[5px] gap-3 items-center dark:bg-primary-bg bg-slate-200 flex">
          <FaSearch className=" text-xl" />

          <input
            className="w-full   bg-transparent focus:outline-none"
            placeholder="Search users"
            type="text"
          />
        </div>
        <div
          onClick={() => {
            setShowChat(true);
          }}
          className=" h-[84%]"
        >
          <div
            id="chat_friend"
            className="chat_users pt-9 h-[90%] overflow-y-scroll"
          >
            <div
              onclick="show_personal_chat(this)"
              className=" mb-3 text-black dark:bg-primary-bg bg-slate-200  rounded-[10px] px-2 py-3 flex  gap-3"
            >
              <div className="min-w-[50px] h-fit ">
                <img
                  className=" w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50%]"
                  src={dp}
                  alt=""
                />
              </div>
              <div className="w-[80%]">
                <h3 className="font-medium dark:text-white sm:text-[16px] text-[14px]">
                  Aniluri
                </h3>
                <h4 className="sm:text-[14px] dark:text-primary-text text-[12px] text-neutral-600 ">
                  please, save this pictures
                </h4>
              </div>
              <div className="min-w-[18%] text-end dark:text-primary-text text-[12px]">
                <h3>02:05 pm </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chats;
