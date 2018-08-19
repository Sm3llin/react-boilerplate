import React, { PureComponent } from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'


export default class ApplicationSidebar extends PureComponent {
  render() {
    return (
      <Sidebar.Pushable as={Segment} basic style={{ marginTop: 0 }}>
        <Sidebar as={Menu} animation="overlay" icon="labeled" inverted vertical visible width="thin">
          <Menu.Item>
            <Icon name="balance scale" />
          </Menu.Item>
          <Menu.Item>
            Application Views
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic style={{ marginTop: 0, marginLeft: '150px', height: '100%' }}>
            {this.props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
