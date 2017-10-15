import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/authActions';
import LoginForm from '../../components/auth/LoginForm';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class LoginPage extends Component {
  handleSubmit(credentials) {
    this.props.actions.login(credentials);
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <h2>{ message }</h2>
            <LoginForm onSubmit={ this.handleSubmit.bind(this) } />
            <Link to={'signup'}>Signup</Link>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.auth.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
