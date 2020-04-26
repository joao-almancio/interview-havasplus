import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main/index';
import Post from './pages/post/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/post/:id" component={Post}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;