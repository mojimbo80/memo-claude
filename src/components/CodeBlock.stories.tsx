import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./CodeBlock";

const meta = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: `function hello() {
  console.log("Hello, World!");
  # This is a comment
  return true;
}`,
  },
};

export const LongCode: Story = {
  args: {
    code: `// Configuration file
const config = {
  env: "production",
  # API endpoints
  api: {
    host: "https://api.example.com",
    timeout: 5000,
  },
  # Features
  features: {
    auth: true,
    logging: true,
  },
};

export default config;`,
  },
};
