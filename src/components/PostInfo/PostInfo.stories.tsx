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
    kind: "вопросы",
    title: "Как перестать делать баги?",
    content:
      "Я работаю в айти гдето около 2 лет, замечаю за собой такой недостаток - очень много мелких багов при разработке, которые часто не выявляются при первичных тестах. В итоге приходится очень часто пушить хот-фиксы. Возможно это связано с самим проектом - стартап, надо быстро, ревью особого нет, серьезного тестирования тоже.",
    readTerm: 2,
    datePublish: new Date(),
  },
};

export const SeveralPosts = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "50%",
        margin: "100px auto",
      }}
    >
      <PostInfo
        kind="вопросы"
        title="Как перестать делать баги?"
        content="Я работаю в айти гдето около 2 лет, замечаю за собой такой недостаток - очень много мелких багов при разработке, которые часто не выявляются при первичных тестах."
        datePublish={new Date()}
      />
      <PostInfo
        kind="вопросы"
        title="Как перестать делать баги?"
        content="Я работаю в айти гдето около 2 лет, замечаю за собой такой недостаток - очень много мелких багов при разработке, которые часто не выявляются при первичных тестах."
        datePublish={new Date()}
      />
      <PostInfo
        kind="вопросы"
        title="Как перестать делать баги?"
        content="Я работаю в айти гдето около 2 лет, замечаю за собой такой недостаток - очень много мелких багов при разработке, которые часто не выявляются при первичных тестах."
        datePublish={new Date()}
        readMinutes={60}
      />
    </div>
  );
};
