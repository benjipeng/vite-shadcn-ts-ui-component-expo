import React, { useState, useEffect } from "react";
import { SquareFunction, Sun, Moon } from "lucide-react";

const NavigationBar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-background text-foreground">
      <div className="flex items-center space-x-2">
        <SquareFunction className="h-6 w-6" />
        <span className="text-xl font-bold">AppCubic</span>
      </div>

      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-primary">
            Home
          </a>
        </li>
        <li>
          <a href="/features" className="hover:text-primary">
            Features
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-primary">
            About
          </a>
        </li>
      </ul>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    </nav>
  );
};

export default NavigationBar;
