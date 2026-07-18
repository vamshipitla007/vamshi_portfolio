import api from './api';
import type { SignupPayload, User } from '../types';

export const loginUser = async (email: string, password: string) => {
  const { data } = await api.get<User[]>('/users');
  const user = data.find((entry) => entry.email.toLowerCase() === email.toLowerCase() && entry.password === password);
  if (!user) {
    throw new Error('We could not find a matching account.');
  }
  return { user: { ...user, password: '' } };
};

export const signupUser = async (payload: SignupPayload) => {
  const { data } = await api.get<User[]>('/users');
  const exists = data.some((user) => user.email.toLowerCase() === payload.email.toLowerCase());
  if (exists) {
    throw new Error('An account with this email already exists.');
  }
  const createdUser: User = {
    id: `user-${Date.now()}`,
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    password: payload.password,
    username: payload.name.toLowerCase().replace(/\s+/g, '.'),
    avatar: payload.avatar ?? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    cover: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    about: 'New to the chat app and ready to connect.',
    role: 'Member',
    status: 'online',
  };
  return { user: createdUser };
};

export const resetPassword = async (email: string) => {
  const { data } = await api.get<User[]>('/users');
  const exists = data.some((user) => user.email.toLowerCase() === email.toLowerCase());
  if (!exists) {
    throw new Error('We could not find an account with that email.');
  }
  return { success: true };
};
