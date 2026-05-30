import { dummyChats } from "@/data/dummyChats";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: dummyChats,
  selectedChat: dummyChats[0],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,

  reducers: {
    selectChat: (state, action) => {
      state.selectedChat = action.payload;
    },

    sendMessage: (state, action) => {
      state.selectedChat.messages.push({
        id: Date.now().toString(),
        sender: "me",
        text: action.payload,
        time: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const {
  selectChat,
  sendMessage,
} = chatSlice.actions;

export default chatSlice.reducer;