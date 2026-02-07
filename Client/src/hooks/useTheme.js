import { useEffect, useState } from "react";

export function useTheme() {
  const root = document.getElementById("root");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      root.dataset["theme"] = stored;
    } else {
      const systemTheme = preferred.matches ? "dark" : "light";
      setTheme(systemTheme);
      localStorage.setItem("theme", systemTheme);
      root.dataset["theme"] = systemTheme;
    }
    console.log(root);
  }, []);

  const themeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    root.dataset["theme"] = newTheme;
  };

  return [theme, themeToggle];
}
