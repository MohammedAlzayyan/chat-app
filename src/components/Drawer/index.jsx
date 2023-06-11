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
          enter="transform transition ease-in-out duration-500 sm:duration-700 "
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className={`fixed top-0 right-0 overflow-y-auto h-screen max-w-full bg-[#F2F4F7] z-50 shadow-xl ${className} scrollbar-thin scroll-mr-2  hover:scrollbar-thin   hover:scrollbar-thumb-gray  scrollbar-thumb-transparent     scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
          ref={ref}
          {...rest}
        >
          <div className="w-[85vw] max-w-sm">
            <div className="px-4 py-6 sm:px-6">
              <button type="button" onClick={close}>
                <CloseIcon aria-hidden="true" />
              </button>
              <div className="mt-5">{children}</div>
            </div>
          </div>
        </Transition.Child>
      </Transition>
    );
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
