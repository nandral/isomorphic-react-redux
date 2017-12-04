const PORT = process.env.PORT || 3000;
import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createServerStore from "./helpers/createServerStore";
import { matchRoutes } from "react-router-config";

import Routes from "./client/Routes";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createServerStore();
  //Initialise and load data into the store
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);
    if (context.notFound) res.status(404);
    res.send(content);
  });
  //
});

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT} .... `);
});
