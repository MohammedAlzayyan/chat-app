import ArrowRight from "@/components/svg/ArrowRight";
import BlockIcon from "@/components/svg/BlockIcon";
import DeleteIcon from "@/components/svg/DeleteIcon";
import React from "react";

const ContentInfo = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          className="inline-block h-36 w-h-36 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="user"
        />
        <span className="text-sm font-medium mt-2">00970599254871</span>
        <span className="font-medium">User Name</span>
      </div>
      <div className="grow space-y-3 ">
        <div className="space-y-2 shadow-md p-2 rounded-md">
          <span className="font-medium text-sm text-blue-500">About</span>
          <p className="text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="space-y-2 shadow-md p-2 rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleDrawerHistory("Media")}
          >
            <span className="font-medium text-sm text-blue-500">
              Media, Link and docs
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="flex gap-1 justify-between items-center">
            <img
              src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
              alt="images"
              className="w-24 h-24 rounded-md object-fill"
            />
            <img
              src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="images"
              className="w-24 h-24 rounded-md object-fill"
            />
            <img
              src="https://images.unsplash.com/photo-1679678691007-67ae3f68a13e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MjJ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="images"
              className="w-24 h-24 rounded-md object-fill"
            />
          </div>
        </div>
      </div>

      <div className="grow flex justify-between gap-3">
        <button
          type="button"
          className="p-2 w-full h-12 rounded-md inline-flex justify-center items-center gap-2 text-white bg-blue-600 hover:bg-blue-500"
        >
          <BlockIcon className="w-5 h-5" />
          Block
        </button>
        <button
          type="button"
          className="p-2 w-full h-12 rounded-md inline-flex justify-center items-center gap-2 text-white bg-blue-600 hover:bg-blue-500"
        >
          <DeleteIcon className="w-5 h-5" />
          Delete
        </button>
      </div>
    </>
  );
};

export default ContentInfo;
