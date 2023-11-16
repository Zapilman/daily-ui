import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Typography } from "../Typography";
import { Loader } from "lucide-react";

const meta = {
  title: "Example/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple = () => {
  return (
    <Button>
      <Typography>Subscribe</Typography>
    </Button>
  );
};

export const WithIcon = () => {
  return (
    <Button style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <Loader />
      <Typography>Subscribe</Typography>
    </Button>
  );
};
