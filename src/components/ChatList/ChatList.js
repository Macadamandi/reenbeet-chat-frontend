import "./ChatList.css";

const ChatList = ({ setSelectedChatId, item }) => {
  const handleChatClick = (id) => {
    setSelectedChatId(id);
  };

  return (
    <div
      onClick={() => handleChatClick(item.id)}
      key={item.id}
      className="chat-item container"
    >
      <img src={item.src} alt="Chat Icon" />
      <div className="chat-item__header">
        <div>
          <p>{item.fullName}</p>
          <p style={{ color: "#acacae", fontSize: "15px" }}>
            {item.lastMessage}
          </p>
        </div>
        <p className="chat-item__last-message">{item.date}</p>
      </div>
    </div>
  );
};

export default ChatList;
