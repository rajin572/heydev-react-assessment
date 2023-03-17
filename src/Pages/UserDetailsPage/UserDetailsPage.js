import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import userImg from "../../media/defaultUser.png";
import { GrFormPrevious } from 'react-icons/gr';

const UserDetailsPage = () => {
  const user = useLoaderData();
  console.log(user);
  const { name, username, email, phone, website, company, address } = user;


  return (
    <div className=" min-h-screen py-20 bg-[#F1F3FA]">
        
      <div className="w-[90%] lg:w-3/4 mx-auto ">
        <div className="mb-10">
        <Link to="/users">
            <button className="mt-10 px-10 bg-[#bb202e] text-[#ffffff] py-2 border-2 border-[#bb202e] rounded-md">
              <GrFormPrevious className=" text-2xl" style={{ color: "#ffffff" }}></GrFormPrevious>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#ffffff] text-center py-10 rounded-lg">
          <img
            src={userImg}
            alt=""
            className=" rounded-full border-4 border-[#692438] w-28 mx-auto"
          />
          <h3 className="mt-3 text-xl sm:text-2xl font-bold">{name}</h3>
          <p className=" mt-2 text-[#692438] text-base sm:text-xl font-bold">{username}</p>
          <p className=" mt-4 text-gray-500 text-sm sm:text-base font-bold">
            <span>{address.suite},</span>
            <span>{address.street},</span>
            <span>{address.city}</span>
          </p>
          <Link to={`https://www.${website}`} target="_blank">
            <button className="mt-10 w-4/5 bg-[#bb202e] text-white py-2 border-2 border-[#bb202e] hover:bg-white hover:text-[#bb202e] duration-500 rounded-md">
              Visit Website
            </button>
          </Link>
        </div>
        <div className="bg-[#ffffff] text-sm sm:text-base col-span-2 rounded-lg">
            <p className="p-4 border-b-2">
                <span className=" font-bold">Full Name: </span>
                <span>{name}</span>
            </p>
            <p className="p-4 border-b-2">
                <span className=" font-bold">Email: </span>
                <span>{email}</span>
            </p>
            <p className="p-4 border-b-2">
                <span className=" font-bold">Phone Number: </span>
                <span>{phone}</span>
            </p>
            <p className="p-4 border-b-2">
                <span className=" font-bold">Website: </span>
                <span>{website}</span>
            </p>
            <p className="p-4 border-b-2">
                <span className=" font-bold">Company Name: </span>
                <span>{company.name}</span>
            </p>
            <p className="p-4 border-b-2">
                <span className=" font-bold">Catchphrase: </span>
                <span>{company.catchPhrase}</span>
            </p>
            <p className="p-4 border-b-2">
                <span className=" font-bold">Address: </span>
                <span>
                <span>{address.suite},</span>
            <span>{address.street},</span>
            <span>{address.city}</span>
                </span>
            </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
