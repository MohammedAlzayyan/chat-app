import { DropdownIcon } from "@/components/svg";
import { ChatAppContext } from "@/context";
import { useContext } from "react";

const Sidebar = () => {
  const { setCurrentUser } = useContext(ChatAppContext);

  return (
    <aside className="flex">
      {/* <div className=" flex flex-col items-center w-20 bg-gray-300 h-full py-3 px-3 border-gray-300 border-r">
              <div className="flex justify-center items-center w-fit rounded-md bg-blue-400 p-2">
                <DropdownIcon className="w-10 h-10" />
              </div>

              <div className="grow">
                <div className="flex flex-col mt-10 space-y-2">
                  <div className="flex justify-center items-center rounded-md cursor-pointer bg-blue-300 p-2">
                    <DropdownIcon className="w-5 h-5" />
                  </div>
                  <div className="flex justify-center items-center rounded-md cursor-pointer hover:bg-blue-300 p-2">
                    <DropdownIcon className="w-5 h-5" />
                  </div>
                  <div className="flex justify-center items-center rounded-md cursor-pointer hover:bg-blue-300 p-2">
                    <DropdownIcon className="w-5 h-5" />
                  </div>
                </div>

                <span className="block w-full h-[2px] bg-gray-400 mt-2"></span>

                <div className="flex justify-center items-center rounded-md cursor-pointer hover:bg-blue-300 p-2 mt-2">
                  <DropdownIcon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-center items-center rounded-md cursor-pointer hover:bg-blue-300 p-2">
                  <DropdownIcon className="w-5 h-5" />
                </div>
                <div className="flex justify-center items-center rounded-md cursor-pointer hover:bg-blue-300 p-2">
                  <DropdownIcon className="w-5 h-5" />
                </div>
              </div>
            </div> */}

      <div className="flex flex-col gap-5 w-56 bg-slate-100 h-full py-3 px-3 border-gray-300 border-r">
        <div className="flex justify-between items-center">
          <h2 className="">Chats</h2>
          <DropdownIcon className="w-4 h-4" />
        </div>

        {/* <Input placeholder="Search" /> */}

        <div className="flex gap-2 items-center">
          <DropdownIcon className="w-3 h-3" />
          <p className="text-xs text-blue-700">Archived</p>
        </div>

        <span className="block w-full h-[1px] bg-gray-400"></span>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium">Pinned</span>
          <div
            className="group flex gap-2 items-center bg-white rounded-md w-full px-2 py-2 cursor-pointer hover:bg-blue-400"
            onClick={() => setCurrentUser("mohammed")}
          >
            <div className="relative rounded-full bg-gray-300 p-2">
              <DropdownIcon className="w-5 h-5" />
              <span className="absolute bottom-0 right-1 bg-green-600 w-2 h-2 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="text-sm font-semibold group-hover:text-white">
                  user name
                </span>
                <span className="text-[10px] group-hover:text-white">
                  Online
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] group-hover:text-white">9:35</span>
                <span className="flex justify-center items-center p-[6px] bg-blue-600 w-2 h-2 rounded-full text-[10px] text-white ">
                  2
                </span>
              </div>
            </div>
          </div>
          <div
            className="group flex gap-2 items-center bg-white rounded-md w-full px-2 py-2 cursor-pointer hover:bg-blue-400"
            onClick={() => setCurrentUser("ahmed")}
          >
            <div className="relative rounded-full bg-gray-300 p-2">
              <DropdownIcon className="w-5 h-5" />
              <span className="absolute bottom-0 right-1 bg-green-600 w-2 h-2 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="text-sm font-semibold group-hover:text-white">
                  user name
                </span>
                <span className="text-[10px] group-hover:text-white">
                  Online
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] group-hover:text-white">9:35</span>
                <span className="flex justify-center items-center p-[6px] bg-blue-600 w-2 h-2 rounded-full text-[10px] text-white ">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          <span className="text-xs font-medium">All Chats</span>
          <div className="group flex gap-2 items-center bg-white rounded-md w-full px-2 py-2 cursor-pointer hover:bg-blue-400">
            <div className="relative rounded-full bg-gray-300 p-2">
              <DropdownIcon className="w-5 h-5" />
              <span className="absolute bottom-0 right-1 bg-green-600 w-2 h-2 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="text-sm font-semibold group-hover:text-white">
                  user name
                </span>
                <span className="text-[10px] group-hover:text-white">
                  Online
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] group-hover:text-white">9:35</span>
                <span className="flex justify-center items-center p-[6px] bg-blue-600 w-2 h-2 rounded-full text-[10px] text-white ">
                  2
                </span>
              </div>
            </div>
          </div>
          <div className="group flex gap-2 items-center bg-white rounded-md w-full px-2 py-2 cursor-pointer hover:bg-blue-400">
            <div className="relative rounded-full bg-gray-300 p-2">
              <DropdownIcon className="w-5 h-5" />
              <span className="absolute bottom-0 right-1 bg-green-600 w-2 h-2 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="text-sm font-semibold group-hover:text-white">
                  user name
                </span>
                <span className="text-[10px] group-hover:text-white">
                  Online
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] group-hover:text-white">9:35</span>
                <span className="flex justify-center items-center p-[6px] bg-blue-600 w-2 h-2 rounded-full text-[10px] text-white ">
                  2
                </span>
              </div>
            </div>
          </div>
          <div className="group flex gap-2 items-center bg-white rounded-md w-full px-2 py-2 cursor-pointer hover:bg-blue-400">
            <div className="relative rounded-full bg-gray-300 p-2">
              <DropdownIcon className="w-5 h-5" />
              <span className="absolute bottom-0 right-1 bg-green-600 w-2 h-2 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="text-sm font-semibold group-hover:text-white">
                  user name
                </span>
                <span className="text-[10px] group-hover:text-white">
                  Online
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] group-hover:text-white">9:35</span>
                <span className="flex justify-center items-center p-[6px] bg-blue-600 w-2 h-2 rounded-full text-[10px] text-white ">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
