import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/main/index';
import PostPage from './pages/post/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/post/:userId/:id" component={PostPage}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;