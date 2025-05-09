"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")

  // 从本地存储加载主题设置
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setThemeState(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  // 保存主题设置到本地存储并应用
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  // 切换主题
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
