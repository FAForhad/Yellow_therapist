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
          <div className="my-6">
            <h1 className="px-4 text-2xl uppercase ">MAKE AN</h1>
            <h1 className="px-4 text-4xl uppercase font-bold">APPOINTMENT</h1>
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
