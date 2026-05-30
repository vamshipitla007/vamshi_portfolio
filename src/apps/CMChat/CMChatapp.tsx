import { Route, Routes } from "react-router-dom";
import ChatLayout from "@/components/layout/ChatLayout";
import CallsPage from "@/sections/chat/CallsPage";
import ChatsPage from "@/sections/chat/ChatsPage";
import SettingsPage from "@/sections/chat/SettingsPage";
import TeamsPage from "@/sections/chat/TeamsPage";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import Profile from "@/sections/chat/Profile";

const CMChatapp = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<ChatLayout />}>
          <Route path="chat" index element={<ChatsPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="calls" element={<CallsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default CMChatapp;
