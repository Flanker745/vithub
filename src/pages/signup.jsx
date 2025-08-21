import React from "react";
import logo from "../assets/logo/chat.svg"
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
function signup() {
  return (
    <>
      <div className="main w-full h-screen dark:bg-secondary-bg dark:text-primary-text  bg-slate-100 flex items-center justify-center">
        <div className=" py-3 w-fit ">
          <div className="w-full flex justify-center  items-center  gap-3">
            <div className="w-[6%]">
              <img className="w-full" src={logo} alt="" />
            </div>
            <div className="text-[22px] font-medium ">Chating</div>
          </div>
          <div className="w-full mt-3  m-auto">
            <h3 className="text-center text-[22px]">Register</h3>
          </div>
          <div className="w-full mt-1  m-auto">
            <h3 className="text-center text-neutral-600">
              {" "}
              Get your chating account know
            </h3>
          </div>
          <form
            id="register_form"
            className="dark:bg-primary-bg dark:text-primary-text mt-3 rounded-[10px] px-3 py-6"
            action=""
            method="POST"
          >
            <h3
              id="form_validate"
              className="text-center text-red-500 font-medium"
            ></h3>
            <label className="text-[17px] font-medium text-neutral-500" for="email">
              Email <span id="email_validate" className="text-red-500"></span>
            </label>
            <div className="flex mt-1 border text-neutral-500 ">
              <div className="p-2 bg-slate-200 px-3">
                <CiMail className="text-[20px]"/>
              </div>
              <input
                className="border focus:outline-none w-full pl-3"
                type="text"
                id="email"
                name=""
                placeholder="Email"
              />
            </div>
            <label
              className="text-[17px] font-medium text-neutral-500 block mt-4"
              for="username"
            >
              Username <span id="username_validate" className="text-red-500"></span>
            </label>
            <div className="flex mt-1 border text-neutral-500 ">
              <div className="p-2 bg-slate-200 px-3">
                <FaRegUser className="text-[18px]"/>
              </div>
              <input
                className="border focus:outline-none w-full pl-3"
                type="text"
                id="username"
                name=""
                placeholder="Username"
              />
            </div>
            <label
              className="text-[17px] font-medium text-neutral-500 block mt-4"
              for="pass"
            >
              Passowrd{" "}
            </label>
            <span
              id="pass_validate"
              className="text-red-500 text-[10px] w-[100px]"
            ></span>
            <div className="flex mt-1 border text-neutral-500 ">
              <div className="p-2 bg-slate-200 px-3">
                <RiLockPasswordFill className="text-[20px]"/>
              </div>
              <input
                className="border focus:outline-none w-full pl-3"
                type="password"
                id="pass"
                name=""
                placeholder="Password"
              />
            </div>
            <label
              className="text-[17px] font-medium text-neutral-500 block mt-4"
              for="pass"
            >
              Confirm Passowrd{" "}
              <span
                id="pass_confirm"
                className="text-red-500 text-[13px] w-[100px]"
              ></span>
            </label>
            <div className="flex mt-1 border text-neutral-500 ">
              <div className="p-2 bg-slate-200 px-3">
                <RiLockPasswordFill className="text-[20px]"/>
              </div>
              <input
                className="border focus:outline-none w-full pl-3"
                type="password"
                id="confirm_pass"
                name=""
                placeholder="Confirm Password"
              />
            </div>
            <button className="w-full mt-6 block text-center bg-sky-400 py-1 rounded-[8px] text-white text-[20px] font-medium">
              Register
            </button>
          </form>
          <div className="w-[90%] m-auto">
            <h3>
              Already have an account ?{" "}
              <a className="text-sky-400" href="index.php">
                Signin now
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default signup;
