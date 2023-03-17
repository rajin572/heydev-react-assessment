import React from "react";
import { useLoaderData } from "react-router-dom";
import UserCard from "./UserCard";

const UsersPage = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="py-20 bg-[#F1F3FA]">
      <div className="w-[100%] sm:w-4/5  pt-10 mx-auto border-t-[3px] border-[#bb202e]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
          {users.map((user) => (
            <UserCard key={user.id} user={user}></UserCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
