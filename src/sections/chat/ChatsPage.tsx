import ChatList from "@/components/ui/ChatList";
import Conversation from "@/components/ui/Conversation";


const ChatsPage = () => {
  return (
    <div className="flex h-screen">
      <ChatList />
      <Conversation />
    </div>
  );
};

export default ChatsPage;