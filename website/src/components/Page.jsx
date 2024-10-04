import React from 'react'
import aboutimg from "../assets/about.png"

const Page = () => {
  return (
    <>
      <div
        className="h-[100vh] w-full bg-cover bg-center flex"
        style={{ backgroundImage: `url(${aboutimg})` }}
      >
        <div className="leftside mt-[20vh] ml-[6vw] h-[60vh] w-[40vw]">
          <h1 className="text-[3vw] font-extrabold mb-[6vw]">About us</h1>
          <p>
            <h1 className="text-[2vw] font-bold mb-[2vw]">
              OUR PASSION <br /> FOR SAVING ENVIRONMENT
            </h1>
            <p className="text-[1.2vw]">
              Our aim is to drive energy conservation and environmental
              sustainability through innovative solutions. <br />
              We are committed to promoting responsible resource usage and
              contributing to global SDG goals.
            </p>
          </p>
        </div>
        <div className="rightside mt-[20vh] h-[60vh] ml-[25vw] w-[20vw]">
          <div className="mb-[5vh]">
            <h1 className="text-[3vw] font-bold">50+</h1>
            <p className="text-[1.2vw]">countries</p>
          </div>
          <div className="mb-[5vh]">
            <h1 className="text-[3vw] font-bold ">250</h1>
            <p className="text-[1.2vw]">cities and towns</p>
          </div>
          <div className="">
            <h1 className="text-[3vw] font-bold ">94.6%</h1>
            <p className="text-[1.2vw]">satisfied customers</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page