import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
  blue: {
    name: "blue",
    background: "#020617",
    card: "#111827",
    accent: "#3b82f6",
    text: "#ffffff",
  },

  emerald: {
    name: "emerald",
    background: "#022c22",
    card: "#064e3b",
    accent: "#10b981",
    text: "#ffffff",
  },

  purple: {
    name: "purple",
    background: "#1e1b4b",
    card: "#312e81",
    accent: "#8b5cf6",
    text: "#ffffff",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "blue"
  );

  useEffect(() => {
    const current = themes[theme];

    document.documentElement.style.setProperty(
      "--bg",
      current.background
    );

    document.documentElement.style.setProperty(
      "--card",
      current.card
    );

    document.documentElement.style.setProperty(
      "--accent",
      current.accent
    );

    document.documentElement.style.setProperty(
      "--text",
      current.text
    );

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);