import React from "react";
import dp from "../assets/profile/profile.jpg";
import { FaSearch } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";

function Groups() {
  return (
    <>
      <div className="dark:bg-secondary-bg dark:text-primary-text dark:border-0   h-screen   px-6 border-r-2  bg-slate-100 lg:min-w-[400px] ">
        <div className="w-full  h-[20%] ">
          <div className="text-[22px] pt-6 dark:text-white h-[10%] font-medium flex items-center justify-between">
            <h2>Gropus</h2>
            <div className="text-[20px] dark:text-primary-text">
              <HiUserAdd className="text-3xl" />
            </div>
          </div>
          <div className=" py-3 mt-8 pl-6  rounded-[5px] gap-3 items-center dark:bg-primary-bg bg-slate-200 flex">
            <FaSearch className=" text-xl" />
            <input
              className="w-full dark:text-primary-text  bg-transparent focus:outline-none"
              placeholder="Search users"
              type="text"
            />
          </div>
        </div>
        <div className="w-full    h-[80%]  overflow-y-scroll chat_users">
          <div className="w-[96%] p-3 rounded-[10px] m-auto flex gap-4 mt-3 dark:bg-primary-bg bg-slate-200 items-center">
            <div className="w-[40px] h-[40px]">
              <img
                className="w-[40px] h-[40px] rounded-[50%]"
                src={dp}
                alt=""
              />
            </div>
            <div className="flex text-[16px] dark:text-white font-medium">
              <h4>#General</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Groups;
