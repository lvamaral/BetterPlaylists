import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }


  logInLink() {
    return <Link to="/login"> Log in</Link>;
  }

  SignUpLink() {
    return <Link to="/signup">Sign Up</Link>;
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const signInForm = (
      <div className="col-md-1">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            <br/>
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            <br/>
            <input type="submit" value="Continue" />
            <p>Already have an account?{this.logInLink()} instead.</p>
          </div>
        </form>
      </div>
    )

    const logInForm = (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            <br/>
            <input type="submit" value="Log In" />
            <p>Don't have an account? {this.SignUpLink()} instead.</p>
          </div>
        </form>
      </div>
    )

    let formContainer;

    if (this.props.formType === 'login') {
      formContainer = logInForm;
    } else {
      formContainer = signInForm;
    }

    return (
      <div className="login-form-container">
        <h1>Welcome to BetterPlaylists.</h1>
        {formContainer}
      </div>
    );
  }
}




export default withRouter(SessionForm);
