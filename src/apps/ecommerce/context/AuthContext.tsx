import React, { createContext, useContext, useState } from 'react';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const isAuthenticated = !!user;

  const login = async (email: string) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const newUser: User = {
          id: Date.now().toString(),
          email,
          name: email.split('@')[0],
          token: 'mock-token-' + Date.now(),
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        resolve();
      }, 500);
    });
  };

  const signup = async (name: string, email: string) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const newUser: User = {
          id: Date.now().toString(),
          email,
          name,
          token: 'mock-token-' + Date.now(),
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        resolve();
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
