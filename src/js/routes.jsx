import React, {Fragment} from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Header } from './common/components/Header';
import { Sidebar } from './common/components/Sidebar';
import ExampleRouteHandler from './views/example';

import '../assets/fonts/fonts.css';

const JustAnotherPage = () => (
  <div>
    <h2>This is Just Another Page</h2>
    <p>Please remove this from your route, it is just to show case basic setup for router.</p>
  </div>
);

const HeaderWithRouter = withRouter((props) => <Header {...props} />);

module.exports = (
  <Fragment>
    <HeaderWithRouter />
    <Sidebar className="container">
      <div style={{ paddingTop: '3em' }} />
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route path="/page" component={JustAnotherPage} />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </Sidebar>
  </Fragment>
);
