import { useEffect, useState } from "react";

export function useTheme() {
  const preferred = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored || (preferred.matches ? "dark" : "light");
  });

  useEffect(() => {
    const html = document.querySelector("html");
    html.dataset["theme"] = theme;
    document.documentElement.style.visibility = '';
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
