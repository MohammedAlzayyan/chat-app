"use client";

import { createContext, useState } from "react";

export const ChatAppContext = createContext();

export function ChatWrapper({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const values = {
    currentUser,
    setCurrentUser,
    messages,
    setMessages,
  };

  return (
    <ChatAppContext.Provider value={values}>{children}</ChatAppContext.Provider>
  );
}

export default ChatWrapper;
