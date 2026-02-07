import { useEffect, useState } from "react";

export function useTheme() {
  const preferred = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
    else {
      const systemTheme = preferred.matches ? "dark" : "light";
      setTheme(systemTheme);
      localStorage.setItem("theme", systemTheme);
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    html.dataset["theme"] = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return [theme, themeToggle];
}
