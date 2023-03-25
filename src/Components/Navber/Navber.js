import React from "react";
import new_tyt_logo_kinda_yellow from "../../assets/new_tyt_logo_kinda_yellow.png";
const Navber = () => {
  return (
    <div>
      <header class="lg:py-12 bg-yellow-50 shadow-sm ">
        <div class="mx-auto border-0 flex h-16 max-w-screen-xl items-center justify-between px-4">
          <div class="flex w-0 flex-1 lg:hidden">
            <img className="h-8 max-w-md" src={new_tyt_logo_kinda_yellow} alt="" />
          </div>

          <div class="lg:flex  items-center gap-4 hidden cursor-pointer">
            <div>
              <img className="h-16 w-full" src={new_tyt_logo_kinda_yellow} alt="" />
              <h1 className="text-sm text-start text-yellow-500">
                Because yellow is the happiest color.
              </h1>
            </div>
          </div>

          <div class="flex w-0 flex-1 justify-end items-center lg:hidden">
            <div className="py-16 ">
              <a
                href="#"
                class="rounded-sm  hover:text-yellow-300 uppercase text-sm font-bold text-gray-500"
              >
                Log in
              </a>
            </div>
            <div className="py-2">
              <a
                href="#"
                class="rounded-sm  px-4  hover:text-yellow-300 uppercase text-sm font-bold text-gray-500"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className=" pb-1"></div>

          <nav
            aria-label="Site Nav"
            class="hidden items-center pt-4 justify-center gap-8 uppercase text-sm font-bold lg:flex lg:w-0 lg:flex-1 "
          >
            <a class="text-gray-500 hover:text-yellow-300 " href="">
              Therapists
            </a>
            <a class="text-gray-500 hover:text-yellow-300 " href="">
              TYTFS
            </a>
            <a class="text-gray-500 hover:text-yellow-300 " href="">
              About TYT
            </a>
            <a class="text-gray-500 hover:text-yellow-300 " href="">
              Contact
            </a>
          </nav>

          <div class="hidden items-center lg:flex">
            <div className="py-16 ">
              <a
                href="#"
                class="rounded-sm  hover:text-yellow-300 uppercase text-sm font-bold text-gray-500"
              >
                Log in
              </a>
            </div>
            <div className="py-16 ">
              <a
                href="#"
                class="rounded-sm  px-12  hover:text-yellow-300 uppercase text-sm font-bold text-gray-500"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div class=" lg:hidden">
          <nav class="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
            <a class="text-gray-500 pl-4 hover:text-yellow-300 " href="">
              Therapists
            </a>
            <a class="text-gray-500 pl-4 hover:text-yellow-300 " href="">
              TYTFS
            </a>
            <a class="text-gray-500 pl-4 hover:text-yellow-300 " href="">
              About TYT
            </a>
            <a class="text-gray-500 pl-4 hover:text-yellow-300 " href="">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navber;
