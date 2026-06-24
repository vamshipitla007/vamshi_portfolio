import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useLocalStorage<ThemeMode>('realestate-theme', 'light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleTheme: () => setMode(mode === 'dark' ? 'light' : 'dark'),
    }),
    [mode, setMode],
  );

  if (!mounted) return null;

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
