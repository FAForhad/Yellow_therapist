import React from "react";
const Banner = () => {
  return (
    <div>
      <section class="relative bg-[url(https://i.ibb.co/128FY2t/therapist.jpg)] bg-cover bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-yellow-100/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:min-h-5/6 lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl  text-yellow-500  sm:text-6xl">
              Better Advice
              <strong class="block font-extrabold  text-gray-700">
                Great change requires support
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              You are the <strong className="text-gray-700">Champion</strong> of your life and we
              are here remind it to you and <strong className="text-gray-700">Mentoring</strong>{" "}
              your lifestyle
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="https://theyellowtherapist.com/"
                class="block w-full rounded bg-yellow-400 px-12 py-3 text-sm font-medium text-gray-700 shadow hover:bg-yellow-500 focus:outline-none focus:ring active:bg-yellow-400 sm:w-auto"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
