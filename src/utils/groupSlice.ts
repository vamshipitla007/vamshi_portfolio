import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface Message {
  id: string;
  sender: "me" | "other";
  type: "text" | "image" | "file";
  text?: string;
  image?: string;
  fileName?: string;
  time: string;
}

export interface Group {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
  pinned: boolean;
  unread: number;
  lastMessage: string;
  time: string;
}

interface GroupState {
  groups: Group[];
  selectedGroup: Group | null;
  messages: Record<string, Message[]>;
}

const initialState: GroupState = {
  groups: [
    {
      id: "1",
      name: "Animal Kingdom",
      avatar: "https://i.pravatar.cc/150?img=11",
      online: true,
      pinned: true,
      unread: 0,
      lastMessage: "You: thnx!",
      time: "9:36",
    },
    {
      id: "2",
      name: "Dog Hat",
      avatar: "https://i.pravatar.cc/150?img=12",
      online: true,
      pinned: true,
      unread: 2,
      lastMessage: "It's so quite outside 😄",
      time: "9:36",
    },
    {
      id: "3",
      name: "Cute Turtle",
      avatar: "https://i.pravatar.cc/150?img=13",
      online: true,
      pinned: false,
      unread: 3,
      lastMessage: "That's It. Goodbye!",
      time: "9:36",
    },
    {
      id: "4",
      name: "Cool Spirit",
      avatar: "https://i.pravatar.cc/150?img=14",
      online: true,
      pinned: false,
      unread: 0,
      lastMessage: "Look what I found",
      time: "9:36",
    },
    {
      id: "5",
      name: "Strange Cat",
      avatar: "https://i.pravatar.cc/150?img=15",
      online: true,
      pinned: false,
      unread: 0,
      lastMessage: "Hi, sorry to bother you",
      time: "9:36",
    },
  ],

  selectedGroup: {
    id: "1",
    name: "Animal Kingdom",
    avatar: "https://i.pravatar.cc/150?img=11",
    online: true,
    pinned: true,
    unread: 0,
    lastMessage: "You: thnx!",
    time: "9:36",
  },

  messages: {
    "1": [
      {
        id: "1",
        sender: "other",
        type: "text",
        text: "Hi 👋, How are ya ?",
        time: "0:12",
      },
      {
        id: "2",
        sender: "me",
        type: "text",
        text: "Hi 👋 Panda, not bad, u ?",
        time: "8:15",
      },
      {
        id: "3",
        sender: "me",
        type: "text",
        text: "Can you send me an abstract image?",
        time: "8:17",
      },
      {
        id: "4",
        sender: "other",
        type: "image",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
        time: "10:35",
      },
      {
        id: "5",
        sender: "other",
        type: "file",
        fileName: "Abstract.png",
        time: "11:25",
      },
      {
        id: "6",
        sender: "me",
        type: "text",
        text: "Can you send it as file ?",
        time: "11:12",
      },
      {
        id: "7",
        sender: "me",
        type: "text",
        text: "Thnx!",
        time: "11:28",
      },
    ],

    "2": [
      {
        id: "1",
        sender: "other",
        type: "text",
        text: "It's so quite outside 😄",
        time: "9:36",
      },
    ],

    "3": [
      {
        id: "1",
        sender: "other",
        type: "text",
        text: "That's It. Goodbye!",
        time: "9:36",
      },
    ],

    "4": [
      {
        id: "1",
        sender: "other",
        type: "text",
        text: "Look what I found",
        time: "9:36",
      },
    ],

    "5": [
      {
        id: "1",
        sender: "other",
        type: "text",
        text: "Hi, sorry to bother you",
        time: "9:36",
      },
    ],
  },
};

const groupSlice = createSlice({
  name: "group",
  initialState,

  reducers: {
    selectGroup: (
      state,
      action: PayloadAction<Group>
    ) => {
      state.selectedGroup = action.payload;
    },

    sendMessage: (
      state,
      action: PayloadAction<string>
    ) => {
      if (!state.selectedGroup) return;

      const groupId =
        state.selectedGroup.id;

      if (!state.messages[groupId]) {
        state.messages[groupId] = [];
      }

      state.messages[groupId].push({
        id: Date.now().toString(),
        sender: "me",
        type: "text",
        text: action.payload,
        time: new Date().toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        ),
      });
    },

    sendImage: (
      state,
      action: PayloadAction<string>
    ) => {
      if (!state.selectedGroup) return;

      const groupId =
        state.selectedGroup.id;

      if (!state.messages[groupId]) {
        state.messages[groupId] = [];
      }

      state.messages[groupId].push({
        id: Date.now().toString(),
        sender: "me",
        type: "image",
        image: action.payload,
        time: new Date().toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        ),
      });
    },

    sendFile: (
      state,
      action: PayloadAction<string>
    ) => {
      if (!state.selectedGroup) return;

      const groupId =
        state.selectedGroup.id;

      if (!state.messages[groupId]) {
        state.messages[groupId] = [];
      }

      state.messages[groupId].push({
        id: Date.now().toString(),
        sender: "me",
        type: "file",
        fileName: action.payload,
        time: new Date().toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        ),
      });
    },
  },
});

export const {
  selectGroup,
  sendMessage,
  sendImage,
  sendFile,
} = groupSlice.actions;

export default groupSlice.reducer;