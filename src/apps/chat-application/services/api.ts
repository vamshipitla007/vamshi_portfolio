import axios from 'axios';
import users from '../mock/users.json';
import chats from '../mock/chats.json';
import messages from '../mock/messages.json';
import settings from '../mock/settings.json';
import notifications from '../mock/notifications.json';

const mockData: Record<string, unknown> = {
  '/users': users,
  '/chats': chats,
  '/messages': messages,
  '/settings': settings,
  '/notifications': notifications,
};

const delay = (ms = 500) => new Promise((resolve) => window.setTimeout(resolve, ms));

const api = axios.create({
  baseURL: '/api',
  timeout: 1200,
  adapter: async (config) => {
    const url = config.url ?? '/';
    const payload = mockData[url] ?? mockData[`/${url.replace(/^\//, '')}`] ?? null;
    await delay();
    return {
      data: payload,
      status: 200,
      statusText: 'OK',
      headers: {},
      config,
    };
  },
});

export default api;
