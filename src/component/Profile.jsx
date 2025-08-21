import React, { useState } from "react";
import dp from "../assets/profile/profile.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
function Profile() {
  const [aboutOpen, setAboutOpen] = useState(true);

  return (
    <>
      <div className="dark:bg-secondary-bg dark:text-primary-text dark:border-0    h-screen  px-6 border-r-2  bg-slate-100 lg:min-w-[400px] lg:max-w-[400px]">
        <div className="w-full max-h-[40%]">
          <div className="text-[22px] pt-3 dark:text-white h-[10%] font-medium flex items-center justify-between">
            <h2>My profile</h2>
            <div className="text-[20px] dark:text-primary-text">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-7">
            <div className="w-[90px] h-[90px]">
              <img
                className="w-[90px] h-[90px] bg-slate-200 user_dp rounded-[50%]"
                src={dp}
                alt=""
              />
            </div>
          </div>
          <div className="w-full text-center mt-4 text-[18px] font-medium">
            <h3 className="user_name"></h3>
          </div>
        </div>
        <div className="w-full max-h-[55%]   overflow-y-scroll chat_users">
          <div className="w-[95%] sm:w-[90%] mt-2 m-auto">
            <p className="user_bio text-center"></p>
          </div>
          <div className="w-[90%] m-auto mt-7 border dark:border-[2px] dark:border-primary-bg rounded-[8px]">
            {/* Header toggle */}
            <div
              id="show_hide_user_about"
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex  items-center gap-3 dark:bg-primary-bg bg-slate-100 py-3 px-2 cursor-pointer"
            >
              <h3 className="text-[14px] w-[90%] flex items-center justify-between font-medium">
                About{" "}
                {
                                 open ? (
                                   <FaAngleUp className="text-[14px] text-neutral-500" />
                                 ) : (
                                   <FaAngleDown className="text-[14px] text-neutral-500" />
                                 )
                               }
              </h3>
            </div>

            {/* Toggleable Content */}
            <div
              className={`w-full about_user_toggle px-4 transition-all duration-500 ease-in-out overflow-hidden ${
                aboutOpen
                  ? "max-h-[500px] opacity-100 py-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="w-full mt-3">
                <h2 className="text-neutral-500 dark:text-white">Name</h2>
                <h3 className="user_name">Patrick Hendricks</h3>
              </div>
              <div className="w-full mt-3">
                <h2 className="text-neutral-500 dark:text-white">Email</h2>
                <h3 className="user_email">patrick@example.com</h3>
              </div>
              <div className="w-full mb-3 mt-3">
                <h2 className="text-neutral-500 dark:text-white">Location</h2>
                <h3 className="user_location">California, USA</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
