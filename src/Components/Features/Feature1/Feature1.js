import React from "react";
import "../Feature.css";
import { GoLocation } from "react-icons/go";
import { BsMailbox2 } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";

const Feature1 = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 bg">
        <div className="bg-yellow-100 opacity-70  py-12  px-8 text-center lg:border-r-2 border-x-gray-500">
          <div className="my-6">
            <h1 className="px-4 text-2xl uppercase">OUR </h1>
            <h1 className="px-4 text-4xl uppercase font-bold">CONTACTS</h1>
          </div>
          <h2 className="px-4 lg:mx-14 py-2 border-b-2 border-black flex items-center gap-2 justify-center">
            <GoLocation></GoLocation>
            264, Chorsolakia, Kishoreganj
          </h2>
          <h2 className="px-4 lg:mx-14 my-4 py-2 border-b-2 border-black flex items-center gap-2 justify-center">
            <TbPhoneCall></TbPhoneCall>
            To call directly +8801845769869
          </h2>
          <h2 className="px-4 lg:mx-14 my-4 py-2 border-b-2 border-black flex items-center gap-2 justify-center">
            <BsMailbox2></BsMailbox2>
            contact@theyellowtherapist.com
            <br />
            operations@theyellowtherapist.com
            <br />
            support@theyellowtherapist.com
            <br />
            legal@theyellowtherapist.com
          </h2>
        </div>
        <div className="bg-yellow-100  opacity-60 py-12  px-8 text-center lg:border-r-2 border-x-gray-500">
          <div className="lg:my-6 lg:mb-16">
            <h1 className="px-4 text-2xl uppercase ">MAKE AN</h1>
            <h1 className="px-4 text-4xl uppercase font-bold">APPOINTMENT</h1>
          </div>
          <div className="  my-4 py-2  flex items-center gap-2 justify-center">
            <div className="flex flex-col">
              <input
                id="email"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-yellow-700 dark:focus:border-yellow-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col ">
              <input
                id="email"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-yellow-700 dark:focus:border-yellow-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="  my-4 py-2  flex items-center gap-2 justify-center">
            <div className="flex flex-col">
              <input
                id="email"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-yellow-700 dark:focus:border-yellow-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-col ">
              <input
                id="time"
                type="time"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-yellow-700 dark:focus:border-yellow-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                placeholder="Time"
              />
            </div>
          </div>
          <div className="  my-4 py-2  flex items-center gap-2 justify-center">
            <a
              class="group relative inline-flex items-center overflow-hidden rounded border border-yellow-400 px-8 py-3 text-gray-700 focus:outline-none focus:ring active:text-yellow-500"
              href="/download"
            >
              <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span class="text-sm font-medium transition-all group-hover:mr-4">
                MAKE AN APPOINTMENT
              </span>
            </a>
          </div>
        </div>
        <div className="bg-yellow-100  opacity-50 py-12  px-8 text-center">
          <div className="lg:my-6 lg:mb-16">
            <h1 className="px-4 text-2xl uppercase ">OPENING</h1>
            <h1 className="px-4 text-4xl uppercase font-bold">HOURS</h1>
          </div>
          <h2 className="px-4 lg:mx-14  my-4 py-2 border-b-2 border-black flex items-center gap-2 justify-between">
            Monday – Friday <span>9.00 – 18.00</span>
          </h2>
          <h2 className="px-4 lg:mx-14 my-4 py-2 border-b-2 border-black flex items-center gap-2 justify-between">
            Saturday <span>9.30 – 18.30</span>
          </h2>
          <h2 className="px-4 lg:mx-14 my-4 py-2 border-b-2 border-black flex items-center gap-2 justify-between">
            Sunday <span>Closed</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
