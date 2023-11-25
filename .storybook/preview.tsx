import type { Decorator, Preview } from "@storybook/react";
import "styles/core.css";
import React from "react";
import { ThemeProvider } from "../src/components/Theme/Theme";
import { EThemeType } from "../src/components/Theme/Theme.types";

const withTheme: Decorator = (StoryFn, context) => {
  // Get the active theme value from the story parameter
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={theme}>
      <StoryFn />
    </ThemeProvider>
  );
};

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
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: EThemeType.LIGHT,
      toolbar: {
        // The icon for the toolbar item
        icon: "globe",
        // Array of options
        items: [
          { value: EThemeType.LIGHT, title: "light" },
          { value: EThemeType.DARK, title: "dark" },
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
      },
    },
  },
  decorators: [withTheme],
};

// export const globalTypes = {
//   theme: {
//     name: "Theme",
//     description: "Global theme for components",
//     defaultValue: "light",
//     toolbar: {
//       // The icon for the toolbar item
//       icon: "circlehollow",
//       // Array of options
//       items: [
//         { value: "light", icon: "circlehollow", title: "light" },
//         { value: "dark", icon: "circle", title: "dark" },
//       ],
//       // Property that specifies if the name of the item will be displayed
//       showName: true,
//     },
//   },
// };
// export const decorators = [withTheme];
export default preview;
