import React, { useState, useRef } from "react";
import "./ChatArea.css";

const ChatArea = ({
  messages,
  chat,
  fullName,
  setMessages,
  selectedChatId,
}) => {
  const [newMessage, setNewMessage] = useState("");

  const inputRef = useRef(null);

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && newMessage.trim() !== "") {
      handleSendMessage();
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    const newMessageObj = {
      sender: "Me",
      text: newMessage,
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedChatId]: [
        ...(prevMessages[selectedChatId] || []),
        newMessageObj,
      ],
    }));

    setNewMessage("");
    inputRef.current.value = "";
  };

  return (
    <div className="chat-area">
      <div className="chat-header">
        <img src={chat} alt="User Icon" />
        <div>
          <p style={{ fontWeight: "600" }}>{fullName}</p>
        </div>
      </div>
      <div className="chat-messages container">
        {messages.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            text={message.text}
            time={message.time}
            isMine={message.sender === "Me"}
            chat={chat}
          />
        ))}
      </div>
      <div className="message-input container">
        <input
          ref={inputRef}
          onKeyUp={handleKeyUp}
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message"
        />
      </div>
    </div>
  );
};

const Message = ({ sender, text, time, isMine, chat }) => {
  return (
    <div className={`message ${isMine ? "right" : "left"}`}>
      {isMine ? null : <img src={chat} alt="avatar icon" />}
      <div className="message__item">
        <p>{text}</p>
        <span style={{ color: "#c7c5c6", fontSize: "14px" }}>{time}</span>
      </div>
    </div>
  );
};

export default ChatArea;
