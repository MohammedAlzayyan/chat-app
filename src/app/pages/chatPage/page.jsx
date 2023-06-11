"use client";

import Navbar from "@/app/Navbar";
import { LinkIcon, SendIcon } from "@/components/svg";
import { TextMsg, ImageMsg, FileMeg } from "@/features/chat/Conversation";
import DefaultChat from "@/app/pages/DefaultChat";
import Sidebar from "@/app/Sidebar";
import { useContext } from "react";

import { ChatAppContext } from "@/context";

const ChatPage = () => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const [currentChat, setCurrentChat] = useState(null);
  // const [messages, setMessages] = useState([]);

  const { currentUser, setCurrentUser } = useContext(ChatAppContext);

  return (
    // <ChatWrapper>
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex flex-col bg-red-400 w-full">
        {currentUser ? (
          <>
            <Navbar />

            <div className="grow bg-green-400 w-full py-1 px-4">
              <TextMsg />
              <ImageMsg />
              <FileMeg />
            </div>
            <div className="relative flex gap-2 bg-blue-400 p-4 w-full">
              <input
                type="text"
                className="w-full h-10 rounded-full outline-none pl-11"
                placeholder="Write a message"
              />
              <div className="bg-blue-700 rounded-lg p-1 flex justify-center items-center w-10 h-10">
                <SendIcon className="w-5 h-5 -rotate-45 text-white" />
              </div>
              <div className="absolute top-7 left-7">
                <LinkIcon className="w-5 h-5 text-blue-700" />
              </div>
            </div>
          </>
        ) : (
          <DefaultChat />
        )}
      </div>
    </div>
    // </ChatWrapper>
  );
};

export default ChatPage;
