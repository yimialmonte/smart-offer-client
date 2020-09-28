import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Header from './Header';

const AppRouter = () => (
  <Router>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
