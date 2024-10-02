import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { appRoutes } from "@shared/constants/constants";
import { Layout } from "./Layout";
import { Loading } from "@shared/ui";

const HomePage = lazy(() => import("@pages/home/HomePage"));
const NewsPage = lazy(() => import("@pages/news/NewsPage"));
const ExpertsPage = lazy(() => import("@pages/experts/ExpertsPage"));
const ProjectsPage = lazy(() => import("@pages/projects/ProjectsPage"));
const ContactsPage = lazy(() => import("@pages/contacts/ContactsPage"));
const NotFoundPage = lazy(() => import("@pages/not-found/NotFoundPage"));
const InvestorsPage = lazy(() => import("@pages/investors/InvestorsPage"));

export const Router = createBrowserRouter([
  {
    path: appRoutes.home,
    element: (
      <Suspense fallback={<Loading />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: appRoutes.home,
        element: <HomePage />,
      },
      {
        path: appRoutes.news,
        element: <NewsPage />,
      },
      {
        path: appRoutes.experts,
        element: <ExpertsPage />,
      },
      {
        path: appRoutes.projects,
        element: <ProjectsPage />,
      },
      {
        path: appRoutes.contacts,
        element: <ContactsPage />,
      },
      {
        path: appRoutes.investors,
        element: <InvestorsPage />,
      },
      {
        path: appRoutes.not_found,
        element: <NotFoundPage />,
      },
    ],
  },
]);
