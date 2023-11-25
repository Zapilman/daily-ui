import { Meta } from "@storybook/react";
import Avatar from "./Avatar";
import { Typography } from "../Typography";
import { ComponentWrapper } from "../ComponentWrapper/ComponentWrapper";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <ComponentWrapper>
        <Story />
      </ComponentWrapper>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Avatar>;

export default meta;

export const Simple = () => {
  return (
    <Avatar
      image="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg"
      size="l"
    />
  );
};

export const Full = () => {
  return (
    <Avatar
      image="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg"
      size="l"
      full
      primaryText="Yurii Zdorov"
      secondaryText="14 мая 2023 г. • 2 min read"
    />
  );
};

export const All = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <Typography>Size s</Typography>
        <Avatar
          image="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg"
          size="s"
        />
      </div>
      <div>
        <Typography>Size normal</Typography>
        <Avatar image="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg" />
      </div>
      <div>
        <Typography>Size m</Typography>
        <Avatar
          image="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg"
          size="m"
        />
      </div>
      <div>
        <Typography>Size l</Typography>
        <Avatar
          image="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg"
          size="l"
        />
      </div>
    </div>
  );
};
