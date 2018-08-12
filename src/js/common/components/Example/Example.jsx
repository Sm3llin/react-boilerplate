import React, { PureComponent } from 'react';

import './Example.css';

class Example extends PureComponent {
  render() {
    const { example } = this.props;
    const result = example && example.result ? example.result : null;
    const motd = example && example.motd ? example.motd : null;

    if (result && result.size && result.size > 0) {
      return (
        <div className="exampleOutput">
          <h1>Let&apos;s Get <span className="emphasize">{ motd || 'Started'}</span></h1>
          <p>If you see this screen, it means you are all setup \o/</p>

          <i>Example of persistent storage: </i>
          <input
            value={this.props.example.motd}
            onChange={({ target }) => this.props.updateMotd(target.value)}
          />
          <p>The following JSON are showing contents coming from Redux, Saga and Config.</p>
          <pre>
            {JSON.stringify(result.toJS(), undefined, 2)}
          </pre>
          <button onClick={() => this.props.getAwesomeCode()}>start exampleSaga</button>
        </div>
      );
    }
    return <div />;
  }
}

export default Example;
