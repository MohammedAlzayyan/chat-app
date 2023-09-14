import { DropdownIcon, Phone, SearchIcon } from "@/components/svg";
import ArchiveIcon from "@/components/svg/ArchiveIcon";
import ChatsIcon from "@/components/svg/ChatsIcon";
import Logo from "@/components/svg/Logo";
import SettingsIcon from "@/components/svg/SettingsIcon";
import UsersIcon from "@/components/svg/UsersIcon";
import { ChatAppContext } from "@/context";
import { useContext, useState } from "react";
import { Switch } from "@headlessui/react";
import Chats from "./components/Chats";
import Users from "./components/Users";
import Calls from "./components/Calls";
import Settings from "./components/Settings";
import { useDrawer } from "@/hooks/useDrawer";
import Drawer from "@/components/Drawer";
import ArrowRight from "@/components/svg/ArrowRight";
import BlockIcon from "@/components/svg/BlockIcon";
import DeleteIcon from "@/components/svg/DeleteIcon";
import EditIcon from "@/components/svg/EditIcon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FirstSidebar = [
  {
    id: 1,
    name: "Chats",
    icon: <ChatsIcon className="w-4 h-4" />,
    active: true,
  },
  {
    id: 2,
    name: "Users",
    icon: <UsersIcon className="w-4 h-4" />,
    active: false,
  },
  {
    id: 3,
    name: "Calls",
    icon: <Phone className="w-4 h-4" />,
    active: false,
  },
  {
    id: 4,
    name: "Settings",
    icon: <SettingsIcon className="w-4 h-4" />,
    active: false,
  },
];

const Sidebar = () => {
  const { setCurrentUser } = useContext(ChatAppContext);
  const [enabled, setEnabled] = useState(false);
  const [options, setOptions] = useState(FirstSidebar);
  const [selectedOption, setSelectedOption] = useState(FirstSidebar[0]);

  const { isOpen, toggleDrawer, closeDrawer, openDrawer } = useDrawer(false);

  const editOptions = (item) => {
    const newOptions = options.map((o) => {
      if (o.id === item.id) {
        return {
          ...o,
          active: true,
        };
      } else {
        return {
          ...o,
          active: false,
        };
      }
    });

    setOptions(newOptions);
  };

  const showOption = () => {
    switch (selectedOption.id) {
      case 1:
        return <Chats />;
      case 2:
        return <Users />;
      case 3:
        return <Calls />;
      case 4:
        return <Settings />;
      default:
        return <Chats />;
    }
  };

  return (
    <aside className="flex">
      <div className=" flex flex-col items-center w-18 bg-slate-200 h-full py-3 px-2 border-gray-200 border-r">
        <div className="flex justify-center items-center w-fit rounded-md bg-blue-300 p-2">
          <Logo className="w-8 h-8" />
        </div>

        <div className="grow">
          <div className="flex flex-col mt-10 gap-2">
            {options.map((item, index) => (
              <div
                className={`flex justify-center items-center rounded-md cursor-pointer ${
                  item.active ? "bg-blue-200" : "hover:bg-blue-200"
                }  p-2`}
                key={item.id}
                onClick={() => {
                  setSelectedOption(item);
                  editOptions(item);
                }}
              >
                {/* {index === FirstSidebar.length - 1 && (
                  <span className="block w-full h-[1px] bg-gray-300 mt-2"></span>
                )} */}
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none"
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute h-full w-full rounded-md bg-white"
            />
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "bg-indigo-600" : "bg-gray-200",
                "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
              )}
            />
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"
              )}
            />
          </Switch>
          <img
            className="inline-block h-11 w-11 rounded-full cursor-pointer"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            onClick={openDrawer}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 w-72 bg-slate-100 h-full py-3 px-3 border-gray-200 border-r">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-700">Chats</h2>
          {/* <DropdownIcon className="w-4 h-4" /> */}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="search"
            className="w-full pl-8 ring-1 focus:outline-none rounded-full py-1 bg-blue-50 text-sm placeholder:text-blue-500"
          />
          <div className="absolute top-[0.45rem] left-2">
            <SearchIcon className="text-blue-500" />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <ArchiveIcon className="w-4 h-4" />
          <p className="text-xs text-blue-700">Archived</p>
        </div>

        <span className="block w-full h-[1px] bg-gray-300"></span>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium">All {selectedOption.name}</span>

          {showOption()}
        </div>
      </div>
      <Drawer isOpen={isOpen} close={closeDrawer} className="">
        <div className="flex flex-col gap-3 h-full">
          <div className="flex flex-col gap-3 items-center">
            <img
              className="inline-block h-36 w-36 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="user"
            />
            <span className="text-sm font-medium">00970599254871</span>
          </div>
          <div className="flex flex-col mt-5">
            <span className="text-blue-500 text-sm">Your name</span>
            <span className="inline-flex justify-between items-center">
              <span className="font-medium">Mohammed Alzayyan</span>
              <EditIcon className="w-4 h-4" />
            </span>
            <p className="text-xs text-gray-400 mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="grow space-y-3 mt-5">
            <div className="space-y-2 shadow-md p-2 rounded-md">
              <span className="font-medium text-sm text-blue-500">About</span>
              <p className="text-xs">Hey there! I am using ChatApp.</p>
            </div>
          </div>
        </div>
      </Drawer>
    </aside>
  );
};

export default Sidebar;
