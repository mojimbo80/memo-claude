import type { Meta, StoryObj } from "@storybook/react";
import { createMemoryHistory, createRouter, RootRoute, Route } from "@tanstack/react-router";
import { ContentPage } from "./ContentPage";
import { PAGES } from "../pages";

const meta = {
  title: "Pages/ContentPage",
  component: ContentPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ContentPage>;

export default meta;
type Story = StoryObj<typeof meta>;

function createTestRouterWithPage(page = PAGES[0]) {
  const rootRoute = new RootRoute({
    component: () => (
      <div style={{ padding: "2rem" }}>
        <ContentPage page={page} />
      </div>
    ),
  });

  const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <div>Home</div>,
  });

  const pageRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/$pageId",
    component: () => <ContentPage page={page} />,
  });

  const routeTree = rootRoute.addChildren([indexRoute, pageRoute]);
  const memoryHistory = createMemoryHistory({ initialEntries: ["/" + page.id] });
  return createRouter({ routeTree, history: memoryHistory });
}

export const FirstPage: Story = {
  render: () => {
    const TestRouter = createTestRouterWithPage(PAGES[0]);

    declare module "@tanstack/react-router" {
      interface Register {
        router: typeof TestRouter;
      }
    }

    return <TestRouter.RootRoute.component />;
  },
};

export const SecondPage: Story = {
  render: () => {
    const TestRouter = createTestRouterWithPage(PAGES[1]);

    declare module "@tanstack/react-router" {
      interface Register {
        router: typeof TestRouter;
      }
    }

    return <TestRouter.RootRoute.component />;
  },
};
