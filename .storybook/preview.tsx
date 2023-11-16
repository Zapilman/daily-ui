import type { Decorator, Preview } from "@storybook/react";
import "styles/core.css";
import ThemeProvider from "../styles/theme/ThemeProvider";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const withTheme: Decorator = (StoryFn, context) => {
  // Get the active theme value from the story parameter
  const { theme } = context.parameters;
  console.log("THEME", context.parameters);

  return (
    <ThemeProvider>
      <StoryFn />
    </ThemeProvider>
  );
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};
export const decorators = [withTheme];
export default preview;
