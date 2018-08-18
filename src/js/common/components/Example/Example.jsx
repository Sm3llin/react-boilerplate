import React, { Fragment, PureComponent } from 'react';
import { Segment, Header, Button, Input, Message, Icon } from 'semantic-ui-react';

import './Example.css';

class Example extends PureComponent {
  getAwesomeCode = () => this.props.getAwesomeCode();
  updateMotd = ({ target }) => this.props.updateMotd(target.value);

  render() {
    const { example } = this.props;
    const result = example && example.result ? example.result : null;
    const motd = example && example.motd ? example.motd : null;

    if (result && result.size && result.size > 0) {
      return (
        <Fragment>
          <Header as="h1">Let&apos;s Get <span className="emphasize">{ motd || 'Started'}</span></Header>
          <Segment className="exampleOutput">
            <p>If you see this screen, it means you are all setup \o/</p>
            <Message icon>
              <Icon name="angle double up" />
              <Message.Content>
                <Message.Header><i>Example of persistent storage: </i></Message.Header>
                <Input
                  placeholder="Enter persisted text"
                  value={this.props.example.motd}
                  onChange={this.updateMotd}
                />
              </Message.Content>
            </Message>
            <p>The following JSON are showing contents coming from Redux, Saga and Config.</p>
            <pre>
              {JSON.stringify(result.toJS(), undefined, 2)}
            </pre>
            <Button onClick={this.getAwesomeCode}>start exampleSaga</Button>
          </Segment>
        </Fragment>
      );
    }
    return <div />;
  }
}

export default Example;
