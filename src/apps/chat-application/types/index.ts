export type ThemeMode = 'light' | 'dark';
export type PresenceStatus = 'online' | 'offline' | 'away';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  username: string;
  avatar: string;
  cover: string;
  about: string;
  role: string;
  status: PresenceStatus;
  unread?: number;
  lastSeen?: string;
}

export interface Conversation {
  id: string;
  participantId: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  pinned: boolean;
  archived: boolean;
  online: boolean;
  accent: string;
  type: 'direct' | 'group';
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  timestamp: string;
  type?: 'text' | 'image' | 'voice';
  status?: 'sent' | 'delivered' | 'read';
  isEdited?: boolean;
}

export interface Contact extends User {
  favorite?: boolean;
}

export interface SettingsState {
  notifications: boolean;
  privacy: boolean;
  appearance: 'system' | 'dark' | 'light';
  language: string;
  reducedMotion: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  rememberMe: boolean;
}

export interface ChatContextValue {
  auth: AuthState;
  theme: ThemeMode;
  conversations: Conversation[];
  contacts: Contact[];
  messages: Message[];
  settings: SettingsState;
  selectedChatId: string | null;
  isLoading: boolean;
  error: string | null;
  loginUser: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  signupUser: (payload: SignupPayload) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  selectChat: (chatId: string) => void;
  sendMessage: (content: string) => void;
  toggleTheme: () => void;
  updateSettings: (next: Partial<SettingsState>) => void;
  logout: () => void;
}

export interface SignupPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  avatar?: string;
}
