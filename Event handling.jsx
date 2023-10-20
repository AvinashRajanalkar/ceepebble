import React from 'react';

class ButtonClicker extends React.Component {
  handleClick = () => {
    alert('Button clicked');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Button Clicker</button>
      </div>
    );
  }
}

export default ButtonClicker;
