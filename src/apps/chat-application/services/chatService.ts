import api from './api';
import type { Conversation, Message, SettingsState, User } from '../types';

export const fetchConversations = async () => {
  const { data } = await api.get<Conversation[]>('/chats');
  return data;
};

export const fetchMessages = async (chatId: string) => {
  const { data } = await api.get<Message[]>('/messages');
  return data.filter((message) => message.chatId === chatId);
};

export const fetchContacts = async () => {
  const { data } = await api.get<User[]>('/users');
  return data.map((user) => ({ ...user, favorite: user.role === 'Creator' }));
};

export const fetchSettings = async () => {
  const { data } = await api.get<SettingsState>('/settings');
  return data;
};
