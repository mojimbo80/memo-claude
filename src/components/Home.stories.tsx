import type { Meta, StoryObj } from "@storybook/react";
import { createMemoryHistory, createRouter, RootRoute, Route } from "@tanstack/react-router";
import { Home } from "./Home";

const meta = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

function createTestRouter() {
  const rootRoute = new RootRoute({
    component: () => (
      <div style={{ padding: "2rem" }}>
        <Home />
      </div>
    ),
  });

  const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
  });

  const routeTree = rootRoute.addChildren([indexRoute]);
  const memoryHistory = createMemoryHistory({ initialEntries: ["/"] });
  return createRouter({ routeTree, history: memoryHistory });
}

const TestRouter = createTestRouter();

export const Default: Story = {
  render: () => {
    declare module "@tanstack/react-router" {
      interface Register {
        router: typeof TestRouter;
      }
    }

    return <TestRouter.RootRoute.component />;
  },
};
