import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import PersistGate from './common/components/PersistGate';

export default class Root extends Component {
  get content() {
    return (
      <Router>
        {this.props.routes}
      </Router>
    );
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <PersistGate persistor={this.props.persistor}>
          {this.content}
        </PersistGate>
      </Provider>
    );
  }
}

Root.propTypes = {
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};
