import React from 'react';


class PersistGate extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hydrated: !!this.props.disable,
    }
  }

  componentWillMount() {
    this.props.persistor.rehydrated.then(() => {
      this.setState({ hydrated: true })
    })
  }

  render() {
    console.log(this.props);
    if (this.state.hydrated) {
      return this.props.children;
    }
    return this.props.loading || null
  }
}

export default PersistGate;
