import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import MainPage from "../../pages/MainPage/MainPage";
import StarterPage from "../../pages/StarterPage/StarterPage";
import PageNotFound from '../../pages/404';
import QuestionPage from "../../pages/QuestionPage/QuestionPage";
import ReadyPage from "../../pages/ReadyPage/ReadyPage";
import TrailPage from "../../pages/TrailPage/TrailPage"
import DemographicPage from "../../pages/DemographicPage/DemographicPage";


const Router = () => {
  return (
    <Switch>
        <Route path="/" component={StarterPage} />
        <Route exact path="/trailPage" component={TrailPage} />
        <Route exact path="/readyPage" component={ReadyPage} />
        <Route exact path="/demographic" component={DemographicPage} />
        <Route exact path="/questionnaire" component={QuestionPage} />
        <Route exact path="/mainpage" component={MainPage} />
        <Route exact path="/404" component={PageNotFound} />

    </Switch>
  )
}

export default Router;