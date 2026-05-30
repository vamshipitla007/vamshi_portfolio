import { Outlet } from "react-router-dom";
import ChatSidebar from "./ChatSidebar";

const ChatLayout = () => {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <ChatSidebar />

      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default ChatLayout;
