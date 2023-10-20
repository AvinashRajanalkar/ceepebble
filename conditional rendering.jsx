import React from 'react';

class ConditionalDisplay extends React.Component {
  render() {
    const { show } = this.props;

    if (show) {
      return <div>Hello, World!</div>;
    } else {
      return null;
    }
  }
}

export default ConditionalDisplay;
