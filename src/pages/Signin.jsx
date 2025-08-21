import React from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Signin() {
  return (
    <>
      <div className="main w-full h-screen dark:bg-secondary-bg dark:text-primary-text bg-slate-100 flex items-center justify-center">
        <div className=" py-3 w-fit ">
          <div className="w-full flex justify-center  items-center  gap-3">
            <div className="w-[6%]">
              <img className="w-full" src="img/chat.svg" alt="" />
            </div>
            <div className="text-[22px] font-medium ">Chating</div>
          </div>
          <div className="w-full mt-3  m-auto">
            <h3 className="text-center text-[22px]">Sign in</h3>
          </div>
          <div className="w-full mt-1  m-auto">
            <h3 className="text-center text-neutral-600">
              Sign in to continue chating
            </h3>
          </div>
          <form
            id="signin_form"
            className="dark:bg-primary-bg bg-slate-100 dark:text-primary-text mt-3 rounded-[10px] px-3 py-6"
            action=""
            method="POST"
          >
            <h3
              id="form_validate"
              className="text-center text-red-500 font-medium"
            ></h3>

            <div className="  mt-6  text-neutral-500 ">
              <div className="flex">
                <div className=" flex items-center bg-slate-200 px-3">
                <FaRegUser />
              </div>
              <input
                className="border  focus:outline-none w-full pl-3"
                type="mail"
                id="email"
                name=""
                placeholder="E-mail"
              />
              </div>
              <div className="flex mt-6 border text-neutral-500 ">
                <div className="p-2 bg-slate-200 px-3">
                  <RiLockPasswordFill className="flex items-center" />
                </div>
                <input
                  className="border focus:outline-none w-full pl-3"
                  type="password"
                  id="pass"
                  name=""
                  placeholder="Password"
                />
              </div>
            </div>
            <button className="w-full mt-6 block text-center bg-sky-400 py-1 rounded-[8px] text-white text-[20px] font-medium">
              Sign in
            </button>
          </form>
          <div className="w-[90%] m-auto">
            <h3>
              Don't have an account ?{" "}
              <a className="text-sky-400" href="register.php">
                Signup now
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
