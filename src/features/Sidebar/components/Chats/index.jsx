import { DropdownIcon } from "@/components/svg";
import UserIcon from "@/components/svg/UserIcon";
import { ChatAppContext } from "@/context";
import React, { useContext } from "react";

const Chats = () => {
  const { setCurrentUser } = useContext(ChatAppContext);

  return (
    <>
      <div
        className="group flex gap-1 items-center bg-white rounded-md w-full px-1 py-2 cursor-pointer hover:bg-blue-100"
        onClick={() => setCurrentUser("mohammed")}
      >
        <div className="relative rounded-full bg-gray-300 p-2">
          <UserIcon className="w-7 h-7" />
          <span className="absolute bottom-0 right-1 bg-green-600 w-2 h-2 rounded-full"></span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Mohammed Alzayyan</span>
            <span className={`text-[10px] `}>Online</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px]">9:35</span>
            <span className="flex justify-center items-center p-[6px] bg-blue-600 w-2 h-2 rounded-full text-[10px] text-white ">
              2
            </span>
          </div>
        </div>
      </div>

      <div
        className="group flex gap-1 items-center bg-white rounded-md w-full px-1 py-2 cursor-pointer hover:bg-blue-100"
        onClick={() => setCurrentUser("mohammed")}
      >
        <div className="relative rounded-full bg-gray-300 p-2">
          <UserIcon className="w-7 h-7" />
          <span className="absolute bottom-0 right-1 bg-gray-400 w-2 h-2 rounded-full"></span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Ahmed Alzayyan</span>
            <span className={`text-[10px]`}>Offline</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px]">9:35</span>
            <span className="flex justify-center items-center p-[6px] bg-blue-600 w-2 h-2 rounded-full text-[10px] text-white ">
              2
            </span>
          </div>
        </div>
      </div>

      <div
        className="group flex gap-1 items-center bg-white rounded-md w-full px-1 py-2 cursor-pointer hover:bg-blue-100"
        onClick={() => setCurrentUser("mohammed")}
      >
        <div className="relative rounded-full bg-gray-300 p-2">
          <UserIcon className="w-7 h-7" />
          <span className="absolute bottom-0 right-1 bg-green-600 w-2 h-2 rounded-full"></span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Mohammed Alzayyan</span>
            <span className={`text-[10px] `}>Online</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px]">9:35</span>
            <span className="flex justify-center items-center p-[6px] bg-blue-600 w-2 h-2 rounded-full text-[10px] text-white ">
              2
            </span>
          </div>
        </div>
      </div>

      <div
        className="group flex gap-1 items-center bg-white rounded-md w-full px-1 py-2 cursor-pointer hover:bg-blue-100"
        onClick={() => setCurrentUser("mohammed")}
      >
        <div className="relative rounded-full bg-gray-300 p-2">
          <UserIcon className="w-7 h-7" />
          <span className="absolute bottom-0 right-1 bg-gray-400 w-2 h-2 rounded-full"></span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Ahmed Alzayyan</span>
            <span className={`text-[10px]`}>Offline</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px]">9:35</span>
            <span className="flex justify-center items-center p-[6px] bg-blue-600 w-2 h-2 rounded-full text-[10px] text-white ">
              2
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;
