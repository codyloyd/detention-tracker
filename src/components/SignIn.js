import React from 'react';
import * as auth from '../auth';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      error: null
    };
  }
  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  render() {
    return (
      <div>
        <div className="column is-5">
          {this.state.error
            ? <div className="notification is-danger">
                OOPS! Something went wrong: <br />
                {this.state.error}
              </div>
            : null}
          <form
            onSubmit={e => {
              e.preventDefault();
              auth
                .signIn({
                  email: this.state.email,
                  password: this.state.password
                })
                .catch(error => {
                  console.log(error);
                  this.setState({error: error.errorMessage});
                });
            }}
          >
            <label className="label">email:</label>
            <div className="control">
              <input
                type="email"
                className="input"
                name="email"
                placeholder="your school email address"
                onChange={this.handleInputChange}
              />
            </div>
            <label className="label">password:</label>
            <div className="control">
              <input
                type="password"
                className="input"
                name="password"
                placeholder="password"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="control">
              <input type="submit" className="button" value="Sign In" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
