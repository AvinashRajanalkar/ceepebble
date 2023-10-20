import React from 'react';

class Greetings extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Welcome to Cineepebble We're glad to have you here!</p>
      </div>
    );
  }
}

export default Greetings;
