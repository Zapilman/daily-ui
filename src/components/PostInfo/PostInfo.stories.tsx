import type { Meta, StoryObj } from "@storybook/react";
import PostInfo from "./PostInfo";

const meta = {
  title: "Example/PostInfo",
  component: PostInfo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof PostInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: "Как перестать делать баги?",
    previewText:
      "Я работаю в айти гдето около 2 лет, замечаю за собой такой недостаток - очень много мелких багов при разработке, которые часто не выявляются при первичных тестах. В итоге приходится очень часто пушить хот-фиксы. Возможно это связано с самим проектом - стартап, надо быстро, ревью особого нет, серьезного тестирования тоже.",
    readMinutes: 2,
    datePublish: new Date(),
  },
};

export const SeveralPosts = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "90%",
        margin: "100px auto",
      }}
    >
      <PostInfo
        imageUrl="https://seniorsoftwarevlogger.com/content/images/size/w1000/2023/03/Dima_Rozhkov_a_copic_brush_pen_illustration_of_a_web_UI_dashboa_a6adbf22-f199-4c1c-b410-362de227d4fb.png"
        title="Как перестать делать баги?"
        tags={["humor", "lifestyle"]}
        previewText="Я работаю в айти гдето около 2 лет, замечаю за собой такой недостаток - очень много мелких багов при разработке, которые часто не выявляются при первичных тестах."
        datePublish={new Date()}
      />
      <PostInfo
        imageUrl="https://seniorsoftwarevlogger.com/content/images/size/w1000/2023/03/Dima_Rozhkov_a_copic_brush_pen_illustration_of_a_web_UI_dashboa_a6adbf22-f199-4c1c-b410-362de227d4fb.png"
        title="Как перестать делать баги?"
        tags={["code", "work"]}
        previewText="Я работаю в айти гдето около 2 лет, замечаю за собой такой недостаток - очень много мелких багов при разработке, которые часто не выявляются при первичных тестах."
        datePublish={"2023-11-15T14:02:32.962Z"}
      />
      <PostInfo
        imageUrl="https://seniorsoftwarevlogger.com/content/images/size/w1000/2023/03/Dima_Rozhkov_a_copic_brush_pen_illustration_of_a_web_UI_dashboa_a6adbf22-f199-4c1c-b410-362de227d4fb.png"
        title="Как перестать делать баги?"
        previewText="Я работаю в айти гдето около 2 лет, замечаю за собой такой недостаток - очень много мелких багов при разработке, которые часто не выявляются при первичных тестах."
        datePublish={new Date()}
        readMinutes={60}
      />
    </div>
  );
};
