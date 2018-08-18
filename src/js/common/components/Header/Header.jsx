import React, { Fragment, PureComponent } from 'react';
import { Menu, Container } from 'semantic-ui-react';

import './Header.css';

class Header extends PureComponent {
  goto = (_, data) => {
    if (this.props.location.pathname !== data.path) {
      this.props.history.push(data.path)
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
              <Menu.Item as="a" path="/" onClick={this.goto} header>
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
        <div style={{ paddingTop: '5em' }} />
      </Fragment>
    )
  }
}

export default Header;
