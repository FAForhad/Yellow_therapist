import React from "react";

const Feature3 = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
            <div className="  lg:w-1/2 lg:ml-12 lg:px-32 p-8 mx-auto flex items-center">
              <div className="text-center">
                <h1 className="md:w-8/12 lg:w-full  w-full xl:text-5xl sm:text-5xl text-4xl  text-yellow-400 capitalize">
                  Our Service <br /> Support
                </h1>
                <p className="dark:text-gray-400 md:w-9/12 lg:w-11/12  text-base leading-normal text-gray-600 mt-5">
                  The Yellow Therapist is an integrated platform that aspires to uplift the existing
                  state of mental health services of Bangladesh. Removing as many obstacles as
                  possible between the one who needs help and the one who can provide- is what we
                  are striving for.
                </p>
                <button className="rounded-xl bg-yellow-400 px-12 py-5 dark:bg-white dark:hover:bg-yellow-400 dark:hover:text-white dark:text-yellow-500  w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2  focus:outline-none hover:bg-yellow-500 font-medium leading-none  flex items-center  text-white shadow  hover:text-yellow-500 border-yellow-400 border-2 transition translate-60  active:bg-yellow-400 sm:w-auto">
                  About TYT
                  <div className="ml-2 mt-0.5">
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33325 8H12.6666"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.6667L12.6667 8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 5.33301L12.6667 7.99967"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="z-30 relative lg:w-1/2">
              <div className="hidden bg-yellow-50 border-yellow-200 border-2 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
                <div className="w-full lg:w-auto lg:-ml-32">
                  <img
                    src="https://img.freepik.com/free-vector/people-psychologist-counseling-patient-characters-communicate-with-doctor-about-mental-problems-child-family-couple-men-women-talking-with-specialist-line-art-flat-vector-illustration-set_107791-9918.jpg?w=1380&t=st=1679851158~exp=1679851758~hmac=0e62f1e83c0887732cadf060f98388bba6a429f133b36986d35f749a4f9d1a9f"
                    className="w-full relative z-30 lg:pr-20 px-6 py-14"
                  />
                </div>
              </div>
              <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
              <div className="w-full h-full lg:hidden">
                <img
                  src="https://img.freepik.com/free-vector/patient-psychologist-office-man-talk-doctor_107791-9847.jpg?w=1380&t=st=1679753159~exp=1679753759~hmac=91b49f890ac6715926b7c59a4bd2bc30586be573f6d867b292f6b1ac88e62d1b"
                  alt="image with decent chairs"
                  className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
