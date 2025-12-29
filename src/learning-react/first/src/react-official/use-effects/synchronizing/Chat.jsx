import { useEffect } from "react";

function createConnection() {
  return {
    connect() {
      console.log("✅ Connecting...");
    },
    disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    // return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}

export default function ChatRoomDemo() {
  return <ChatRoom></ChatRoom>;
}
