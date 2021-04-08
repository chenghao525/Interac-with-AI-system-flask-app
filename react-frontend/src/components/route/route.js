import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import MainPage from "../../pages/MainPage/MainPage";
import StarterPage from "../../pages/StarterPage/StarterPage";
import PageNotFound from '../../pages/404';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/mainpage" component={MainPage} />
      <Route exact path="/404" component={PageNotFound} />
      <Route path="/" component={StarterPage} />
      <Redirect exact to="/404" />
    </Switch>
  )
}

export default Router;