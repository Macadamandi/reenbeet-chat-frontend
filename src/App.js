import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatArea from "./components/ChatArea/ChatArea";

import "./App.css";

import man from "./assets/Images/Users/man.png";
import woman from "./assets/Images/Users/woman.png";
import user from "./assets/Images/Users/user.png";

const App = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const [chats, setChats] = useState([
    {
      id: 0,
      fullName: "John Doe",
      lastMessage: "Hello!",
      date: "2024-12-09",
      src: man,
    },
    {
      id: 1,
      fullName: "Jane Smith",
      lastMessage: "How are you?",
      date: "2024-12-08",
      src: woman,
    },
    {
      id: 2,
      fullName: "Alice Johnson",
      lastMessage: "Goodbye!",
      date: "2024-12-07",
      src: user,
    },
  ]);

  const [messages, setMessages] = useState({
    0: [
      { sender: "John Doe", text: "Hello!", time: "10:00" },
      { sender: "Me", text: "Hi there!", time: "10:03" },
      { sender: "John Doe", text: "I have an idea!", time: "10:06" },
    ],
    1: [
      { sender: "Jane Smith", text: "How are you?", time: "11:00" },
      { sender: "Me", text: "I'm doing great! You?", time: "11:03" },
      { sender: "Jane Smith", text: "I'm too", time: "11:06" },
      { sender: "Me", text: "What are you doing today evening", time: "11:09" },
    ],
    2: [
      { sender: "Me", text: "Thanks for your help!", time: "04:00" },
      { sender: "Alice Johnson", text: "You are welcom!", time: "04:03" },
      { sender: "Me", text: "See you later", time: "04:06" },
      { sender: "Alice Johnson", text: "Goodbye", time: "04:09" },
    ],
  });

  return (
    <div className="app">
      <Sidebar setSelectedChatId={setSelectedChatId} chats={chats} />
      {selectedChatId !== null ? (
        <ChatArea
          chat={selectedChatId !== null ? chats[selectedChatId].src : ""}
          fullName={chats[selectedChatId].fullName}
          messages={selectedChatId !== null ? messages[selectedChatId] : []}
          setMessages={setMessages}
          selectedChatId={selectedChatId}
        />
      ) : (
        <div className="chat-placeholder">Select chat to display messages</div>
      )}
    </div>
  );
};

export default App;
