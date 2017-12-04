import React from "react";

import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

import App from "./App";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...SearchPage,
        path: "/search"
      },
      {
        ...DetailsPage,
        path: "/make/model/:id"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
