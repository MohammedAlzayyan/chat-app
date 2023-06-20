"use client";

import Drawer from "@/components/Drawer";
import {
  ArrowDown,
  DropdownIcon,
  Phone,
  SearchIcon,
  VideoIcon,
} from "@/components/svg";
import ArrowRight from "@/components/svg/ArrowRight";
import BlockIcon from "@/components/svg/BlockIcon";
import DeleteIcon from "@/components/svg/DeleteIcon";
import { useDrawer } from "@/hooks/useDrawer";
import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";
import { Fragment } from "react";

const Navbar = () => {
  const { isOpen, toggleDrawer, closeDrawer, openDrawer } = useDrawer(false);

  return (
    <div className="w-full bg-slate-100 py-2 px-4 flex justify-between gap-3 shadow-md">
      <div
        className="flex gap-2 items-center bg-red-300 w-full cursor-pointer"
        onClick={toggleDrawer}
      >
        <div className="rounded-full bg-gray-300 p-2">
          <DropdownIcon className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm">User Name</span>
          <span className="text-xs">Online</span>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <VideoIcon onClick={() => signOut()} />
        <Phone />
        <SearchIcon />
        <span className="block w-[1px] h-7 bg-gray-300"></span>
        <div className="flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="">
              <ArrowDown className="w-5 h-5" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Edit
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Duplicate
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      <Drawer isOpen={isOpen} close={closeDrawer}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-center items-center bg-red-300">
            <Phone />
            <span>00970599254871</span>
            <span>user name</span>
          </div>

          <div className="shadow-md">
            <span>About</span>
            <p>test test test test test test test test</p>
          </div>

          <div className="flex flex-col gap-2 shadow-md">
            <div className="flex justify-between ">
              <span>Media, Link and docs</span>
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="flex gap-1">
              {/* <img
                src="https://png.pngitem.com/pimgs/s/54-546782_download-nature-high-quality-png-nature-png-transparent.png"
                alt="images"
                className="w-20 h-20 rounded-full object-cover"
              /> */}
              {/* <img
                src="https://png.pngitem.com/pimgs/s/54-546782_download-nature-high-quality-png-nature-png-transparent.png"
                alt="images"
                className="w-20 h-20 rounded-full object-cover"
              /> */}
              <Phone />
              <Phone />
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <button
              type="button"
              className="border border-blue-500 p-2 w-1/2 rounded-md flex justify-center items-center gap-2 text-blue-500 hover:bg-blue-100"
            >
              <BlockIcon className="w-5 h-5" />
              Block
            </button>
            <button
              type="button"
              className="border border-blue-500 p-2 w-1/2 rounded-md flex justify-center items-center gap-2 text-blue-500 hover:bg-blue-100"
            >
              <DeleteIcon className="w-5 h-5" />
              Delete
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
