import { createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Ozzios Documentation"
      },
      {
        name: "description",
        content: "Learn how to manage your clients, save time with AI assistants, and grow your business—all in one place."
      }
    ]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ React.createElement(RootDocument, null, /* @__PURE__ */ React.createElement(Outlet, null));
}
function RootDocument({ children }) {
  return /* @__PURE__ */ React.createElement("html", { lang: "en", suppressHydrationWarning: true }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(HeadContent, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", { id: "root" }, children), /* @__PURE__ */ React.createElement(Scripts, null)));
}
const $$splitComponentImporter = () => import("./index-DmoWLYyW.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true
  });
  return router;
}
export {
  getRouter
};
