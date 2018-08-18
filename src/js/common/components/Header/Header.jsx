import React, {Fragment, PureComponent} from 'react';
import { withRouter } from 'react-router-dom';

import { Menu, Container } from 'semantic-ui-react';

import './Header.css';

class Header extends PureComponent {
  goto = ({ target }) => {
    const path = target.getAttribute('path');

    if (this.props.location.pathname !== path) {
      this.props.history.push(path)
    }
  };

  render() {
    const { pathname } = this.props.location;
    const routes = [
      { path: '/', title: 'Home' },
      { path: '/page', title: 'Just Another Page' },
    ];

    return (
      <Fragment>
        <div>
          <Menu fixed="top">
            <Container>
              <Menu.Item as="a" header>
                Project Name
              </Menu.Item>
              {routes.map((route) => {
                return (
                  <Menu.Item
                    as="a"
                    active={pathname === route.path}
                    path={route.path}
                    onClick={this.goto}
                  >
                    {route.title}
                  </Menu.Item>
                )
              })}
            </Container>
          </Menu>
        </div>
        <div style={{ marginTop: '5em' }} />
      </Fragment>
    )
  }
}

export default Header;
