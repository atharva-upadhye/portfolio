import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "system" | "dark" | "light";

const themeContext = createContext<{
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}>({
  theme: "system",
  setTheme: () => {
    console.error("Provider not found in parent tree");
  },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // TODO: resolve error
  // ReferenceError: window is not defined
  const watchMediaSystemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );
  const [isSystemThemeDark, setIsSystemThemeDark] = useState(
    watchMediaSystemTheme.matches
  );
  useEffect(() => {
    const handleChangeSystemTheme = (e: MediaQueryListEvent) => {
      setIsSystemThemeDark(e.matches);
    };
    watchMediaSystemTheme.addEventListener("change", handleChangeSystemTheme);
    return () => {
      watchMediaSystemTheme.removeEventListener(
        "change",
        handleChangeSystemTheme
      );
    };
  }, []);
  const [theme, setTheme] = useState<Theme>("system");
  return (
    <themeContext.Provider
      value={{
        theme:
          theme === "system" ? (isSystemThemeDark ? "dark" : "light") : theme,
        setTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export function useThemeContext() {
  const cv = useContext(themeContext);
  if (!cv) throw "Provider not found in parent component tree";
  const { theme, setTheme } = cv;
  return { theme, setTheme };
}
