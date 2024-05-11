import React from "react";
import MessageBubble from "./MessageBubble";

const ChatArea = () => {
  const messages = [
    {
        id: 1,
        name: "Brad india",
        text: "Babe I need Money For my Nails",
        time: "14:00",
      },    {
        id: 2,
        name: "Brad Lovely",
        text: "Ipsum",
        time: "14:00",
      },    {
        id: 3,
        name: "Brad Wisely",
        text: "China is at war",
        time: "14:00",
      },
  ];
  return (
    <div>
      <div className="pb-44 pt-20 container">
        {/* <MessageBubble /> */}
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatArea;
