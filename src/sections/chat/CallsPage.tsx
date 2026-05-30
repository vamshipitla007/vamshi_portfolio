import { CallConversation } from "./components/CallConversation";
import { CallList } from "./components/CallList";
import { NewConversationModal } from "./components/NewConversationModal";

const CallsPage = () => {
  return (
    <div className="flex h-full">
      <CallList />
      <CallConversation />
      <NewConversationModal />
    </div>
  );
};

export default CallsPage;