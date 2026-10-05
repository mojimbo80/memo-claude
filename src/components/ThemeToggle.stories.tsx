import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const meta = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

function ThemeToggleStory() {
  const [isDark, setIsDark] = useState(false);
  return <ThemeToggle isDark={isDark} setIsDark={setIsDark} />;
}

export const Default: Story = {
  render: () => <ThemeToggleStory />,
};
