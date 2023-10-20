import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log('Email:', email);
    console.log('Password:', password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2>LoginForm</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
import React from 'react';
import LoginForm from './LoginForm'; // Assuming the LoginForm component is in a separate file

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
