import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/main/index';
import Post from './pages/post/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route path="/post/:id" component={Post}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;