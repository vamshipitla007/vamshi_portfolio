import GroupChatList from "./components/GroupChatList";
import GroupConversation from "./components/GroupConversation";

const TeamsPage = () => {
  return (
    <div className="flex h-full">
      <GroupChatList />
      <GroupConversation />
    </div>
  );
};

export default TeamsPage;
