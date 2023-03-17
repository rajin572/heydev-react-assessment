import React, { useEffect, useState } from "react";
import AboutText from "./AboutText";

const About = () => {

  const [texts, setTexts] = useState([])

  useEffect(() =>{
    fetch('about.json')
    .then(res => res.json())
    .then(data => setTexts(data))
},[])

  return (
  <div className=" w-[90%] sm:w-3/4 lg:w-3/5 mx-auto -mt-6 md:-mt-10 lg:-mt-14">
    <div className=" border-2 border-[#6A2639] mb-5">
      <div className="bg-[#6A2639] text-white grid grid-cols-8 items-center">
        <h2 className="py-5 col-span-2 md:col-span-1 text-base lg:text-xl font-bold text-center">$46,000</h2>
        <p className="p-3 col-span-6 md:col-span-7 text-base lg:text-xl">At Seattle Pacific University, we've partnered with Ardeo to help you protext your college investment with a Loan Repaument Assistance benefit called LRAP- at no cost to you.</p>
      </div>
      <div className=" text-[#6A2639] grid grid-cols-8 items-center">
        <h2 className=" border-r-2 border-[#6A2639] py-5 col-span-2 md:col-span-1 text-base lg:text-xl font-bold text-center">$46,000</h2>
        <p className="p-3 col-span-6 md:col-span-7 text-base lg:text-xl">If you earn less than $46,000 adter graduation, we can help repay ypur student loadns.</p>
      </div>
    </div>
    <div>
    {
        texts.map((text) => (
          <AboutText
            key={text.id}
            text={text}
          ></AboutText>
        ))
        }
    </div>
    <div>
      <p className=" italic font-semibold">Note: This is a summary. Terms & conditions apply. See your LRAP Award for full details.</p>
    </div>
  </div>
  );
};

export default About;
