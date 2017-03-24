import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConf: '',
      validator: '',
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePassChange = this.handlePassChange.bind(this)
    this.handlePassConfChange = this.handlePassConfChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validator = this.validator.bind(this)
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handlePassChange(event) {
    this.setState({password: event.target.value})
  }

  handlePassConfChange(event) {
    this.setState({passwordConf: event.target.value})
  }

  handleSubmit(event) {
    this.validator()
    event.preventDefault()
  }

  validator() {
    if (this.state.password === this.state.passwordConf) {
      this.setState({validator: "Valid"})
    } else {
      this.setState({validator: "Invalid"})
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>>
          <label>Email</label>
          <input type="text" onChange={this.handleEmailChange} />
          <label>Password</label>
          <input type="password" onChange={this.handlePassChange} />
          <label>Confirm Password</label>
          <input type="password" onChange={this.handlePassConfChange} />
          <input type="submit" value="Submit" />
        </form>
        <label>{this.state.validator}</label>
      </div>

    )
  }
}

export default App;
