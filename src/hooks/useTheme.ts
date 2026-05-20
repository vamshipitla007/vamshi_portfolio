import { useEffect, useState } from "react";

export default function useTheme() {
  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    const updateTheme = () => {
      const isDark = mediaQuery.matches;

      setDarkMode(isDark);

      document.documentElement.classList.toggle(
        "dark",
        isDark,
      );
    };

    updateTheme();

    mediaQuery.addEventListener(
      "change",
      updateTheme,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateTheme,
      );
    };
  }, []);

  return darkMode;
}