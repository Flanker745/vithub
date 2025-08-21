import React from "react";
import { HiUserAdd } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="dark:bg-secondary-bg dark:text-primary-text dark:border-0   h-screen   px-6 border-r-2  bg-slate-100 lg:min-w-[400px] ">
        <div className="w-full  h-[20%] ">
          <div className="text-[22px] pt-6 dark:text-white h-[10%] font-medium flex items-center justify-between">
            <h2>Contact</h2>
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
        <div
          id="user_contact_list"
          className="w-full    h-[80%]  overflow-y-scroll chat_users"
        ></div>
      </div>
      <div
        id="add_new_contact_main_div"
        className="absolute w-full h-screen top-[-100vh] bg-[rgba(0,0,0,0.5)]  z-[99999999] right-0"
      >
        <div
          id="add_new_contact_div"
          className="w-full h-full duration-500 absolute top-[-10%]  flex items-center justify-center "
        >
          <div className="lg:w-[35%] sm:w-[70%] w-[90%] bg-white h-[50%] rounded-[10px]">
            <h2 className="w-[95%] m-auto text-[22px] text-neutral-600 font-medium mt-3">
              Add Contact
            </h2>
            <form id="add_new_contact_form" className="mt-5" action="">
              <span
                id="add_new_contact_validation"
                className="block absolute left-[50%] text-center text-red-500"
              ></span>
              <label
                className="block  w-[90%] m-auto font-medium text-neutral-500"
                for="mail"
              >
                E-mail
              </label>
              <input
                id="add_contact_email"
                className="w-[90%] m-auto block border-slate-300 mt-3 border-2 focus:outline-none  rounded-[5px] px-2 py-1"
                autocomplete="off"
                type="mail"
                placeholder="Enter email"
              />
              <label
                className="block w-[90%] mt-4 m-auto font-medium text-neutral-500"
                for="mail"
              >
                Invatation Message
              </label>
              <textarea
                name=""
                id="add_contact_message"
                className="w-[90%] m-auto block border-slate-300 mt-2 border-2 focus:outline-none r rounded-[5px] px-2 py-1"
                placeholder="Enter Messages..."
                rows="3"
              ></textarea>
              <div className="w-[90%] flex justify-end mt-5 gap-3">
                <span
                  id="rm_add_new_contact_main_div"
                  className="w-fit px-4 hover:cursor-pointer py-1 text-neutral-600 bg-slate-200 text-[18px] border rounded-[5px]"
                >
                  Close
                </span>
                <button className="w-fit px-3 py-1 text-neutral-600  text-[18px] bg-indigo-500 border rounded-[5px]">
                  Invite Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
