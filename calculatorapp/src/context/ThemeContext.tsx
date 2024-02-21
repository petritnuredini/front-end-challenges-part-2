import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { AppContextProps } from "../types/types";
import { theme1, theme2, theme3 } from "../constants/constants";

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [themeName, setThemeName] = useState("theme1");
  const [theme, setTheme] = useState<any>(theme1);

  useEffect(() => {
    setTheme(
      themeName === "theme1" ? theme1 : themeName === "theme2" ? theme2 : theme3
    );
  }, [themeName]);

  const contextValue: AppContextProps = {
    themeName,
    setThemeName,
    theme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
