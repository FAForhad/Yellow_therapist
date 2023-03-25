import React from "react";
import new_tyt_logo_kinda_yellow from "../../assets/new_tyt_logo_kinda_yellow.png";

const Footer = () => {
  return (
    <div>
      <div className=" bg-linear-pink-invert lg:py-12">
        <div className="mx-auto container pt-20 lg:pt-24 flex flex-col items-center justify-center">
          <img w-full src={new_tyt_logo_kinda_yellow} alt="" />
          <div className=" text-yellow-300 flex flex-col md:items-center f-f-l pt-3">
            <h1 className="text-2xl font-black text-black">
              SPECIALIST DOCTORS. LAB SCHEDULE. HEAL FITNESS.{" "}
            </h1>
            <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
              <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Download Now</h2>
              <h2 className="cursor-pointer">License</h2>
            </div>
            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Features</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Pricing</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Careers</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
              </ul>
            </div>
            <div className="text-sm text-color mb-10 f-f-l text-black">
              <p> © 2023. All rights reserved by Yellow Therapist</p>
            </div>
          </div>
          <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
          <div className="flex justify-between items-center pt-12">
            <div className="mr-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
