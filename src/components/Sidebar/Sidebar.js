import React from "react";
import ChatList from "../ChatList/ChatList";

import "./Sidebar.css";
import arab from "../../assets/Images/Users/arab.png";

const Sidebar = ({ setSelectedChatId, chats }) => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="container">
          <div className="header">
            <img src={arab} alt="User Icon" />
            <button className="btn-login">Log In</button>
            <input
              className="search"
              type="text"
              placeholder="Search or start new chat"
            />
          </div>
        </div>
      </div>
      <div className="chats">
        <div
          style={{ color: "#69cfd4", fontSize: "20px", marginBottom: "25px" }}
          className="container"
        >
          Chats
        </div>
        {chats.map((item) => {
          return (
            <ChatList
              key={item.id}
              setSelectedChatId={setSelectedChatId}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
