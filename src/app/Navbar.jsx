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
import Image1 from "@/components/svg/Image1";
import { drawerContext } from "@/context/DrawerContext";
import { useDrawer } from "@/hooks/useDrawer";
import { Menu, Transition } from "@headlessui/react";
import { signOut } from "next-auth/react";
import { Fragment, useContext } from "react";

const Navbar = ({ openDr, setD }) => {
  const { isOpen, toggleDrawer, closeDrawer, openDrawer } = useDrawer(false);

  const { drawerHistory, handleDrawerHistory } = useContext(drawerContext);

  return (
    <div className="w-full bg-slate-100 py-2 px-4 flex justify-between gap-3 shadow-md">
      <div
        className="flex gap-2 items-center w-full cursor-pointer"
        // onClick={toggleDrawer}
        onClick={() => {
          setD(!openDr);
          handleDrawerHistory({ component: "Main" });
        }}
      >
        <img
          className="inline-block h-9 w-9 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="user"
        />
        <div className="flex flex-col">
          <span className="text-xs font-medium">User Name</span>
          <span className="text-xs text-blue-500">online</span>
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
              <Menu.Items className="absolute right-0 mt-3 w-40 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-200" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Contact info
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-200" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Mute notifications
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-200" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Delete chat
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-200" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Report
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-200" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Block
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {/* <Drawer isOpen={isOpen} close={closeDrawer}>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-center items-center">
            <img
              className="inline-block h-36 w-h-36 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="user"
            />
            <span>00970599254871</span>
            <span>User Name</span>
          </div>

          <div className="shadow-md p-2">
            <span className="font-medium text-sm">About</span>
            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="flex flex-col gap-2 shadow-md p-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm">Media, Link and docs</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="flex gap-1">
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
      </Drawer> */}
    </div>
  );
};

export default Navbar;
