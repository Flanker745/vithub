import React, { useState } from "react";
import dp from "../assets/profile/profile.jpg";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

function About({ setUserProfile }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" dark:bg-secondary-bg  dark:border-r-[4px] dark:border-primary-bg dark:text-primary-text user_chat_div2  w-full absolute lg:relative top-0 z-[9999] bg-white lg:w-[400px] right-0 h-screen">
        <div className="w-full min-h-[30%]">
          <div className="w-[90%] m-auto pt-3 flex b justify-end text-[25px]  font-medium">
            <button>
              {" "}
              <IoClose className="" onClick={() => setUserProfile(false)} />
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[90px] h-[90px] mt-8">
              <img
                className="w-[90px] h-[90px]   rounded-[50%]"
                src={dp}
                alt=""
              />
            </div>
          </div>
          <div className="w-full mt-4 pb-7 border-b dark:border-r+b-[2px] dark:border-primary-bg">
            <h3 className="w-full dark:text-white text-center text-[18px] font-medium">
              Patrick Hendricks
            </h3>
          </div>
        </div>
        <div className="w-full max-h-[45%] lg:max-h-[60%]  overflow-y-scroll chat_users">
          <div className="w-[90%] mt-9 m-auto">
            <p>
              "If several languages coalesce, the grammar of the resulting
              language is more simple and regular than that of the individual."
            </p>
          </div>
          <div className="w-[90%] m-auto mt-7 border dark:border-[2px] dark:border-primary-bg rounded-[8px]">
            {/* Toggle Header */}
            <div
              id="show_hide_about"
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 dark:bg-primary-bg bg-slate-100 py-3 px-2 cursor-pointer"
            >
              <FaRegUser />

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

            {/* Toggle Content */}
            <div
              className={`w-full about_toggle px-4 transition-all duration-300 ease-in-out overflow-hidden ${
                open ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
            >
              <div className="w-full mt-3">
                <h2 className="text-neutral-500 dark:text-white">Name</h2>
                <h3>Patrick Hendricks</h3>
              </div>
              <div className="w-full mt-3">
                <h2 className="text-neutral-500 dark:text-white">Email</h2>
                <h3>PatrickHendricksgmail.com</h3>
              </div>
              <div className="w-full mb-3 mt-3">
                <h2 className="text-neutral-500 dark:text-white">Location</h2>
                <h3>California, USA</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
