import React, { Suspense } from "react";
// import Lisimages from "./_components/listimages";

export default function page() {
  return (
    <>
      <section className="h-screen  w-full flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">
                Ekhlasur Rahman
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Passionate and creative web designer with [X] years of
                experience in designing user-friendly, responsive websites.
                Looking to leverage my expertise in front-end development,
                graphic design, and user experience to contribute to the growth
                of a dynamic company.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">
                Mukhlesur Rahman
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
                quas omnis vero totam ullam, reprehenderit ratione pariatur
                accusamus suscipit odit nostrum?
              </p>
            </div>
          </div>

          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2">
                Younus Sordar
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
                quas omnis vero totam ullam, reprehenderit ratione pariatur
                accusamus suscipit odit nostrum?
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
        </div>
      </section>

      <section className="min-h-screen w-full flex justify-center items-center">
        <div className="w-full max-w-2xl mx-auto p-6">
          <ul className="relative border-l border-gray-200">
            <li className="mb-10 ml-4">
              <div className="absolute w-6 h-6 text-center bg-blue-500 rounded-full -left-[13px] text-white items-center flex justify-center border-2 border-white">
                1
              </div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                02.02.2025
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Ekhlasur Rahman
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Passionate and creative web designer with 5 years of experience
                in designing user-friendly, responsive websites.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-6 h-6 text-center bg-blue-500 rounded-full -left-[13px] text-white items-center flex justify-center border-2 border-white">
                2
              </div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                03.03.2025
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Mukhlesur Rahman
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
                quas omnis vero totam ullam, reprehenderit ratione pariatur
                accusamus suscipit odit nostrum?
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
              <div className="absolute w-6 h-6 text-center bg-blue-500 rounded-full -left-[13px] text-white items-center flex justify-center border-2 border-white">
                3
              </div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                04.04.2025
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Younus Sordar
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
                quas omnis vero totam ullam, reprehenderit ratione pariatur
                accusamus suscipit odit nostrum?
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="bg-indigo-700 p-4">
          <h2 className="text-3xl text-white text-center font-bold mb-12">
            Chronology
          </h2>

          <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
            <div className="flex md:contents flex-row-reverse">
              <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">
                  New Event 1
                </h3>
                <p className="mt-2 leading-6">
                  Description of the first event.
                </p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                  14.02.2025
                </span>
              </div>
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    1
                  </div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-1 h-full bg-indigo-300"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
              </div>
              <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 className="text-lg font-semibold lg:text-xl">
                  New Event 2
                </h3>
                <p className="mt-2 leading-6">
                  Description of the second event.
                </p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                  14.02.2025
                </span>
              </div>
            </div>

            {/* 2nd step  */}

            <div className="flex md:contents flex-row-reverse">
              <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">
                  New Event 3
                </h3>
                <p className="mt-2 leading-6">
                  Description of the first event.
                </p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                  14.02.2025
                </span>
              </div>
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-1 h-full bg-indigo-300"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
              </div>
              <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 className="text-lg   lg:text-xl">New Event 4</h3>
                <p className="mt-2 leading-6">
                  Description of the second event.
                </p>
                <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                  14.02.2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <Lisimages />
      </section> */}
    </>
  );
}
