import React from "react";
import "../Features/Feature.css";
const Subscribe = () => {
  return (
    <div className="bg">
      <div className="bg-yellow-100  opacity-70 text-center lg:border-r-2 border-x-gray-500  lg:mx-0 px-4 py-8 md:py-32 grid place-content-center ">
        <div className="lg:flex items-center justify-start lg:gap-28">
          <div className="w-full text-start">
            <p className=" text-xl text-yellow-500 lg:text-5xl">------</p>
            <h1 className="font-bold  text-black">SUBSCRIBE WELCOME NOTE</h1>
            <p className="pt-8 text-5xl md:pt-4 text-gray-800">
              Make An Appointment For Get Motivation
            </p>

            <p className="pt-4 text-xs text-gray-900">
              Read our <u className="cursor-pointer no-underline hover:underline">privacy policy</u>
            </p>
          </div>
          <div className="pt-8 lg:pt-0 w-full">
            <div className="mt-8 md:flex justify-start md:gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="placeholder-gray-900 w-full md:w-1/2 p-4 grid place-items-center border rounded-md focus:outline-none"
              />
              <a
                href="https://theyellowtherapist.com/"
                class="block w-full rounded-xl bg-yellow-400 px-12 py-5 my-1 text-sm uppercase font-medium text-black shadow hover:bg-gray-50 hover:text-yellow-500 border-yellow-400 border-2 tran transition translate-60 focus:outline-none focus:ring active:bg-yellow-400 sm:w-auto"
              >
                subscribe now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
