import { createHashHistory, createRouter, RootRoute, Route, RouterProvider } from "@tanstack/react-router";
import { PAGES } from "./pages";
import { Home } from "./components/Home";
import { ContentPage } from "./components/ContentPage";
import { RootLayout } from "./components/RootLayout";

const rootRoute = new RootRoute({
  component: RootLayout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const pageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$pageId",
  component: () => {
    const { pageId } = pageRoute.useParams();
    const page = PAGES.find((p) => p.id === pageId);

    if (!page) {
      return (
        <div>
          <h1>Page non trouvée</h1>
          <p>Le thème "{pageId}" n'existe pas.</p>
        </div>
      );
    }

    return <ContentPage page={page} />;
  },
});

const routeTree = rootRoute.addChildren([indexRoute, pageRoute]);

const hashHistory = createHashHistory();
const router = createRouter({ routeTree, history: hashHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return <RouterProvider router={router} />;
}
