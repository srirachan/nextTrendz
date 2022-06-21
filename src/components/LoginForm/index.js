// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    ok: true,
    errorMsg: '',
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const credentials = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    const updatedData = {
      errorMsg: data.error_msg,
    }

    if (response.ok === true) {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({ok: false, errorMsg: updatedData.errorMsg})
    }
  }

  onChangeUserName = event => {
    console.log(event.target.value)

    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {ok, errorMsg} = this.state
    return (
      <div className="log-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="blur-container">
          <form className="form-container" onSubmit={this.onSubmit}>
            <img
              className="login-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <label className="input-element" htmlFor="username">
              USERNAME
            </label>
            <input
              className="input-element"
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onChangeUserName}
            />
            <label className="input-element" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="input-element"
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <div className="input-element login-button">
              <button className="login-button" type="submit">
                Login
              </button>
            </div>
          </form>
          <div>{ok ? '' : <p>{errorMsg}</p>}</div>
        </div>
      </div>
    )
  }
}

export default LoginForm
