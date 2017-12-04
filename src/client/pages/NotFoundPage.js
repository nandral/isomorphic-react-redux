import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h2>OOPs Page not found !!</h2>;
};

export default {
  component: NotFoundPage
};
