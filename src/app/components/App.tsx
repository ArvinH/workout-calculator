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

const App = () => (
  <Switch>
    <Route exact={true} path="/" children={<MainEntry />} />
    <Route exact={true} path="/home" children={<MainEntry />} />
  </Switch>
);

export default App;
