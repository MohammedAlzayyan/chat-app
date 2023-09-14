"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { Transition } from "@headlessui/react";
import React, { forwardRef, useRef } from "react";
import CloseIcon from "../svg/CloseIcon";

const Drawer = forwardRef(
  ({ isOpen, close, children, className }, ref, ...rest) => {
    const refD = useRef();
    useClickOutside(refD, close);
    return (
      <Transition show={isOpen}>
        <Transition.Child
          // enter="transform transition ease-in-out duration-500 sm:duration-700 "
          // enterFrom="translate-x-0"
          // enterTo="translate-x-full"
          // leave="transform transition ease-in-out duration-500 sm:duration-700"
          // leaveFrom="translate-x-full"
          // leaveTo="translate-x-0"
          className={`fixed top-0 left-0 overflow-y-auto h-screen max-w-full bg-blue-50 z-50 shadow-xl ${className} scrollbar-thin scroll-mr-2  hover:scrollbar-thin   hover:scrollbar-thumb-gray  scrollbar-thumb-transparent     scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
          ref={ref}
          {...rest}
        >
          <div className="w-[85vw] max-w-[22rem]">
            <div className="px-4 py-6 sm:px-6">
              <div className="flex gap-5">
                <button type="button" onClick={close}>
                  <CloseIcon aria-hidden="true" />
                </button>
                <span className="text-md font-medium">Profile</span>
              </div>
              <div className="mt-10">{children}</div>
            </div>
          </div>
        </Transition.Child>
      </Transition>
    );
  }
);

Drawer.displayName = "Drawer";

export default Drawer;
