import * as React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import MainEntry from "../container/MainEntry";

/*
Disable first due to some issues:
https://github.com/gaearon/react-hot-loader/issues/1000

import { hot } from 'react-hot-loader'
declare let module: any

if (module.hot) {
  module.hot.accept();
}
*/
const baseURL = process.env.NODE_ENV === "development" ? '/' : '/workout-calculator/';
const App = () => (
  <Switch>
    <Route exact={true} path={baseURL} children={<MainEntry />} />
    {/*
      Route to home is not working in here
      [Note]: if we want to support client-side route in gh-pages, need to hack 404
      https://github.com/rafrex/spa-github-pages/blob/gh-pages/404.html
      see details: https://github.com/rafrex/spa-github-pages
    */}
    <Route exact={true} path={`${baseURL}home`} children={<MainEntry />} />
  </Switch>
);

export default App;
