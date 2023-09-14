"use client";

import Navbar from "@/app/Navbar";
import { LinkIcon, SendIcon } from "@/components/svg";
import { TextMsg, ImageMsg, FileMeg } from "@/features/chat/Conversation";
import DefaultChat from "@/app/pages/DefaultChat";
import Sidebar from "@/features/Sidebar";
import { useContext, useState } from "react";

import { ChatAppContext } from "@/context";
import SmailIcon from "@/components/svg/SmailIcon";
import Drawer from "@/components/Drawer";
import { useDrawer } from "@/hooks/useDrawer";
import ArrowRight from "@/components/svg/ArrowRight";
import BlockIcon from "@/components/svg/BlockIcon";
import DeleteIcon from "@/components/svg/DeleteIcon";
import CloseIcon from "@/components/svg/CloseIcon";
import DrawerWrapper from "./components/DrawerWrapper";
import DrawerContext, { drawerContext } from "@/context/DrawerContext";

import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const ChatPage = () => {
  const { currentUser, setCurrentUser } = useContext(ChatAppContext);

  const [openDr, setOpenDr] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [input, setInput] = useState("");

  const custom = [
    {
      id: "github",
      name: "GitHub",
      emojis: [
        {
          id: "octocat",
          name: "Octocat",
          keywords: ["github"],
          skins: [{ src: "./octocat.png" }],
        },
        {
          id: "shipit",
          name: "Squirrel",
          keywords: ["github"],
          skins: [
            { src: "./shipit-1.png" },
            { src: "./shipit-2.png" },
            { src: "./shipit-3.png" },
            { src: "./shipit-4.png" },
            { src: "./shipit-5.png" },
            { src: "./shipit-6.png" },
          ],
        },
      ],
    },
    {
      id: "gifs",
      name: "GIFs",
      emojis: [
        {
          id: "party_parrot",
          name: "Party Parrot",
          keywords: ["dance", "dancing"],
          skins: [{ src: "./party_parrot.gif" }],
        },
      ],
    },
  ];

  return (
    <DrawerContext>
      <div className="flex w-full h-screen">
        <Sidebar />
        <div className=" bg-red-400 w-full">
          {currentUser ? (
            <div className="flex w-full h-full">
              <div className="flex flex-col w-full h-full">
                <Navbar openDr={openDr} setD={setOpenDr} />

                <div className="grow bg-slate-300 w-full py-1 px-4 space-y-1">
                  <TextMsg />
                  <ImageMsg />
                  <FileMeg />
                  <TextMsg />
                </div>

                <div className="relative flex gap-2 bg-slate-100 px-4 py-2 w-full border-t border-gray-200">
                  <input
                    type="text"
                    className="w-full rounded-full outline-none pl-11 bg-blue-100 placeholder:text-gray-500"
                    placeholder="Write a message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <div className="rounded-full p-2 flex justify-center items-center w-10 h-10 cursor-pointer">
                    <SendIcon className="w-5 h-5 -rotate-45 text-blue-700" />
                  </div>
                  <div className="absolute top-[1.1rem] left-7 cursor-pointer">
                    <LinkIcon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div className="absolute top-[1.1rem] right-[4.5rem] cursor-pointer">
                    <SmailIcon
                      className="w-5 h-5 text-blue-700"
                      onClick={() => setIsPickerVisible(!isPickerVisible)}
                    />
                    {/* <div
                      className={`${
                        isPickerVisible
                          ? "block absolute bottom-10 right-0"
                          : "hidden"
                      }`}
                    >
                      <Picker onSelect={addEmoji} />
                    </div> */}
                    {/* <Picker data={data} onEmojiSelect={console.log} /> */}
                  </div>
                </div>
              </div>

              {openDr && <DrawerWrapper setOpenDr={setOpenDr} />}
            </div>
          ) : (
            <DefaultChat />
          )}
        </div>
      </div>
    </DrawerContext>
  );
};

export default ChatPage;
