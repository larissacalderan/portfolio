"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    try {
      const t = document.documentElement.getAttribute("data-theme") || localStorage.getItem("theme");
      setTheme(t || "dark");
    } catch (e) {
      setTheme("dark");
    }
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    console.log("ThemeToggle: toggling theme", { from: theme, to: next });
    setTheme(next);
    try {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    } catch (e) {
      console.error("ThemeToggle: erro ao salvar tema", e);
    }
  };

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      aria-pressed={theme === "light"}
      onClick={() => {
        console.log("ThemeToggle: click", theme);
        toggle();
      }}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-gray-400 transition-colors hover:text-white"
    >
      {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
