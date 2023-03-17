import React from "react";
import backgroundImage from "../../media/1678888578227.jpg";
import universityLogo from "../../media/newlogo.svg";

const Banner = () => {
  return (
    <div
      className=" bg-center bg-no-repeat bg-cover py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),url(${backgroundImage})`,
      }}
    >
      <div className=" w-[90%] lg:w-[80%] min-h-screen mx-auto flex flex-col md:flex-row lg:flex-row justify-between md:items-center">
        <div>
          <div className="text-white my-5">
            <span className="p-4 bg-[#692438] text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold inline-block">pursue</span>
            <span className="p-4 bg-[#bb202e] text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold inline-block">your passions</span>
          </div>
          <div className="text-white  my-5">
            <span className="p-4 bg-[#692438] text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold inline-block">secure</span>
            <span className="p-4 bg-[#bb202e] text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold inline-block">your peace of mind</span>
          </div>
        </div>
        <div className=" bg-white w-64 sm:w-72 px-3 py-5 self-center">
          <div className="px-3 text-center">
            <img src={universityLogo} className=" w-40 mx-auto" alt="" />
            <h4 className=" font-bold text-2xl my-3 ">Get Covered</h4>
            <p className=" text-stone-700 text-sm font-semibold">
              Accept your LRAP Award now, at no cost to you
            </p>
          </div>
          <div className="my-2">
            <input
              type="text"
              className="w-full border-2 px-2 p-1 my-1 rounded-sm"
              placeholder="Student First Name"
            />
            <br />
            <input
              type="text"
              className="w-full border-2 px-2 p-1 my-1 rounded-sm"
              placeholder="Student Last Name"
            />
            <br />
            <input
              type="email"
              className="w-full border-2 px-2 p-1 my-1 rounded-sm"
              placeholder="Student Email Address"
            />
            <div className="flex mt-2">
              <input
                type="checkbox"
                name=""
                id="checkbox"
                className="w-7 h-7 mr-2"
              />
              <label htmlFor="checkbox" className="text-sm text-[#692438]">
                I confirm that i have recive and accept my LRAP Award
              </label>
            </div>
            <button className="bg-[#bb202e] text-white border-[#bb202e] border-2 w-full p-2 mt-5">Accept My LRAP Award</button>
          </div>
          <p  className="text-xs text-[#692438]">Check the box and click the accept button above to accept your LRAP Award at no or commitment. Accepting your award simply confirms your covered if you enroll at{`[clint]`}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
