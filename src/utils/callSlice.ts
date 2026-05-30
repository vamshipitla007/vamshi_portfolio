import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  showNewCallModal: false,
  selectedCall: null,

  callLogs: [
    {
      id: "1",
      name: "Dinesh",
      avatar: "https://i.pravatar.cc/150?img=1",
      online: true,
      type: "missed",
      time: "Yesterday, 21:29",
      chatId: "1",
    },
    {
      id: "2",
      name: "Dog Hat",
      avatar: "https://i.pravatar.cc/150?img=2",
      online: true,
      type: "incoming",
      time: "Yesterday, 16:53",
      chatId: "2",
    },
    {
      id: "3",
      name: "Cute Turtle",
      avatar: "https://i.pravatar.cc/150?img=3",
      online: false,
      type: "outgoing",
      time: "Yesterday, 16:53",
      chatId: "3",
    },
  ],
};

const callSlice = createSlice({
  name: "call",
  initialState,

  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },

    openNewCallModal(state) {
      state.showNewCallModal = true;
    },

    closeNewCallModal(state) {
      state.showNewCallModal = false;
    },

    selectCall(state, action) {
      state.selectedCall = action.payload;
    },
  },
});

export const {
  setSearch,
  openNewCallModal,
  closeNewCallModal,
  selectCall,
} = callSlice.actions;

export default callSlice.reducer;