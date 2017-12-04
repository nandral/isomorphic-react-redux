# isomorphic-react-redux

Isomorphic SPA developed using react, react-router, redux, express, babel, wepback etc..

### Demo on Heroku https://nandral-ssr-react-redux.herokuapp.com/

#### Modern JavaScript features used

* es2017 (async/await) - modern way of handling asynchronous JavaScript code
* const, let for variable declaration
* es6 destructuring function arguments
* es6 string template literals

**Start Development Server**

```
npm install
npm run dev
```

#### Methodlogies followed / modules used

* `babel` for transpiling
* `webpack` for bundling
* `bootstrap` for styling
* `redux` for managing application state
* `react-router` for client-side routing
* `react-router-config` for Static route configuration & loading data on the server before rendering
  react components on server

* `StaticRouter` for use when doing server-side-rendering
* `BrowserRouter` for use when running in a browser
* `src/data` carOfTheWeek, makes, models data is loaded into redux store using reducers
* `No actions/actionCreators` as we are loading the data from JSON files directly into store. If
  there is requirement to read data from a remote server using REST or read from DB, then `action
  creators` are required and `redux-thunk` can be used for action dispatch hook.
* `ReactDOM.hydrate` used to hydrate a container whose HTML contents were rendered by
  ReactDOMServer.
* `window.INITIAL_STATE` for state rehydration to pass initial state from server to client

#### TODO

* setup webpack for dev and prod separately
* setup Jest, Enzyme for testing
