import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rehydrated: false,
    }
  }

  componentDidMount() {
    this.props.persistor.rehydrated.then(() => {
      this.setState({ rehydrated: true })
    })
  }

  get content() {
    return (
      <Router>
        {this.props.routes}
      </Router>
    );
  }

  render() {
    if (this.state.rehydrated) {
      return (
        <Provider store={this.props.store}>
          {this.content}
        </Provider>
      );
    }
    return (
      <div />
    )
  }
}

Root.propTypes = {
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};
