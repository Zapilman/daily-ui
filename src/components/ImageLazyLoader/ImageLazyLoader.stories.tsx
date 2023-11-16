import type { Meta, StoryObj } from "@storybook/react";
import ImageLazyLoader from "./ImageLazyLoader";

const meta = {
  title: "Example/ImageLazyLoader",
  component: ImageLazyLoader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ImageLazyLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBLORxmuwMNWRDP-AHNGnLl9fO-vaHpr1iA&usqp=CAU",
    alt: "alt text",
  },
};

export const WithLoader = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      <ImageLazyLoader src={Simple.args?.src} />
    </div>
  );
};

export const BigCount = () => {
  const arr = Array.from({ length: 122 }).fill(0);
  return (
    <div>
      {arr.map(() => {
        return (
          <div
            style={{
              width: "200px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              border: "1px solid black",
            }}
          >
            <ImageLazyLoader src={Simple.args?.src} />
          </div>
        );
      })}
    </div>
  );
};
