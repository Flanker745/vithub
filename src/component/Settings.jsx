import React, { useEffect, useState } from "react";
import dp from "../assets/profile/profile.jpg";
import { FaRegMoon } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaMoon, FaSun } from "react-icons/fa";

function Settings() {
  const [openSection, setOpenSection] = useState("personal");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 2. Effect: Update root class and localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <>
      <div className="dark:bg-secondary-bg dark:text-primary-text dark:border-0   relative h-screen  px-6 border-r-2  bg-slate-100 lg:min-w-[400px] lg:max-w-[400px]">
        <div className="w-full min-h-[30%] max-h-[40%]">
          <div className="text-[22px] pt-3 dark:text-white h-[10%] font-medium flex items-center justify-between">
              <h2>Settings</h2>

              <div className="text-center text-[22px] ">
                <button onClick={() => setDarkMode(!darkMode)}>
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="hidden"
                      checked={darkMode}
                      onChange={handleToggle}
                    />
                    <label
                      htmlFor="checkbox"
                      className="bg-gray-800 w-14 h-6 mb-[3px] rounded-full relative p-1 cursor-pointer flex items-center justify-between transition-colors duration-300 ease-in-out"
                    >
                      <FaMoon className="text-yellow-400" />
                      <FaSun className="text-yellow-500" />
                      <span
                        className="bg-white w-8 h-8 absolute left-1 rounded-full transition-transform duration-200"
                        style={{
                          transform: darkMode
                            ? "translateX(28px)"
                            : "translateX(-5px)",
                        }}
                      />
                    </label>
                  </div>
                </button>
              </div>
          </div>
          <div className="w-full flex items-center relative justify-center sm:mt-7">
            <div className="w-[90px] h-[90px]">
              <img
                src={dp}
                className="w-[90px] h-[90px] user_dp bg-slate-200 rounded-[50%]"
                alt=""
              />
            </div>
            <div
              onclick="edit_profile_pic()"
              className="absolute  bg-slate-200 rounded-[50%] items-center dark:bg-primary-bg dark:text-white hover:cursor-pointer px-2 py-1 top-[60%] left-[53%] text-[18px]"
            >
              <FaPen />
              <form
                id="profile_pic_form"
                method="POST"
                enctype="multipart/form-data"
              >
                <input
                  id="profile_pic_input"
                  className="hidden"
                  type="file"
                  name="dp"
                />
              </form>
            </div>
          </div>
          <div className="w-full text-center mt-4 text-[18px] font-medium">
            <h3 className="user_name">Flanker</h3>
          </div>
        </div>
        <div className="w-full max-h-[55%]   overflow-y-scroll chat_users">
          <div className="w-[95%] sm:w-[90%] mt-2 m-auto">
            <p id="user_bio" className="user_bio text-center"></p>
            <div className="flex justify-end">
              <div
                id="edit_bio"
                className="w-fit px-2 py-1 flex gap-2  dark:bg-primary-bg rounded-[8px] dark:text-white bg-slate-200"
              >
                {" "}
                Edit
                <FaPen className="py-1 text-sm" />
              </div>
            </div>
          </div>
          <div className="w-[90%] m-auto mt-7  border dark:border-[2px] py-7 dark:border-primary-bg  rounded-[8px]">
            <div className="w-[90%] m-auto border dark:border-[2px] dark:border-primary-bg rounded-[8px]">
              <div
                onClick={() => toggleSection("personal")}
                className="flex items-center gap-3 cursor-pointer dark:bg-primary-bg bg-slate-100 py-3 px-2"
              >
                <FaRegUser />
                <h3 className="text-[16px] w-[90%] flex items-center justify-between font-medium">
                  Personal details
                  {openSection == "personal" ? (
                    <FaAngleUp className="text-[14px] " />
                  ) : (
                    <FaAngleDown className="text-[14px] " />
                  )}
                </h3>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden px-4 ${
                  openSection === "personal"
                    ? "max-h-[1000px] opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                <div className="w-full mt-3">
                  <h2 className="text-neutral-500 dark:text-white flex justify-between">
                    Name
                    <div className="border flex gap-2 bg-slate-200 items-center dark:bg-primary-bg px-3 w-fit dark:border-[2px] dark:border-primary-bg text-black dark:text-white py-1 rounded-[5px]">
                      Edit
                      <FaPen className=" text-sm" />
                    </div>
                  </h2>
                  <div className="flex justify-between items-center">
                    <h3 id="user_name" className="user_name"></h3>
                  </div>
                </div>

                <div className="w-full mt-3">
                  <h2 className="text-neutral-500 dark:text-white">Email</h2>
                  <div className="flex justify-between items-center">
                    <h3 id="user_email" className="user_email"></h3>
                  </div>
                </div>

                <div className="w-full mt-6">
                  <h2 className="text-neutral-500 dark:text-white">Location</h2>
                  <div className="flex justify-between items-center">
                    <h3 id="user_location" className="user_location"></h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="w-[90%] m-auto mt-2 border dark:border-[2px] dark:border-primary-bg rounded-[8px]">
              <div
                onClick={() => toggleSection("help")}
                className="flex  items-center gap-3 cursor-pointer dark:bg-primary-bg bg-slate-100 py-3 px-2"
              >
                <FaRegUser />
                <h3 className="text-[14px] w-[90%] flex items-center justify-between font-medium">
                  Help
                  {openSection == "help" ? (
                    <FaAngleUp className="text-[14px] " />
                  ) : (
                    <FaAngleDown className="text-[14px] " />
                  )}
                </h3>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden px-4 ${
                  openSection === "help"
                    ? "max-h-[1000px] opacity-100 py-4"
                    : "max-h-0 opacity-0 py-0"
                }`}
              >
                <div className="w-full mt-3">
                  <h2 className="text-neutral-500 dark:text-white">FAQs</h2>
                </div>
                <div className="w-full mt-3">
                  <h2 className="text-neutral-500 dark:text-white">Contact</h2>
                </div>
                <div className="w-full mb-3 mt-3">
                  <h2 className="text-neutral-500 dark:text-white">
                    Terms & Privacy policy
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
