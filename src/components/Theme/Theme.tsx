import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from "react";
import { EThemeType, TThemeProps } from "./Theme.types";

export const ThemeContext = createContext({ theme: EThemeType.DARK });

export const ThemeProvider: FC<PropsWithChildren<TThemeProps>> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    if (theme) {
      const html = document.querySelector("html");

      html?.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
