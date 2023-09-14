import React from "react";
import CloseIcon from "../svg/CloseIcon";

const SlideOver = ({ children, setOpenDr }) => {
  return (
    <div
      className={`w-[85vw] h-screen max-w-sm bg-[#F2F4F7] shadow-xl
      "translate-x-full transition-transform ease-in-out duration-300 delay-500"
  `}
    >
      <div className="px-4 pt-5 sm:px-6 h-full overflow-hidden">
        <button type="button" onClick={() => setOpenDr(false)}>
          <CloseIcon aria-hidden="true" />
        </button>
        <div className="flex flex-col gap-3 h-full">{children}</div>
      </div>
    </div>
  );
};

export default SlideOver;
