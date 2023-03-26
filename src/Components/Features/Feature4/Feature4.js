import React from "react";
import "../Feature.css";
import { FaBrain, Fa500Px } from "react-icons/fa";
import { SiManageiq } from "react-icons/si";
import { GiFamilyTree } from "react-icons/gi";
const Feature4 = () => {
  return (
    <div className="bg-yellow-50 py-6 lg:py-16">
      <section className="">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold text-yellow-400">
                {" "}
                ------- <br />
                <p className="text-black">
                  An Amazing Tagline <br />
                  For Your <span className="text-yellow-400">Process</span>
                </p>
              </h2>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="card p-6 border-lg rounded shadow-xl group hover:shadow-2xl hover:shadow-yellow-300/50">
                    <div className="items-center text-start  cursor-default text-gray-600 hover:text-black transition duration-500 ease-in-out mt-4 ">
                      <FaBrain className="w-16 h-16"></FaBrain>
                      <div>
                        <p className="text-lg text-yellow-400 font-semibold mx-4 my-2 uppercase">
                          Personal Sessions
                        </p>
                        <p className="text-sm mx-8 my-2 ">
                          We're providing a structured platform <br /> to reach out to those who
                          need your help. <br /> An independant platform to work on your own
                          schedule and demand.
                        </p>
                      </div>
                    </div>
                    <p></p>
                  </div>
                  <div className="card p-6 transition-shadow duration-200 border-lg rounded shadow-xl group hover:shadow-2xl hover:shadow-yellow-300/50">
                    <div className="items-center mt-4 space-x-4 text-start  cursor-default text-gray-600 hover:text-black transition duration-500 ease-in-out ">
                      <Fa500Px className="w-16 h-16"></Fa500Px>
                      <div>
                        <p className="text-lg text-yellow-400 font-semibold mx-4 my-2 uppercase">
                          Anger Management
                        </p>
                        <p className="text-sm mx-8 my-2 ">
                          A platform serving both of who seeks professional help for their mental{" "}
                          <br />
                          well being and the professional therapists who are always ready to help.
                        </p>
                      </div>
                    </div>
                    <p></p>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="card p-6 transition-shadow duration-200 border-lg  rounded shadow-xl group hover:shadow-2xl hover:shadow-yellow-300/50">
                    <div className="items-center mt-4 space-x-4 text-start  cursor-default text-gray-600 hover:text-black transition duration-500">
                      <SiManageiq className="w-16 h-16"></SiManageiq>
                      <div>
                        <p className="text-lg text-yellow-400 font-semibold mx-4 my-2 uppercase">
                          Memory & Attention
                        </p>
                        <p className="text-sm mx-8 my-2 ">
                          Something ails? Hey, seeking help is the most humane thing we can do. It's
                          not
                          <br /> always easy on our own. This is the place where you get the proper
                          help you need.
                        </p>
                      </div>
                    </div>
                    <p></p>
                  </div>
                  <div className="card p-6 transition-shadow duration-200 border-lg rounded shadow-xl group hover:shadow-2xl hover:shadow-yellow-300/50">
                    <div className="items-center mt-4 space-x-4 text-start cursor-default text-gray-600 hover:text-black transition duration-500">
                      <GiFamilyTree className="w-16 h-16"></GiFamilyTree>
                      <div>
                        <p className="text-lg text-yellow-400 font-semibold mx-4 my-2 uppercase">
                          Family Session
                        </p>
                        <p className="text-sm mx-8 my-2 ">
                          The Yellow Therapist is an integrated platform that aspires to uplift the
                          mental health. Removing as many obstacles as possible between the one who
                          needs
                        </p>
                      </div>
                    </div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature4;
