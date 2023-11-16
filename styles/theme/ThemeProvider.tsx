import React, { PropsWithChildren, useState } from "react";

export enum EThemeType {
  DARK = "dark",
  LIGHT = "light",
}

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<EThemeType>(
    matchMedia("(prefers-color-scheme: dark)").matches
      ? EThemeType.DARK
      : EThemeType.LIGHT
  );
  return <div>{children}</div>;
};

export default ThemeProvider;
