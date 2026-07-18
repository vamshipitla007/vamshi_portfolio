import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import type { ChatContextValue, Contact, Conversation, Message, SettingsState, SignupPayload, ThemeMode, User } from '../types';
import { fetchContacts, fetchConversations, fetchMessages, fetchSettings } from '../services/chatService';
import { loginUser, resetPassword, signupUser } from '../services/authService';

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

const getStoredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark';
  return (window.localStorage.getItem('chat-theme') as ThemeMode | null) ?? 'dark';
};

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState({ user: null as User | null, isAuthenticated: false, rememberMe: false });
  const [theme, setTheme] = useState<ThemeMode>(getStoredTheme);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState<SettingsState>({ notifications: true, privacy: false, appearance: 'dark', language: 'English', reducedMotion: false });

  useEffect(() => {
    const bootstrap = async () => {
      try {
        setIsLoading(true);
        const [chatData, contactData, messageData, settingData] = await Promise.all([
          fetchConversations(),
          fetchContacts(),
          fetchMessages('chat-1'),
          fetchSettings(),
        ]);
        setConversations(chatData);
        setContacts(contactData);
        setMessages(messageData);
        setSettings(settingData);
        setSelectedChatId(chatData[0]?.id ?? null);
      } catch (err) {
        setError('We could not load your conversations right now.');
      } finally {
        setIsLoading(false);
      }
    };

    bootstrap();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('chat-theme', theme);
  }, [theme]);

  const loginUserHandler = async (email: string, password: string, rememberMe = false) => {
    setIsLoading(true);
    try {
      const res = await loginUser(email, password);
      setAuth({ user: res.user, isAuthenticated: true, rememberMe });
      setError(null);
      toast.success(`Welcome back, ${res.user.name}!`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      toast.error(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signupUserHandler = async (payload: SignupPayload) => {
    setIsLoading(true);
    try {
      const res = await signupUser(payload);
      setAuth({ user: res.user, isAuthenticated: true, rememberMe: true });
      setError(null);
      toast.success(`Account created for ${res.user.name}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
      toast.error(err instanceof Error ? err.message : 'Signup failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPasswordHandler = async (email: string) => {
    setIsLoading(true);
    try {
      await resetPassword(email);
      setError(null);
      toast.success('Password reset link sent to your inbox.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Password reset failed');
      toast.error(err instanceof Error ? err.message : 'Password reset failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const selectChat = (chatId: string) => {
    setSelectedChatId(chatId);
  };

  const sendMessage = (content: string) => {
    if (!selectedChatId || !content.trim()) return;
    const draft: Message = {
      id: `message-${Date.now()}`,
      chatId: selectedChatId,
      senderId: auth.user?.id ?? 'user-1',
      content: content.trim(),
      timestamp: 'now',
      type: 'text',
      status: 'read',
    };
    setMessages((prev) => [...prev, draft]);
    toast.success('Message sent');
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const updateSettings = (next: Partial<SettingsState>) => {
    setSettings((prev) => ({ ...prev, ...next }));
  };

  const logout = () => {
    setAuth({ user: null, isAuthenticated: false, rememberMe: false });
    toast.success('Logged out');
  };

  const value = useMemo<ChatContextValue>(() => ({
    auth,
    theme,
    conversations,
    contacts,
    messages,
    settings,
    selectedChatId,
    isLoading,
    error,
    loginUser: loginUserHandler,
    signupUser: signupUserHandler,
    resetPassword: resetPasswordHandler,
    selectChat,
    sendMessage,
    toggleTheme,
    updateSettings,
    logout,
  }), [auth, contacts, conversations, error, isLoading, messages, selectedChatId, settings, theme]);

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used inside ChatProvider');
  }
  return context;
}
